import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";

const projects = [
  {
    index: "01",
    title: "Crowdsourced Civic Issue Reporting & Resolution System",
    description:
      "A full-stack civic complaint management platform that enables citizens to report, track, and manage civic issues through a centralized system. Includes role-based access, AI-assisted complaint classification, duplicate detection, issue prioritization, department mapping, maps, notifications, SLA tracking, analytics, and PDF reports.",
    tech: [
      "React.js",
      "Django",
      "Django REST Framework",
      "MySQL",
      "AI/ML",
      "JWT",
      "Leaflet",
    ],
    category: "Full-Stack · AI/ML",
    featured: true,
  },
  {
    index: "02",
    title: "AI-Based Biogas Production Prediction System",
    description:
      "A machine-learning-based system designed to predict biogas production using relevant production and environmental parameters. The project focuses on data preprocessing, analysis, machine learning, and production prediction.",
    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    category: "AI/ML · Data Science",
    featured: true,
  },
  {
    index: "03",
    title: "Personal AI Desktop Assistant",
    description:
      "A Python-based voice-controlled desktop assistant capable of understanding voice commands and performing basic computer tasks. It uses speech recognition, text-to-speech, command processing, and task automation.",
    tech: [
      "Python",
      "Speech Recognition",
      "Text-to-Speech",
      "Automation",
    ],
    category: "AI · Python",
    featured: false,
  },
  {
    index: "04",
    title: "Smart Expense Tracker",
    description:
      "A web-based expense tracking application built with React.js and MongoDB for managing daily income and expenses. Users can add, update, delete, and categorize transactions while viewing expense summaries and category-wise financial analysis.",
    tech: ["React.js", "MongoDB", "JavaScript"],
    category: "Full-Stack · Web",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        }),
      { threshold: 0.08 }
    );

    sectionRef.current
      ?.querySelectorAll(".section-fade")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-6 lg:px-12 relative"
    >
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div
          className="section-fade flex items-center gap-4 mb-20"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            03 — Projects
          </span>

          <div
            className="flex-1 h-px"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />
        </div>

        {/* Title */}
        <div className="section-fade mb-14">
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-foreground)",
            }}
          >
            Selected Work
          </h2>
        </div>

        {/* ==========================================
            FEATURED PROJECTS
        ========================================== */}

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <div
                key={p.index}
                className="project-card group relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
                  }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, rgba(59,130,246,0.06) 0%, transparent 60%)",
                  }}
                />

                <div className="p-8">

                  {/* Project number + category */}
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="text-xs tracking-widest"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-label)",
                      }}
                    >
                      {p.index}
                    </span>

                    <span
                      className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-accent)",
                        background: "var(--color-accent-dim)",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* Project title */}
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "1.25rem",
                      color: "var(--color-foreground)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-6 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "var(--color-muted)",
                      lineHeight: "1.7",
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md text-xs"
                        style={{
                          fontFamily: "var(--font-mono)",
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--color-muted)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">

                    {/* GitHub */}
                    <a
                      href="https://github.com/Hinalr2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-muted)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "var(--color-foreground)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--color-muted)")
                      }
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      Code
                    </a>

                    {/* Live Demo - placeholder */}
                    <a
                      href="#"
                      className="flex items-center gap-2 text-xs transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-muted)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "var(--color-accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--color-muted)")
                      }
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* ==========================================
            OTHER PROJECTS
        ========================================== */}

        <div className="section-fade grid sm:grid-cols-2 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <div
                key={p.index}
                className="project-card group relative rounded-xl p-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Number + category */}
                <div className="flex items-center justify-between mb-3">

                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-label)",
                    }}
                  >
                    {p.index}
                  </span>

                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                      background: "var(--color-accent-dim)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {p.category}
                  </span>

                </div>

                {/* Title */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--color-foreground)",
                  }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-muted)",
                    lineHeight: "1.6",
                  }}
                >
                  {p.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--color-label)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/Hinalr2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-muted)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      "var(--color-foreground)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-muted)")
                  }
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  Code
                </a>
              </div>
            ))}
        </div>

        {/* ==========================================
            VIEW ALL GITHUB
        ========================================== */}

        <div className="section-fade text-center mt-12">
          <a
            href="https://github.com/Hinalr2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-300"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-muted)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-muted)")
            }
          >
            <GitHubIcon className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
