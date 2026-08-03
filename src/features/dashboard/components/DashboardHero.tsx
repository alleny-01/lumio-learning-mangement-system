import { motion } from "framer-motion";

interface DashboardHeroProps {
  firstName: string;
  weeklyStudyHours: number;
}

export function DashboardHero({
  firstName,
  weeklyStudyHours,
}: DashboardHeroProps): React.JSX.Element {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-sm bg-surface-container-lowest px-5 py-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.12)] sm:px-6 sm:py-6"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* Welcome Text */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[14px] font-normal tracking-tight text-on-surface sm:text-[16px]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            Welcome back, {firstName} 👋
          </motion.h1>

          <motion.p
            className="mt-5 text-[10px] font-light leading-relaxed text-on-surface-variant"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
          >
            You logged{" "}
            <span className="inline-flex items-center rounded-sm bg-primary/10 px-2 py-0.5 font-medium text-primary">
              {weeklyStudyHours} study hours
            </span>{" "}
            this week. Keep showing up and your progress graph will do the
            bragging for you.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
