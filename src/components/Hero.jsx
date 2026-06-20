import { motion } from "framer-motion";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden border-b border-border"
    >
      {/* ambient grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E9EBEC 1px, transparent 1px), linear-gradient(90deg, #E9EBEC 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* scanline sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-scan/[0.05] to-transparent animate-scanline" />
      </div>
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative max-w-5xl w-full mx-auto px-6 sm:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-muted flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 bg-scan rounded-full animate-pulse" />
          SYSTEM STATUS: ONLINE — {profile.location}
        </motion.div>

        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[13vw] sm:text-[6.5rem] leading-[0.95] font-extrabold tracking-tight text-ink"
          >
            {profile.name}
          </motion.h1>

          {/* detection box */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 100% 0)" }}
            animate={{ clipPath: "inset(0 0% 0% 0)" }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="absolute -inset-x-2 -inset-y-2 sm:-inset-x-4 sm:-inset-y-3 border border-scan/70 pointer-events-none"
          >
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-scan" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-scan" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-scan" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-scan" />
            <span className="absolute -top-6 left-0 font-mono text-[10px] sm:text-xs text-scan bg-bg px-1">
              ENGINEER — 99.7% CONFIDENCE
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 sm:mt-12 max-w-xl text-muted text-base sm:text-lg leading-relaxed"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs"
        >
          <a
            href="#contact"
            className="px-4 py-2 bg-scan text-bg font-semibold hover:opacity-90 transition-opacity"
          >
            get in touch
          </a>
          <a
            href="#processes"
            className="px-4 py-2 border border-border text-ink hover:border-scan/60 transition-colors"
          >
            view projects
          </a>
          <span className="text-faint hidden sm:inline">
            scroll<span className="animate-blink">_</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
