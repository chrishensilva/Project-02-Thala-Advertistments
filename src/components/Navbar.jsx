import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Packages", href: "#plans" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "py-3 backdrop-blur-2xl bg-[rgba(5,5,5,0.85)] border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-white no-underline group"
        >
          {/* Logo mark */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[#ff6036] flex items-center justify-center text-white font-black text-sm tracking-tight shadow-lg shadow-[var(--accent-glow)] transition-transform duration-300 group-hover:scale-110">
            T
          </div>
          <span className="text-lg font-black tracking-tight font-sans">
            <span className="gradient-text font-sans">THaala</span>
            <span className="text-[var(--text-secondary)] font-medium hidden sm:inline">
              {" "}
              Advertising
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-300 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[var(--accent)] to-[#ff6036] rounded-xl hover:from-[var(--accent-light)] hover:to-[#ff7d5a] transition-all duration-300 shadow-lg shadow-[var(--accent-glow)] hover:shadow-xl hover:shadow-[var(--accent-glow)] hover:-translate-y-0.5 no-underline"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 bg-transparent border-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mobile-menu overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-container flex flex-col gap-1 pb-4 border-t border-white/[0.06] pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-white rounded-xl hover:bg-white/[0.05] transition-all duration-300 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-[var(--accent)] to-[#ff6036] rounded-xl hover:from-[var(--accent-light)] hover:to-[#ff7d5a] transition-all duration-300 no-underline"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
