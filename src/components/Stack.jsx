import { motion } from "framer-motion";
import { skills, certifications } from "../data";

export default function Stack() {
  return (
    <section id="stack" className="border-b border-border py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-baseline justify-between mb-10 sm:mb-14">
          <h2 className="font-mono text-sm sm:text-base text-ink tracking-wide">
            <span className="text-faint">03</span> stack_and_certs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
          <div className="space-y-7">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <p className="font-mono text-xs text-faint mb-2.5">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-sm px-3 py-1.5 border border-border text-ink/90 hover:border-scan/60 hover:text-scan transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="font-mono text-xs text-faint mb-2.5">Certifications</p>
            <div className="border border-border divide-y divide-border">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center justify-between px-4 py-3.5 text-sm"
                >
                  <div>
                    <p className="text-ink/90">{c.name}</p>
                    <p className="text-xs text-faint mt-0.5">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-faint">{c.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
