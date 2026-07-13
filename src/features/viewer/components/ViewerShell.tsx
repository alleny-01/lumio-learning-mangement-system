import { Sparkles } from "lucide-react";
import { ViewerSidebar } from "./ViewerSidebar";
import { ViewerHeader } from "./ViewerHeader";
import { LessonVideo } from "./LessonVideo";
import { LessonContent } from "./LessonContent";

export function ViewerShell() {
  return (
    <div className="min-h-screen bg-surface text-on-background antialiased">
      <div className="mx-auto flex min-h-screen max-w-374 flex-col lg:flex-row">
        <ViewerSidebar />

        <main className="flex-1 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-4">
          <div className="space-y-5">
            <ViewerHeader />
            <LessonVideo />
            <LessonContent />
          </div>
        </main>
      </div>

      <button className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-white shadow-[0_14px_30px_-18px_rgba(10,10,20,0.8)] transition-transform hover:scale-105">
        <Sparkles size={20} strokeWidth={1.25} />
      </button>
    </div>
  );
}
