import {
  Play,
  Maximize2,
  Settings2,
  Volume2,
  Captions,
  SkipBack,
} from "lucide-react";

export function LessonVideo() {
  return (
    <section className="overflow-hidden rounded-sm bg-[#071724] shadow-[0_24px_60px_-30px_rgba(7,23,36,0.7)]">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[radial-gradient(circle_at_top,#123447_0%,#071724_52%,#041018_100%)]">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-1/2 top-8 h-[74%] w-[74%] -translate-x-1/2 rounded-[18px] border border-cyan-500/10 bg-[linear-gradient(180deg,rgba(8,32,47,0.95),rgba(5,18,28,0.95))] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]" />
          <div className="absolute left-1/2 top-[15%] h-[55%] w-[64%] -translate-x-1/2 rounded-[10px] border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(13,41,58,0.95),rgba(7,25,37,0.95))]" />
          <div className="absolute left-[20%] top-[18%] h-[60%] w-[7%] rounded-[12px] bg-cyan-900/40 blur-[1px]" />
          <div className="absolute left-[29%] top-[18%] h-[60%] w-[7%] rounded-[12px] bg-cyan-900/35 blur-[1px]" />
          <div className="absolute left-[38%] top-[18%] h-[60%] w-[7%] rounded-[12px] bg-cyan-900/40 blur-[1px]" />
          <div className="absolute left-[62%] top-[18%] h-[60%] w-[7%] rounded-[12px] bg-cyan-900/40 blur-[1px]" />
          <div className="absolute left-[71%] top-[18%] h-[60%] w-[7%] rounded-[12px] bg-cyan-900/35 blur-[1px]" />
          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-tertiary-fixed text-inverse-surface shadow-[0_12px_30px_-12px_rgba(178,247,70,0.85)]">
            <Play className="ml-1 size-7 fill-current" />
          </div>
        </div>

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
