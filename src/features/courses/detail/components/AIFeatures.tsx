export const AIFeatures: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground mb-3">
          AI Features
        </p>
        <h2 className="text-xl sm:text-2xl font-normal text-foreground mb-2 leading-snug">
          Lumio Assistant - Built-in intelligence, where you need it
        </h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-md leading-relaxed">
          Two purpose-built AI tools that adapt to your learning — available
          throughout every course.
        </p>

        <div className="grid sm:grid-cols-2 border border-border rounded-xl overflow-hidden divide-x divide-border">
          <div className="p-8 bg-background hover:bg-muted/40 transition-colors duration-200 group">
            <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center mb-5 bg-muted group-hover:border-border/80">
              <span className="material-symbols-outlined text-[16px] text-muted-foreground">
                chat
              </span>
            </div>
            <p className="text-sm font-medium text-foreground mb-1.5">
              AI Chatbot
            </p>
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
              Ask anything, get instant clarity. The course chatbot understands
              your material and responds with context-aware answers that keep
              you moving forward.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Conversational", "Instant answers", "Context-aware"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="p-8 bg-background hover:bg-muted/40 transition-colors duration-200 group">
            <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center mb-5 bg-muted group-hover:border-border/80">
              <span className="material-symbols-outlined text-[16px] text-muted-foreground">
                quiz
              </span>
            </div>
            <p className="text-sm font-medium text-foreground mb-1.5">
              AI Quiz Generator
            </p>
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
              Reinforce what you've learned with automatically generated
              quizzes. Questions adapt to each lesson's content, testing
              comprehension at the right depth.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Auto-generated",
                "Adaptive difficulty",
                "Instant feedback",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
