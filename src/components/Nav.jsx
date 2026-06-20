import { useEffect, useState } from "react";

const sections = [
  { id: "log", label: "log" },
  { id: "processes", label: "processes" },
  { id: "stack", label: "stack" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between font-mono text-xs">
        <a href="#top" className="text-ink tracking-wide">
          sriram<span className="text-scan">.</span>v
        </a>
        <ul className="hidden sm:flex items-center gap-7 text-muted">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`transition-colors hover:text-ink ${
                  active === s.id ? "text-scan" : ""
                }`}
              >
                {active === s.id ? "> " : ""}
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-scan animate-pulse" />
          <span>online</span>
        </div>
      </nav>
    </header>
  );
}
