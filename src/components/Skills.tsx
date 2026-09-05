import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Programming",
    icon: "⌨",
    skills: ["Python", "Java", "C++", "C"],
  },
  {
    category: "Frontend",
    icon: "⬡",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Backend",
    icon: "◈",
    skills: ["Django", "Django REST Framework", "REST APIs"],
  },
  {
    category: "Database",
    icon: "◉",
    skills: ["MySQL", "SQL", "MongoDB"],
  },
];

const allSkills = skillGroups.flatMap((g) => g.skills.map((s) => ({ name: s, category: g.category })));

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory
    ? allSkills.filter((s) => s.category === activeCategory)
    : allSkills;

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none grid-overlay"
        style={{ opacity: 0.4 }}
      />
      <div
        className="absolute right-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-fade flex items-center gap-4 mb-20" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-accent)" }}>
            02 — Skills
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        <div className="section-fade mb-12">
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-foreground)",
            }}
          >
            Technology Stack
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-muted)", fontSize: "1rem" }}>
            Filter by category to explore the stack.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="section-fade flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className="px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "var(--font-mono)",
              background: activeCategory === null ? "var(--color-accent)" : "rgba(255,255,255,0.04)",
              color: activeCategory === null ? "#fff" : "var(--color-muted)",
              border: activeCategory === null ? "1px solid var(--color-accent)" : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            All
          </button>
          {skillGroups.map((g) => (
            <button
              key={g.category}
              onClick={() => setActiveCategory(activeCategory === g.category ? null : g.category)}
              className="px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "var(--font-mono)",
                background: activeCategory === g.category ? "var(--color-accent)" : "rgba(255,255,255,0.04)",
                color: activeCategory === g.category ? "#fff" : "var(--color-muted)",
                border: activeCategory === g.category
                  ? "1px solid var(--color-accent)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {g.category}
            </button>
          ))}
        </div>

        {/* Skills visualization */}
        <div className="section-fade grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-20">
          {filtered.map((s) => (
            <div
              key={s.name + s.category}
              className="skill-card group relative rounded-xl px-5 py-4 cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(59,130,246,0.08) 0%, transparent 70%)",
                }}
              />
              <span
                className="block text-xs mb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-label)",
                  letterSpacing: "0.1em",
                }}
              >
                {s.category}
              </span>
              <span
                className="block font-medium"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  color: "var(--color-foreground)",
                }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* Category cards */}
        <div className="section-fade grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((g) => (
            <div
              key={g.category}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
                }}
              />
              <div
                className="text-2xl mb-4"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
              >
                {g.icon}
              </div>
              <h3
                className="mb-4 text-sm tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
              >
                {g.category}
              </h3>
              <ul className="space-y-1.5">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-muted)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "var(--color-accent)" }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
