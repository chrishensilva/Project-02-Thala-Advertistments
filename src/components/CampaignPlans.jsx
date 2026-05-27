import { useState } from "react";
import { plans } from "../data/plans";
import PlanCard from "./PlanCard";

export default function CampaignPlans({ onPlanSelect }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPlans = plans.filter((plan) => {
    if (activeFilter === "starter") {
      return plan.id === "plan-special" || plan.id === "plan-beta" || plan.id === "plan-a";
    }
    if (activeFilter === "scale") {
      return plan.id === "plan-b" || plan.id === "plan-c" || plan.id === "plan-d";
    }
    return true;
  });

  return (
    <section
      id="plans"
      className="relative scroll-mt-24 py-24 md:py-32 bg-[#0a0a0a]"
    >
      {/* Background subtle accent */}
      <div
        className="glow-orb animate-float-1"
        style={{
          width: "min(700px, 90vw)",
          height: "min(700px, 90vw)",
          background: "var(--accent)",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.05,
        }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)]">
              Campaign Directory
            </span>
          </div>
          <h2 className="text-section-title mb-4">
            Select Your <span className="gradient-text font-black">Campaign Tier</span>
          </h2>
          <p className="text-section-subtitle mx-auto">
            Transparent metrics, real channel curation networks, and dynamic reach. Every plan
            includes complimentary extended syndication across TikTok, Facebook, YouTube
            Shorts & Instagram Reels.
          </p>
        </div>

        {/* Filter controls styled like media player playlist filter */}
        <div className="flex justify-center mb-10 md:mb-16 px-2">
          <div className="inline-flex flex-wrap justify-center p-1 gap-1 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {[
              { id: "all", label: "All Tiers" },
              { id: "starter", label: "Starter Mix" },
              { id: "scale", label: "Scale Hits" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border-none ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-[var(--accent)] to-[#ff6036] text-white shadow-md shadow-[var(--accent-glow)] font-sans"
                    : "text-[var(--text-secondary)] hover:text-white bg-transparent hover:bg-white/[0.02] font-sans"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              featured={plan.id === "plan-b"}
              onSelect={onPlanSelect}
            />
          ))}
        </div>

        {/* Cross-platform note */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3.5 px-5 sm:px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] max-w-2xl mx-auto shadow-lg text-left">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <p className="text-sm text-[var(--text-secondary)] text-left leading-relaxed">
              <span className="text-white font-bold">Cross-Platform Syndication:</span> All packages include complimentary extended syndication across auxiliary networks (Facebook, YouTube Shorts, and Instagram Reels) at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
