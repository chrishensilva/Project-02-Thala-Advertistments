export default function Hero() {
  const aggregateReach = "3.8M+";
  const totalChannels = "20+";
  const totalPlatforms = "4";

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 pt-28 pb-20 md:pt-48 md:pb-36 bg-black overflow-hidden"
    >
      {/* Ambient glow orbs in Musixmatch Coral/Orange */}
      <div
        className="glow-orb animate-float-1"
        style={{
          width: "min(600px, 80vw)",
          height: "min(600px, 80vw)",
          background: "var(--accent)",
          top: "-10%",
          right: "-5%",
          opacity: 0.1,
        }}
      />
      <div
        className="glow-orb animate-float-2"
        style={{
          width: "min(500px, 70vw)",
          height: "min(500px, 70vw)",
          background: "#ff6036",
          bottom: "-5%",
          left: "-5%",
          opacity: 0.08,
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow styled like an active playing track info */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)]">
              THaala Curation Network • Active Stream
            </span>
          </div>

          {/* Hero headline - Oversized, high-contrast, bold, close-fitted */}
          <h1 className="text-hero mb-6 text-white tracking-tighter font-black">
            Broad-spectrum music distribution{" "}
            <span className="gradient-text">via high-impact curation.</span>
          </h1>

          {/* Live Scale Metric Subtitle Panel */}
          <div className="mb-8 p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md max-w-2xl">
            <p className="text-sm md:text-base text-white font-medium mb-1 flex items-center gap-2 flex-wrap">
              <span>📢</span>
              <span>Broadcasting across a combined network of <span className="gradient-text font-black">{aggregateReach}</span> active followers</span>
            </p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Launch your music campaign directly to a massive, highly engaged audience across our premium curated TikTok influencer channels.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10 md:mb-20">
            <a href="#plans" className="btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Campaign Tiers
            </a>
            <a href="#contact" className="btn-secondary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Talk to an Agent
            </a>
          </div>

          {/* Trust metrics designed like a media player console */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl p-4 sm:p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
            {[
              { value: aggregateReach, label: "Total Network Reach" },
              { value: totalChannels, label: "TikTok Channels" },
              { value: totalPlatforms, label: "Auxiliary Platforms" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-[var(--text-muted)] mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom smooth gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
