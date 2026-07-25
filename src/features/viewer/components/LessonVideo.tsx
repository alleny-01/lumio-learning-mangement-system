import {
  Maximize2,
  Settings2,
  Volume2,
  Captions,
  SkipBack,
} from "lucide-react";
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

        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(4,10,17,0.78))] px-4 pb-3 pt-16">
          <div className="flex items-center justify-between gap-3 text-white/90">
            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5">
                <SkipBack className="size-3.5" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5">
                <Volume2 className="size-3.5" />
              </button>
              <span className="text-[10px] font-medium tracking-[0.16em]">
                04:12 / 12:45
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Captions className="size-4" />
              <Settings2 className="size-4" />
              <Maximize2 className="size-4" />
            </div>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[34%] rounded-full bg-tertiary-fixed" />
          </div>
        </div>
      </div>
    </section>
  );
}
