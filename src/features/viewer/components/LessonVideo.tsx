import { getYoutubeEmbedUrl } from "@/features/courses/api/courseData";

export function LessonVideo({ youtubeUrl, title }: { youtubeUrl: string; title: string }) {
  return (
    <section className="overflow-hidden rounded-sm bg-[#071724] shadow-[0_24px_60px_-30px_rgba(7,23,36,0.7)]">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[radial-gradient(circle_at_top,#123447_0%,#071724_52%,#041018_100%)]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={getYoutubeEmbedUrl(youtubeUrl)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
