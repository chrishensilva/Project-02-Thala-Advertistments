import { useState, useEffect } from "react";
import { plans } from "../data/plans";

export default function ContactForm({ preselectedPlan }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    plan: preselectedPlan?.id || "",
    trackLink: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  /* Sync preselected plan when user clicks "Select This Plan" */
  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, plan: preselectedPlan.id }));
    }
  }, [preselectedPlan]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 md:py-32 bg-black"
    >
      {/* Ambient glow */}
      <div
        className="glow-orb animate-float-2"
        style={{
          width: "500px",
          height: "500px",
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
              Backstage Intake Gate
            </span>
          </div>
          <h2 className="text-section-title mb-4">
            Request <span className="gradient-text font-black">Campaign Access</span>
          </h2>
          <p className="text-section-subtitle mx-auto">
            Secure your promotional package, share your sound, and launch.
            Our curation team reviews tracks and builds channels within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Intake Submission Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 hover:transform-none hover:shadow-none bg-[#121212]/40 border border-white/[0.08]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#ff6036] flex items-center justify-center shadow-lg shadow-[var(--accent-glow)]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                    Track Queued!
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-md mx-auto leading-relaxed">
                    Our curation manager has received your submission. We will review your track link and reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 btn-secondary text-xs uppercase tracking-wider font-bold font-sans"
                  >
                    Submit Another Track
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2.5"
                    >
                      Artist or Representative Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Kasun Perera"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2.5"
                    >
                      Secure Email or Mobile Contact
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="you@email.com or 07XXXXXXXX"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="plan"
                      className="block text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2.5"
                    >
                      Target Campaign Tier
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      required
                      value={formData.plan}
                      onChange={handleChange}
                      className="form-input cursor-pointer appearance-none bg-neutral-900"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1.25rem center",
                      }}
                    >
                      <option value="" disabled className="text-[var(--text-muted)]">
                        Select your campaign plan...
                      </option>
                      {plans.map((p) => (
                        <option key={p.id} value={p.id} className="text-white bg-neutral-950">
                          {p.name} — LKR {p.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="trackLink"
                      className="block text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2.5"
                    >
                      Sound / Demo Link
                    </label>
                    <input
                      id="trackLink"
                      name="trackLink"
                      type="url"
                      value={formData.trackLink}
                      onChange={handleChange}
                      placeholder="https://tiktok.com/t/... or https://youtube.com/..."
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2.5"
                    >
                      Curation Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requirements or release dates..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center mt-4">
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
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Curation Request
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Curation Console / Hotlines & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* HOTLINES STYLED AS STREAMING DASHBOARD CHANNELS */}
            <div className="glass-card p-7 hover:transform-none hover:shadow-none bg-[#121212]/40 border border-white/[0.08]">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
                Active Hotline Stream
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:0705871511"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] no-underline group hover:border-[var(--accent)] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] bg-white/[0.03] px-3 py-1.5 rounded-lg group-hover:text-white transition-colors font-sans">
                    Dial
                  </span>
                </a>

                <a
                  href="tel:0768675033"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] no-underline group hover:border-[var(--accent)] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] bg-white/[0.03] px-3 py-1.5 rounded-lg group-hover:text-white transition-colors font-sans">
                    Dial
                  </span>
                </a>
              </div>
            </div>

            {/* Syndication Panel */}
            <div className="glass-card p-7 hover:transform-none hover:shadow-none bg-[#121212]/40 border border-white/[0.08]">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Curation & Syndication
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5">
                Every promotional package triggers automatic, high-impact extended syndication across our broad digital discovery network. Your content goes live on:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "TikTok", desc: "Main stream" },
                  { name: "Facebook", desc: "Shorts syndicate" },
                  { name: "YouTube", desc: "Shorts player" },
                  { name: "Instagram", desc: "Reels showcase" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.03] flex flex-col justify-center"
                  >
                    <div className="text-xs font-black text-white mb-0.5">
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
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
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
      </div>
    </section>
  );
}
