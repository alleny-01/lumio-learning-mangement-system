import Button from "./ui/Button";

function FeatureHighlights() {
  return (
    <section className="px-6 py-24 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Intelligence at Every Step
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Our platform isn&apos;t just a video player. It&apos;s a
            personalized mentor powered by industry-leading AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[320px]">
          <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end group transition-all hover:scale-[1.02]">
            <div className="absolute top-8 right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            <span
              className="material-symbols-outlined text-5xl text-primary mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <div>
              <h3 className="text-2xl font-bold mb-2">AI Quiz Generator</h3>
              <p className="text-on-surface-variant text-base">
                Our AI analyzes your course materials to create custom quizzes
                that focus on your specific knowledge gaps.
              </p>
            </div>
          </div>

          <div className="bg-inverse-surface rounded-3xl p-8 flex flex-col justify-between group transition-all hover:scale-[1.02]">
            <div className="w-16 h-16 bg-surface/10 rounded-xl flex items-center justify-center text-surface">
              <span className="material-symbols-outlined text-3xl">
                smart_toy
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-surface mb-2">
                AI Course Assistant
              </h3>
              <p className="text-surface-variant/80 text-base">
                Instant answers to any question while you watch your lessons.
              </p>
            </div>
          </div>

          <div className="bg-surface-container rounded-3xl p-8 flex flex-col gap-6 transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-secondary-container rounded-xl">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">
                  trending_up
                </span>
              </div>
              <h3 className="text-xl font-bold leading-tight">
                Progress Tracking
              </h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>UI DESIGN</span>
                  <span>82%</span>
                </div>
                <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-secondary to-secondary-container" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>AI ETHICS</span>
                  <span>45%</span>
                </div>
                <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-gradient-to-r from-secondary to-secondary-container" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-tertiary-fixed rounded-3xl p-8 flex items-center gap-8 relative overflow-hidden transition-all hover:scale-[1.02]">
            <div className="flex-grow z-10">
              <h3 className="text-3xl font-bold text-on-tertiary-fixed mb-2">
                Ready to Level Up?
              </h3>
              <p className="text-on-tertiary-fixed/80 max-w-sm mb-6 text-base">
                Join 15,000+ scholars learning the future of industry today.
              </p>
              <Button
                variant="dark"
                className="bg-on-tertiary-fixed px-8 py-4 rounded-xl font-bold hover:scale-[1.05] transition-transform text-base"
              >
                Get Started Now
              </Button>
            </div>
            <div className="hidden md:block absolute -right-4 -bottom-4 w-48 h-48 opacity-20">
              <span className="material-symbols-outlined text-[12rem]">
                school
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureHighlights;
              


