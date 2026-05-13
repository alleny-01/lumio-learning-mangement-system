import Button from "./ui/Button";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-32 lg:pt-32 lg:pb-48">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-wider mb-8 uppercase">
          <span
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
          A new era of learning is here
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-background mb-6 leading-[1.1]">
          Learn Skills That <br />
          <span className="text-primary ">Actually Matter</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-sm text-on-surface-variant mb-12 font-body leading-relaxed">
          Lumio combines world-class curriculum with artificial intelligence to
          help you master modern tech and creative disciplines in weeks, not
          years.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            fullWidthOnMobile
            className="px-8 py-4 rounded-xl font-bold text-sm"
          >
            Get Started
          </Button>
          <Button
            variant="secondary"
            fullWidthOnMobile
            className="px-8 py-4 rounded-xl font-bold text-sm"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
