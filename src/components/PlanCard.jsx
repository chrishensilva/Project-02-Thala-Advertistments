import { useState } from "react";

export default function PlanCard({ plan, featured = false, onSelect }) {
  const [expanded, setExpanded] = useState(false);

  /* Show first 4 channels by default, rest on expand */
  const visibleChannels = expanded ? plan.channels : plan.channels.slice(0, 4);
  const hiddenCount = plan.channels.length - 4;

  return (
    <div
      id={plan.id}
      className={`glass-card relative flex flex-col p-7 md:p-8 bg-[#121212]/40 border border-white/[0.08] hover:border-[var(--accent)]/40 ${
        featured ? "ring-2 ring-[var(--accent)]/40 shadow-xl shadow-[var(--accent-glow)]" : ""
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-7 px-4 py-1 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[var(--accent)] to-[#ff6036] text-white rounded-full shadow-lg shadow-[var(--accent-glow)] font-sans">
          Popular
        </div>
      )}

      {/* Plan header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-1 font-sans">{plan.name}</h3>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{plan.deliverables}</p>
      </div>

      {/* Price section styled like a Track Length / Wave volume */}
      <div className="mb-5 bg-white/[0.01] border border-white/[0.03] p-4 rounded-2xl">
        <div className="flex items-baseline gap-1">
          <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-wider">LKR</span>
          <span className="text-4xl font-black tracking-tight gradient-text font-sans">
            {plan.price.replace("/-", "")}
          </span>
          <span className="text-xs text-[var(--text-muted)] ml-1">/ campaign</span>
        </div>
      </div>

      {/* Key analytics */}
      <div className="flex gap-3 mb-5">
        <div className="flex-1 px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
          <div className="text-lg font-black text-white">{plan.channelCount}</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Channels
          </div>
        </div>
        <div className="flex-1 px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
          <div className="text-lg font-black text-white">{plan.syndication.length}</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Platforms
          </div>
        </div>
      </div>

      {/* Syndication tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {plan.syndication.map((platform) => (
          <span
            key={platform}
            className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-lg bg-[var(--accent-subtle)] text-[var(--accent-light)] border border-[var(--accent)]/10 font-sans"
          >
            {platform}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] my-4" />

      {/* Channel list - STYLED LIKE AN ALBUM TRACKLIST */}
      <div className="flex-1 mb-6">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Curation Tracklist
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Followers
          </p>
        </div>
        <ul className="space-y-1.5">
          {visibleChannels.map((ch, index) => (
            <li
              key={ch.name}
              className="flex items-center justify-between py-1.5 border-b border-white/[0.02] group/item hover:bg-white/[0.02] px-2 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[9px] font-black text-[var(--text-muted)] w-4 text-center">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover/item:text-white transition-colors duration-200">
                  {ch.name}
                </span>
              </div>
              <span className="text-xs font-bold text-[var(--accent-light)] flex items-center gap-1 font-sans">
                <span className="text-[9px] text-[var(--text-muted)] font-normal font-sans">followers</span>
                {ch.followers}
              </span>
            </li>
          ))}
        </ul>

        {/* Expand / Collapse with playback feel */}
        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 text-xs font-bold text-[var(--accent-light)] hover:text-white bg-transparent border-none cursor-pointer transition-colors duration-300 flex items-center gap-1.5 font-sans"
          >
            {expanded ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                Collapse tracks
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                Load {hiddenCount} more curation tracks
              </>
            )}
          </button>
        )}
      </div>

      {/* CTA */}
      <button
        onClick={() => onSelect?.(plan)}
        className={`w-full py-4 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer border-none font-sans ${
          featured
            ? "bg-gradient-to-r from-[var(--accent)] to-[#ff6036] text-white shadow-lg shadow-[var(--accent-glow)] hover:shadow-xl hover:shadow-[var(--accent-glow)] hover:-translate-y-0.5"
            : "bg-white/[0.04] text-white border border-white/[0.08] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent-glow)]"
        }`}
      >
        Queue Plan
      </button>
    </div>
  );
}
