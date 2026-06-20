import { motion } from "framer-motion";
import { experience, education } from "../data";

function SectionHeading({ index, title, note }) {
  return (
    <div className="flex items-baseline justify-between mb-10 sm:mb-14">
      <h2 className="font-mono text-sm sm:text-base text-ink tracking-wide">
        <span className="text-faint">{index}</span> {title}
      </h2>
      {note && <span className="font-mono text-xs text-faint hidden sm:block">{note}</span>}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="log" className="border-b border-border py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading index="01" title="experience_log" note="reverse-chronological" />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-10"
            >
              <div className="font-mono text-xs text-faint pt-1">{job.period}</div>
              <div className="border-l border-border pl-6 sm:pl-8 relative">
                <span className="absolute -left-[5px] top-2 w-2 h-2 bg-scan" />
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-ink">{job.company}</h3>
                  <span className="font-mono text-[10px] px-2 py-0.5 border border-border text-muted">
                    {job.status}
                  </span>
                </div>
                <p className="text-sm text-muted mb-4">
                  {job.role} · {job.location}
                </p>
                <ul className="space-y-2.5">
                  {job.log.map((line) => (
                    <li
                      key={line}
                      className="text-sm text-ink/90 leading-relaxed flex gap-3"
                    >
                      <span className="text-scan font-mono shrink-0">›</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-10"
          >
            <div className="font-mono text-xs text-faint pt-1">{education.period}</div>
            <div className="border-l border-border pl-6 sm:pl-8 relative">
              <span className="absolute -left-[5px] top-2 w-2 h-2 bg-amber" />
              <h3 className="text-lg sm:text-xl font-semibold text-ink mb-1">
                {education.degree}
              </h3>
              <p className="text-sm text-muted">{education.school}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
