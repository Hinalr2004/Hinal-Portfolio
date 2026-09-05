import { useEffect, useRef } from "react";

const education = [
  {
    period: "2024 — 2027",
    institution: "Godavari College of Engineering, Jalgaon",
    degree: "B.Tech in Computer Engineering",
    detail: "CGPA: 8.02 / 10",
    type: "Degree",
  },
  {
    period: "2022 — 2024",
    institution: "Government Polytechnic College, Nandurbar",
    degree: "Diploma in Computer Engineering",
    detail: "Score: 86.97%",
    type: "Diploma",
  },
  {
    period: "2021 — 2022",
    institution: "K.N.K.V., Nandurbar",
    degree: "Higher Secondary Certificate (HSC)",
    detail: "Score: 82.17%",
    type: "HSC",
  },
];

const achievements = [
  {
    title: "TCS CodeVita Season 13",
    subtitle: "Global Rank 9365",
    desc: "Participated in TCS CodeVita Season 13, a global programming competition, and secured a global rank of 9365.",
    year: "2024",
  },
  {
    title: "Academic Performance",
    subtitle: "CGPA 8.02 / 10",
    desc: "Maintaining strong academic performance throughout the B.Tech Computer Engineering program.",
    year: "2024 — Present",
  },
  {
    title: "Technical Certifications",
    subtitle: "Machine Learning & DSA",
    desc: "Completed certifications in Machine Learning with Python and Data Structures & Algorithms.",
    year: "2024 — 2025",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = section.querySelectorAll(".section-fade");

    // Show everything immediately when reduced motion is enabled.
    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.classList.add("visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-32 lg:px-12"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #080a0f 0%, #090c12 50%, #080a0f 100%)",
        }}
      />

      {/* Ambient Glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className="section-fade mb-20 flex items-center gap-4"
          style={{
            fontFamily: "var(--font-mono)",
          }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{
              color: "var(--color-accent)",
            }}
          >
            04 — Education &amp; Achievements
          </span>

          <div
            className="h-px flex-1"
            style={{
              background: "rgba(255,255,255,0.07)",
            }}
          />
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* ================= EDUCATION ================= */}
          <div>
            <h2
              className="section-fade mb-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-foreground)",
              }}
            >
              Education
            </h2>

            <div className="section-fade relative">
              {/* Timeline Line */}
              <div
                className="absolute bottom-2 left-0 top-2 w-px"
                style={{
                  background: "rgba(255,255,255,0.07)",
                }}
              />

              <div className="space-y-10 pl-8">
                {education.map((item) => (
                  <article key={item.type} className="relative">
                    {/* Timeline Dot */}
                    <div
                      className="absolute -left-8 top-1.5 h-2 w-2 rounded-full"
                      style={{
                        background: "var(--color-accent)",
                        boxShadow: "0 0 8px rgba(59,130,246,0.5)",
                        transform: "translateX(-50%)",
                        marginLeft: "1px",
                      }}
                    />

                    {/* Period */}
                    <span
                      className="mb-2 block text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-label)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {item.period}
                    </span>

                    {/* Institution */}
                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        color: "var(--color-foreground)",
                      }}
                    >
                      {item.institution}
                    </h3>

                    {/* Degree */}
                    <p
                      className="mb-2 text-sm"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "var(--color-muted)",
                      }}
                    >
                      {item.degree}
                    </p>

                    {/* Score */}
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: "var(--color-accent-dim)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {item.detail}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* ================= ACHIEVEMENTS ================= */}
          <div>
            <h2
              className="section-fade mb-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-foreground)",
              }}
            >
              Achievements
            </h2>

            <div className="section-fade space-y-4">
              {achievements.map((achievement) => (
                <article
                  key={achievement.title}
                  className="group rounded-xl p-5 transition-all duration-300 hover:bg-[rgba(59,130,246,0.04)]"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.borderColor =
                      "rgba(59,130,246,0.25)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                  }}
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      {/* Achievement Title */}
                      <h3
                        className="mb-1 font-semibold"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9375rem",
                          lineHeight: "1.4",
                          color: "var(--color-foreground)",
                        }}
                      >
                        {achievement.title}
                      </h3>

                      {/* Achievement Subtitle */}
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-accent)",
                        }}
                      >
                        {achievement.subtitle}
                      </span>
                    </div>

                    {/* Year */}
                    <span
                      className="mt-0.5 flex-shrink-0 text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-label)",
                      }}
                    >
                      {achievement.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--color-muted)",
                      lineHeight: "1.6",
                    }}
                  >
                    {achievement.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}