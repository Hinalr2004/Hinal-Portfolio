import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,10,15,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          HT<span style={{ color: "var(--color-accent)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="w-5 h-px bg-white/60 block transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translateY(4px)" : "" }}
          />
          <span
            className="w-5 h-px bg-white/60 block transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="w-5 h-px bg-white/60 block transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translateY(-4px)" : "" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/06 bg-[#080a0f]/95 backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
