import { useEffect, useRef } from "react";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import ParticleField from "./ParticleField";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const els = [titleRef.current, subtitleRef.current, btnRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 1s ease, transform 1s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 200);
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-overlay"
    >
      <ParticleField />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, #080a0f 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ paddingTop: "80px" }}>
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 mb-10"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "var(--color-accent)",
            textTransform: "uppercase",
          }}
        >
          <span
            className="w-6 h-px"
            style={{ background: "var(--color-accent)" }}
          />
          Computer Engineering · Software · AI
          <span
            className="w-6 h-px"
            style={{ background: "var(--color-accent)" }}
          />
        </div>

        {/* Name */}
        <h1
          ref={titleRef}
          className="leading-none tracking-tight mb-6"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            letterSpacing: "-0.02em",
            color: "#f0f4ff",
          }}
        >
          <span className="block">HINAL</span>
          <span
            className="block"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(240,244,255,0.3)",
            }}
          >
            TEKAVADE
          </span>
        </h1>

        {/* Tagline */}
        <div ref={subtitleRef}>
          <p
            className="mx-auto mb-12 leading-relaxed"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "var(--color-muted)",
              maxWidth: "560px",
            }}
          >
            "Building intelligent systems, modern full-stack applications, and practical software solutions."
          </p>
        </div>

        {/* CTA buttons */}
        <div
          ref={btnRef}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic-btn group px-7 py-3 rounded-full text-sm font-medium tracking-widest uppercase"
            style={{
              background: "var(--color-accent)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            View Projects <ArrowRight className="inline w-3 h-3 ml-1" />
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic-btn px-7 py-3 rounded-full text-sm font-medium tracking-widest uppercase"
            style={{
              background: "transparent",
              color: "var(--color-foreground)",
              border: "1px solid rgba(240,244,255,0.15)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,244,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-foreground)";
            }}
          >
            Contact Me
          </button>

          <a
            href="https://github.com/Hinalr2004"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn p-3 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--color-muted)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            }}
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/hinal-tekavade-964155322/"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn p-3 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--color-muted)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="magnetic-btn p-3 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--color-muted)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            }}
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
        style={{ color: "var(--color-foreground)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown className="w-3 h-3 animate-bounce" />
      </button>
    </section>
  );
}
