import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { projects } from "../data";

function ProcessCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const dot = project.statusColor === "amber" ? "bg-amber" : "bg-scan";
  const text = project.statusColor === "amber" ? "text-amber" : "text-scan";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border border-border bg-surface/60 hover:border-faint transition-colors"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
          <span className="font-mono text-xs text-faint shrink-0 pt-1 sm:pt-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-1">
              <h3 className="text-lg sm:text-xl font-semibold text-ink truncate">
                {project.name}
              </h3>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 border border-border flex items-center gap-1.5 ${text}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                {project.status}
              </span>
            </div>
            <p className="text-sm text-muted truncate">{project.tagline}</p>
          </div>
        </div>
        <ChevronDown
          size={16}
          className={`text-faint shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pl-[3.25rem] sm:pl-[4.75rem]">
              <p className="text-sm text-ink/90 leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              <ul className="space-y-2 mb-5">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-muted flex gap-3 leading-relaxed"
                  >
                    <span className="text-scan font-mono shrink-0">&rsaquo;</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2 py-1 bg-elevated text-muted border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-2 border border-scan/50 text-scan hover:bg-scan hover:text-bg transition-colors"
              >
                view live <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="processes" className="border-b border-border py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-baseline justify-between mb-10 sm:mb-14">
          <h2 className="font-mono text-sm sm:text-base text-ink tracking-wide">
            <span className="text-faint">02</span> running_processes
          </h2>
          <span className="font-mono text-xs text-faint hidden sm:block">
            {projects.length} active
          </span>
        </div>
        <div className="space-y-3">
          {projects.map((p, i) => (
            <ProcessCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
