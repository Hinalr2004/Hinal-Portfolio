import { useEffect, useRef } from "react";

const stats = [
  { value: "8.02", label: "CGPA / 10", sub: "Academic Excellence" },
  { value: "86.97%", label: "Diploma Score", sub: "Top Academic Record" },
  { value: "9365", label: "TCS CodeVita", sub: "Global Rank" },
  { value: "4+", label: "Projects Built", sub: "End-to-End" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRef.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 lg:px-12 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #080a0f 0%, #0a0d14 50%, #080a0f 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div
          className="section-fade flex items-center gap-4 mb-20"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            01 — About
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="section-fade mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-foreground)",
              }}
            >
              Engineering at the
              <br />
              <span className="accent-gradient">intersection of</span>
              <br />
              software & intelligence.
            </h2>

            <div className="section-fade space-y-5">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8",
                  color: "var(--color-muted)",
                }}
              >
                I'm Hinal Tekavade, a Computer Engineering student with a strong foundation in
                software development, full-stack engineering, and artificial intelligence. I don't
                just write code — I architect systems that solve real problems.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8",
                  color: "var(--color-muted)",
                }}
              >
                From building REST APIs to training ML models, my work spans the full spectrum of
                modern software. I'm driven by the challenge of making complex systems feel effortless
                to the people who use them.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                  color: "rgba(240,244,255,0.55)",
                }}
              >
                Currently seeking opportunities in software engineering, full-stack development,
                and AI/ML — where precision meets purpose.
              </p>
            </div>
          </div>

          {/* Right: stats */}
          <div className="section-fade grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-xl p-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.4s ease, background 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)",
                  }}
                />
                <span
                  className="block mb-1 font-bold"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="block text-xs tracking-widest uppercase mb-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-accent)",
                  }}
                >
                  {s.label}
                </span>
                <span
                  className="block text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-label)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
