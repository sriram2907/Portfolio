import { motion } from "framer-motion";
import { Code2, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { profile } from "../data";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-baseline justify-between mb-10 sm:mb-14">
          <h2 className="font-mono text-sm sm:text-base text-ink tracking-wide">
            <span className="text-faint">04</span> contact
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="border border-border bg-surface/60 p-6 sm:p-10"
        >
          <p className="font-mono text-xs text-faint mb-4">~/sriram-v $ contact --reason</p>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-ink leading-tight max-w-xl">
            Building something worth detecting?
          </h3>
          <p className="text-muted mt-4 max-w-lg leading-relaxed">
            Open to internships, freelance builds, and collaborations across computer vision,
            civic-tech, and full-stack products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-scan text-bg font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              {copied ? <Check size={14} /> : <Mail size={14} />}
              {copied ? "copied" : profile.email}
              {!copied && <Copy size={12} className="opacity-60" />}
            </button>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="px-4 py-2.5 border border-border text-ink font-mono text-xs hover:border-scan/60 transition-colors"
            >
              {profile.phone}
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-5">
            <a
              href={"https://github.com/sriram2907"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href={"www.linkedin.com/in/sriramv27"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href={"https://leetcode.com/u/ram2704/"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
            >
              <Code2 size={16} /> LeetCode
            </a>
          </div>
        </motion.div>

        <footer className="mt-10 flex flex-col sm:flex-row gap-2 sm:items-center justify-between font-mono text-[11px] text-faint">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, Framer Motion.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-scan animate-pulse" />
            status: actively building
          </p>
        </footer>
      </div>
    </section>
  );
}
