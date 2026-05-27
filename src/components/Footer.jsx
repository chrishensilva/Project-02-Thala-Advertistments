export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-16 bg-[#050505]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#ff6036] flex items-center justify-center text-white font-black text-xs shadow-md shadow-[var(--accent-glow)] font-sans">
              T
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
              <span className="text-white font-black">THaala</span> Advertising & Marketing
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href="#hero"
              className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-white transition-colors duration-300 no-underline"
            >
              Home
            </a>
            <a
              href="#plans"
              className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-white transition-colors duration-300 no-underline"
            >
              Packages
            </a>
            <a
              href="#contact"
              className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-white transition-colors duration-300 no-underline"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-white transition-colors duration-300 no-underline"
            >
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
            © {currentYear} THaala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
