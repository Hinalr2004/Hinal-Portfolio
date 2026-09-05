import { useEffect, useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const links = [
    {
      icon: <GitHubIcon className="w-5 h-5" />,
      label: "GitHub",
      value: "Hinalr2004",
      href: "https://github.com/Hinalr2004",
    },
    {
      icon: <LinkedInIcon className="w-5 h-5" />,
      label: "LinkedIn",
      value: "hinal-tekavade",
      href: "https://www.linkedin.com/in/hinal-tekavade-964155322/",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hinaltekavade@gmail.com",
      href: "mailto:hinaltekavade@gmail.com",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-40 px-6 lg:px-12 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none grid-overlay"
        style={{ opacity: 0.3 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-fade flex items-center gap-4 mb-20" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-accent)" }}>
            05 — Contact
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        <div className="max-w-3xl">
          <h2
            className="section-fade mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-foreground)",
            }}
          >
            Let's build
            <br />
            <span className="accent-gradient">something great</span>
            <br />
            together.
          </h2>

          <p
            className="section-fade mb-14"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1.125rem",
              color: "var(--color-muted)",
              lineHeight: "1.7",
              maxWidth: "480px",
            }}
          >
            Open to software engineering roles, internships, and collaborative projects.
            If you're building something interesting, reach out.
          </p>

          {/* Contact links */}
          <div className="section-fade space-y-3 mb-14">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-6 py-4 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div className="flex items-center gap-4">
                  <span style={{ color: "var(--color-accent)" }}>{l.icon}</span>
                  <div>
                    <span
                      className="block text-xs mb-0.5"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-label)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {l.label}
                    </span>
                    <span
                      className="block text-sm"
                      style={{ fontFamily: "var(--font-sans)", color: "var(--color-foreground)" }}
                    >
                      {l.value}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--color-muted)" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-8 left-0 right-0 px-6 lg:px-12 flex items-center justify-between"
        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-label)" }}
      >
        <span>© 2025 Hinal Tekavade</span>
        <span className="tracking-widest uppercase">Built with React · Vite · Three.js</span>
      </div>
    </section>
  );
}
