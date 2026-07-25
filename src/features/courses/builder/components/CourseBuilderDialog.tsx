import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Plus, Save, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  createCourseDraft,
  setCourseStatus,
  updateCourse,
  upsertCourseModules,
  upsertLessons,
} from "@/shared/api/courses";
import { createResource } from "@/shared/api/resources";
import type { CourseStatus } from "@/shared/types/database";
import type { CourseBuilderDraft } from "../types";
import {
  courseCategories,
  createEmptyDraft,
  createEmptyLesson,
  createEmptyModule,
  createId,
  isValidYoutubeUrl,
  moveItem,
  slugify,
} from "../utils";

interface CourseBuilderDialogProps {
  instructorId: string;
  initialDraft?: CourseBuilderDraft;
  onClose: () => void;
  onSaved: () => void;
}

function fieldClass() {
  return "w-full rounded-sm bg-surface-container-low px-3 py-2 text-xs outline-none ring-1 ring-transparent transition focus:bg-surface-container-lowest focus:ring-primary/20";
}

export function CourseBuilderDialog({
  instructorId,
  initialDraft,
  onClose,
  onSaved,
}: CourseBuilderDialogProps): React.JSX.Element {
  const [draft, setDraft] = useState<CourseBuilderDraft>(
    initialDraft ?? createEmptyDraft(),
  );
  const [step, setStep] = useState<"info" | "content">("info");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const isValid = useMemo(() => {
    return (
      draft.title.trim().length > 2 &&
      draft.description.trim().length > 10 &&
      isValidYoutubeUrl(draft.previewVideoUrl) &&
      draft.modules.every((module) =>
        module.lessons.every((lesson) => isValidYoutubeUrl(lesson.youtubeUrl)),
      )
    );
  }, [draft]);

  const saveDraft = async (status: CourseStatus = draft.status) => {
    if (!isValid || isSaving) return;
    setIsSaving(true);
    setError(null);

    try {
      const duration = draft.modules.reduce(
        (sum, module) =>
          sum +
          module.lessons.reduce(
            (lessonSum, lesson) => lessonSum + Number(lesson.durationMinutes || 0),
            0,
          ),
        0,
      );
      const coursePayload = {
        instructor_id: instructorId,
        title: draft.title.trim(),
        slug: slugify(draft.title) || `course-${Date.now()}`,
        description: draft.description.trim(),
        thumbnail_url: draft.thumbnailUrl || null,
        category: draft.category,
        difficulty: draft.difficulty,
        preview_video_url: draft.previewVideoUrl || null,
        duration_minutes: duration,
        status,
      };

      const courseResult = draft.id
        ? await updateCourse(draft.id, coursePayload)
        : await createCourseDraft(coursePayload);

      if (courseResult.error || !courseResult.data) {
        throw courseResult.error ?? new Error("Unable to save course.");
      }

      const courseId = courseResult.data.id;
      const moduleRows = draft.modules.map((module, index) => ({
        id: module.persistedId,
        course_id: courseId,
        title: module.title,
        sort_order: index + 1,
      }));
      const modulesResult = await upsertCourseModules(moduleRows);
      if (modulesResult.error) throw modulesResult.error;

      const savedModules = modulesResult.data ?? [];
      const lessons = draft.modules.flatMap((module, moduleIndex) => {
        const savedModule = savedModules[moduleIndex];
        if (!savedModule) return [];
        return module.lessons.map((lesson, lessonIndex) => ({
          id: lesson.persistedId,
          module_id: savedModule.id,
          title: lesson.title,
          description: lesson.description || null,
          youtube_url: lesson.youtubeUrl || draft.previewVideoUrl,
          duration_minutes: Number(lesson.durationMinutes || 0),
          core_concept: lesson.coreConcept || null,
          sort_order: lessonIndex + 1,
        }));
      });

      if (lessons.length) {
        const lessonsResult = await upsertLessons(courseId, lessons);
        if (lessonsResult.error) throw lessonsResult.error;

        for (const module of draft.modules) {
          for (const lesson of module.lessons) {
            for (const resource of lesson.resources) {
              if (!resource.title || !resource.externalUrl) continue;
              await createResource({
                course_id: courseId,
                title: resource.title,
                external_url: resource.externalUrl,
                resource_kind: resource.resourceKind,
              });
            }
          }
        }
      }

      if (status !== "draft") {
        await setCourseStatus(courseId, status);
      }

      setDraft((current) => ({
        ...current,
        id: courseId,
        status,
      }));
      onSaved();
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Unable to save this course.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const updateModule = (moduleId: string, title: string) => {
    setDraft((current) => ({
      ...current,
      modules: current.modules.map((module) =>
        module.id === moduleId ? { ...module, title } : module,
      ),
    }));
  };

  const updateLesson = (
    moduleId: string,
    lessonId: string,
    values: Partial<CourseBuilderDraft["modules"][number]["lessons"][number]>,
  ) => {
    setDraft((current) => ({
      ...current,
      modules: current.modules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              lessons: module.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, ...values } : lesson,
              ),
            }
          : module,
      ),
    }));
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-builder-title"
        className="flex max-h-[92vh] w-full max-w-5xl flex-col rounded-sm border border-outline-variant/30 bg-surface-container-lowest shadow-2xl"
      >
        <header className="flex items-center justify-between border-b border-outline-variant/30 px-5 py-4">
          <div>
            <p className="text-[10px] font-light uppercase tracking-[0.24em] text-primary">
              Course Builder
            </p>
            <h2 id="course-builder-title" className="mt-1 text-sm font-medium">
              {draft.id ? "Edit course" : "Create course"}
            </h2>
          </div>
          <button
            type="button"
            className="rounded-sm p-2 text-on-surface-variant hover:bg-surface-container"
            onClick={() => setShowCancelConfirm(true)}
            aria-label="Close course builder"
          >
            <X size={18} strokeWidth={1.3} />
          </button>
        </header>

        <div className="flex gap-2 border-b border-outline-variant/30 px-5 py-3">
          {(["info", "content"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStep(item)}
              className={`rounded-sm px-3 py-2 text-xs capitalize ${
                step === item
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-low text-on-surface-variant"
              }`}
            >
              {item === "info" ? "Course info" : "Course content"}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {step === "info" ? (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-1.5 text-xs">
                Title
                <input
                  className={fieldClass()}
                  value={draft.title}
                  onBlur={() => draft.id && saveDraft("draft")}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      title: event.target.value,
                    }))
                  }
                />
              </label>
              <label className="space-y-1.5 text-xs">
                Category
                <select
                  className={fieldClass()}
                  value={draft.category}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      category: event.target.value,
                    }))
                  }
                >
                  {courseCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1.5 text-xs">
                Difficulty
                <select
                  className={fieldClass()}
                  value={draft.difficulty}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      difficulty: event.target.value as CourseBuilderDraft["difficulty"],
                    }))
                  }
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </label>
              <label className="space-y-1.5 text-xs">
                Thumbnail URL
                <input
                  className={fieldClass()}
                  value={draft.thumbnailUrl}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      thumbnailUrl: event.target.value,
                    }))
                  }
                />
              </label>
              <label className="space-y-1.5 text-xs md:col-span-2">
                Short preview YouTube URL
                <input
                  className={fieldClass()}
                  value={draft.previewVideoUrl}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      previewVideoUrl: event.target.value,
                    }))
                  }
                />
              </label>
              <label className="space-y-1.5 text-xs md:col-span-2">
                Description
                <textarea
                  className={`${fieldClass()} min-h-28 resize-y`}
                  value={draft.description}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      description: event.target.value,
                    }))
                  }
                />
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              {draft.modules.map((module, moduleIndex) => (
                <section
                  key={module.id}
                  className="rounded-sm border border-border/40 bg-surface-container-low p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <input
                      className={fieldClass()}
                      value={module.title}
                      onBlur={() => draft.id && saveDraft("draft")}
                      onChange={(event) =>
                        updateModule(module.id, event.target.value)
                      }
                    />
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setDraft((current) => ({
                            ...current,
                            modules: moveItem(current.modules, moduleIndex, -1),
                          }))
                        }
                      >
                        <ArrowUp />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setDraft((current) => ({
                            ...current,
                            modules: moveItem(current.modules, moduleIndex, 1),
                          }))
                        }
                      >
                        <ArrowDown />
                      </Button>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() =>
                          setDraft((current) => ({
                            ...current,
                            modules: current.modules.filter(
                              (item) => item.id !== module.id,
                            ),
                          }))
                        }
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <article
                        key={lesson.id}
                        className="rounded-sm bg-surface-container-lowest p-3"
                      >
                        <div className="grid gap-3 md:grid-cols-2">
                          <input
                            className={fieldClass()}
                            value={lesson.title}
                            onChange={(event) =>
                              updateLesson(module.id, lesson.id, {
                                title: event.target.value,
                              })
                            }
                          />
                          <input
                            className={fieldClass()}
                            value={lesson.youtubeUrl}
                            placeholder="YouTube video URL"
                            onChange={(event) =>
                              updateLesson(module.id, lesson.id, {
                                youtubeUrl: event.target.value,
                              })
                            }
                          />
                          <textarea
                            className={`${fieldClass()} min-h-20 md:col-span-2`}
                            value={lesson.description}
                            placeholder="Lesson description"
                            onChange={(event) =>
                              updateLesson(module.id, lesson.id, {
                                description: event.target.value,
                              })
                            }
                          />
                          <input
                            className={fieldClass()}
                            type="number"
                            min={0}
                            value={lesson.durationMinutes}
                            onChange={(event) =>
                              updateLesson(module.id, lesson.id, {
                                durationMinutes: Number(event.target.value),
                              })
                            }
                          />
                          <input
                            className={fieldClass()}
                            value={lesson.coreConcept}
                            placeholder="Core concept summary"
                            onChange={(event) =>
                              updateLesson(module.id, lesson.id, {
                                coreConcept: event.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateLesson(module.id, lesson.id, {
                                resources: [
                                  ...lesson.resources,
                                  {
                                    id: createId("resource"),
                                    title: "Resource",
                                    resourceKind: "link",
                                    externalUrl: "",
                                  },
                                ],
                              })
                            }
                          >
                            <Plus /> Resource
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon-sm"
                            onClick={() =>
                              setDraft((current) => ({
                                ...current,
                                modules: current.modules.map((item) =>
                                  item.id === module.id
                                    ? {
                                        ...item,
                                        lessons: moveItem(
                                          item.lessons,
                                          lessonIndex,
                                          -1,
                                        ),
                                      }
                                    : item,
                                ),
                              }))
                            }
                          >
                            <ArrowUp />
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon-sm"
                            onClick={() =>
                              setDraft((current) => ({
                                ...current,
                                modules: current.modules.map((item) =>
                                  item.id === module.id
                                    ? {
                                        ...item,
                                        lessons: moveItem(
                                          item.lessons,
                                          lessonIndex,
                                          1,
                                        ),
                                      }
                                    : item,
                                ),
                              }))
                            }
                          >
                            <ArrowDown />
                          </Button>
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon-sm"
                            onClick={() =>
                              setDraft((current) => ({
                                ...current,
                                modules: current.modules.map((item) =>
                                  item.id === module.id
                                    ? {
                                        ...item,
                                        lessons: item.lessons.filter(
                                          (row) => row.id !== lesson.id,
                                        ),
                                      }
                                    : item,
                                ),
                              }))
                            }
                          >
                            <Trash2 />
                          </Button>
                        </div>
                        {lesson.resources.map((resource) => (
                          <div
                            key={resource.id}
                            className="mt-3 grid gap-2 md:grid-cols-[1fr_1fr_auto]"
                          >
                            <input className={fieldClass()} value={resource.title} readOnly />
                            <input
                              className={fieldClass()}
                              placeholder="Resource URL"
                              value={resource.externalUrl}
                              onChange={(event) =>
                                updateLesson(module.id, lesson.id, {
                                  resources: lesson.resources.map((item) =>
                                    item.id === resource.id
                                      ? { ...item, externalUrl: event.target.value }
                                      : item,
                                  ),
                                })
                              }
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              onClick={() =>
                                updateLesson(module.id, lesson.id, {
                                  resources: lesson.resources.filter(
                                    (item) => item.id !== resource.id,
                                  ),
                                })
                              }
                            >
                              <Trash2 />
                            </Button>
                          </div>
                        ))}
                      </article>
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        modules: current.modules.map((item) =>
                          item.id === module.id
                            ? {
                                ...item,
                                lessons: [...item.lessons, createEmptyLesson()],
                              }
                            : item,
                        ),
                      }))
                    }
                  >
                    <Plus /> Add lesson
                  </Button>
                </section>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setDraft((current) => ({
                    ...current,
                    modules: [...current.modules, createEmptyModule()],
                  }))
                }
              >
                <Plus /> Add module
              </Button>
            </div>
          )}

          {error && <p className="mt-4 text-xs text-error">{error}</p>}
          {!isValid && (
            <p className="mt-4 text-xs text-on-surface-variant">
              Add a title, useful description, and valid YouTube URLs before saving.
            </p>
          )}
        </div>

        <footer className="flex flex-col gap-2 border-t border-outline-variant/30 px-5 py-4 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" onClick={() => saveDraft("draft")}>
            <Save /> Save as Draft
          </Button>
          <Button type="button" variant="outline" onClick={() => saveDraft("saved")}>
            Save
          </Button>
          <Button type="button" onClick={() => saveDraft("published")}>
            {isSaving ? "Saving..." : "Save & Publish"}
          </Button>
        </footer>
      </section>

      {showCancelConfirm && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/45 px-4">
          <div className="w-full max-w-sm rounded-sm bg-surface-container-lowest p-5">
            <h3 className="text-sm font-medium">Discard changes?</h3>
            <p className="mt-2 text-xs font-light leading-6 text-on-surface-variant">
              Unsaved builder changes will be lost.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowCancelConfirm(false)}
              >
                Keep editing
              </Button>
              <Button type="button" variant="destructive" onClick={onClose}>
                Discard
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
