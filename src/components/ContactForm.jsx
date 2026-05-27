export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 md:py-32 bg-black"
    >
      {/* Ambient glow */}
      <div
        className="glow-orb animate-float-2"
        style={{
          width: "min(500px, 70vw)",
          height: "min(500px, 70vw)",
          background: "#ff6036",
          bottom: "10%",
          right: "-5%",
          opacity: 0.07,
        }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)]">
              Backstage Curation Gate
            </span>
          </div>
          <h2 className="text-section-title mb-4">
            Connect with a <span className="gradient-text font-black">Curation Agent</span>
          </h2>
          <p className="text-section-subtitle mx-auto">
            Ready to amplify your sound across our curated influencer networks? Dial our hotlines
            or explore our multi-platform syndication matrix.
          </p>
        </div>

        {/* Curation Console - Expanded to full website container width */}
        <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {/* HOTLINES STYLED AS STREAMING DASHBOARD CHANNELS */}
          <div className="glass-card p-7 md:p-8 hover:transform-none hover:shadow-none bg-[#121212]/40 border border-white/[0.08]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Active Hotline Stream
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:gap-5">
              <a
                href="tel:0705871511"
                className="flex items-center justify-between p-4.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] no-underline group hover:border-[var(--accent)] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Streaming Play Button */}
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/15 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,46,85,0.15)] group-hover:shadow-[0_0_20px_rgba(255,46,85,0.4)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-light)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white group-hover:fill-white transition-colors duration-300"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                      Stream Primary Call
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-[var(--accent-light)] transition-colors duration-200 font-sans">
                      0705 871 511
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] bg-white/[0.03] px-3.5 py-2 rounded-lg group-hover:text-white transition-colors font-sans">
                  Dial
                </span>
              </a>

              <a
                href="tel:0768675033"
                className="flex items-center justify-between p-4.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] no-underline group hover:border-[var(--accent)] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Streaming Play Button */}
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/15 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,46,85,0.15)] group-hover:shadow-[0_0_20px_rgba(255,46,85,0.4)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-light)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white group-hover:fill-white transition-colors duration-300"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                      Stream Secondary Call
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-[var(--accent-light)] transition-colors duration-200 font-sans">
                      0768 675 033
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] bg-white/[0.03] px-3.5 py-2 rounded-lg group-hover:text-white transition-colors font-sans">
                  Dial
                </span>
              </a>
            </div>
          </div>

          {/* Syndication Panel */}
          <div className="glass-card p-7 md:p-8 hover:transform-none hover:shadow-none bg-[#121212]/40 border border-white/[0.08]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Curation & Syndication Channels
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
              Every promotional package triggers automatic, high-impact extended syndication across our broad digital discovery network:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: "TikTok", desc: "Main stream" },
                { name: "Facebook", desc: "Shorts syndicate" },
                { name: "YouTube", desc: "Shorts player" },
                { name: "Instagram", desc: "Reels showcase" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03] flex flex-col justify-center hover:bg-white/[0.04] transition-colors"
                >
                  <div className="text-sm font-black text-white mb-0.5">
                    {p.name}
                  </div>
                  <div className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Response Time Info */}
          <div className="flex flex-wrap items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-xs text-[var(--text-secondary)]">
              Curation feedback loop active: <span className="text-white font-bold">Under 2 hours</span> average response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
