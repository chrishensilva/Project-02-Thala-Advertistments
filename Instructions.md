# Business & Technical Requirements: THaala Advertising (Musixmatch-Inspired Redesign)

This document outlines the business goals, functional layout, and technical architecture for the **THaala Advertising & Marketing** showcase platform. The visual aesthetic is completely redesigned to match the premium, dark-mode, high-octane look of **Musixmatch**—tailored to resonate with independent music creators, producers, and record labels.

---

## 1. Project Overview & Scope
The goal is to build a high-conversion, visually striking, static 3-section scrolling web showcase for **THaala Advertising & Marketing**. The site acts as an interactive media kit where artists evaluate multi-channel TikTok influencer networks, inspect follower analytics, and submit tracks for consideration.

### Key Constraints:
- **Architecture:** Single-page web app built using **React + Vite**.
- **Aesthetic Paradigm:** Immersive Music Platform style (inspired by Musixmatch). Deep charcoal canvas, ultra-bold high-impact typography, vibrant neon gradients, and media-player-styled user interfaces.
- **Motion/Interaction Constraints:** Fully static scrolling. **Strictly no scroll-jacking, scroll-linked animations, or parallax frame wrappers.** Smooth scrolling is handled natively via CSS (`scroll-behavior: smooth`). Micro-interactions are strictly reserved for state changes (e.g., card hovers, form input focus transitions).

---

## 2. Structural Breakdown (The 3-Section Showcase)

The webpage layout is strictly divided into exactly three vertical layout sections, moving from a bold value statement to an analytical product directory, ending with a streamlined intake form.

### Section 1: The Main Stage (Hero Layer)
- **Objective:** Evoke immediate credibility as an industry-standard music promotion network within the first 3 seconds of landing.
- **Visual Presentation:** Pure jet-black background canvas. Typography is styled like massive lyric projections—oversized, hyper-bold, and close-fitted tracking.
- **Core Elements:**
  - **Brand Header:** `THaala Advertising & Marketing` styled in an ultra-clean, high-contrast typography stack.
  - **Core Value Proposition / Tagline:** Broad-spectrum music distribution via high-impact digital curation networks.
  - **Call to Action System:** - Primary Action: A high-contrast, glowing gradient button ("View Campaign Tiers").
    - Secondary Action: A transparent outline button with clear border styling ("Talk to an Agent").
  - **Live Scale Metric:** An eye-catching subtitle panel calling out total network reach (e.g., *"Broadcasting across a combined network of 2.5 Million+ active followers"*).

### Section 2: The Campaign Directory (Tracklist & Plan Cards)
- **Objective:** Showcase the multi-tier promotional package structure using detailed, data-transparent panels.
- **UI Architecture:** Styled like modern media player dashboard widgets or album tracklists. Each package card uses dark translucent layers (`bg-white/5` or `bg-neutral-900`) with sleek borders (`border-white/10`).
- **Layout Flow:** Grid array layouts scaling perfectly between dynamic viewports. Each tier emphasizes structural analytics—the package price, total channels included, and an interactive list breakdown displaying the explicit follower metrics of each digital curation profile.

### Section 3: Intake Access & Backstage Gate (Conversion Layer)
- **Objective:** Streamline the funnel, allowing creators to seamlessly secure their chosen campaign tier.
- **Core Elements:**
  - **Submission Form:** A minimal, dark-mode form card framework featuring border focus highlights (using Musixmatch neon coral accents). Collects artist details, plan selection, and track URLs.
  - **Hotline Gateways:** High-visibility hotlinks styled as primary streaming dashboard action components for immediate support access:
    - Primary Hotline: `0705871511`
    - Secondary Hotline: `0768675033`
  - **Cross-Platform Syndication Advisory:** A bold disclaimer block reminding creators that all packages include complimentary extended syndication across auxiliary networks (Facebook, YouTube Shorts, and Instagram Reels).
  - **Minimalist Footer Finish:** Distraction-free baseline showing corporate copyright notifications and essential legal terms, keeping the bottom area completely blank and clean.

---

## 3. Technical Specifications & Stack Architecture

### Frontend Architecture
- **Framework Core:** `React 18+` bootstrapped via `Vite` for lightweight bundling and immediate HMR (Hot Module Replacement).
- **Language Standard:** Clean, well-commented ES6+ modular JavaScript component architecture.
- **Styling Pipeline:** `Tailwind CSS` utility framework.
  - Avoid heavy, bloated layout libraries or external theme frameworks.
  - Standardize spatial composition elements using structured padding scales (`py-20` to `py-32`) to establish consistent breathing room between content sections naturally without locking view heights (`100vh`), which can cause text cutting on mobile screens.

### Interaction & Performance Settings
- **Native Scroll Control:** Smooth scrolling is driven strictly by native CSS rules. Avoid any javascript-based frame interpolation or scroll interception.
- **Micro-Interactions:** Hover states use quick, fluid transition parameters (`transition-all duration-200 ease-in-out`). Interactive components should change background transparency, glow density, or text color values without shifting layout layouts or resizing structural frames.

---

## 4. Package Matrix & Structured Data Schema

To maintain DRY (Don't Repeat Yourself) development workflows within the React application component layers, the campaign parameters must be mapped dynamically from a structured JSON data model. The exact parameters extracted from the official service rules are structured below:

```json
[
  {
    "id": "plan-special",
    "name": "Special Offer Plan",
    "price": "4,999/-",
    "channelCount": 6,
    "deliverables": "01 Short Video (Total 8 Videos across channels)",
    "syndication": ["TikTok", "Facebook", "YouTube", "Instagram"],
    "channels": [
      { "name": "Memories", "followers": "105.6K" },
      { "name": "Spandana", "followers": "18.8K" },
      { "name": "Mathaka", "followers": "56.0K" },
      { "name": "Sihina Music", "followers": "5.6K" },
      { "name": "Melodies", "followers": "13.56K" },
      { "name": "Thaala", "followers": "9.513K" }
    ]
  },
  {
    "id": "plan-beta",
    "name": "Plan Beta",
    "price": "6,500/-",
    "channelCount": 7,
    "deliverables": "01 Short Video",
    "syndication": ["TikTok", "Facebook", "YouTube", "Instagram"],
    "channels": [
      { "name": "Memories", "followers": "105.6K" },
      { "name": "Spandana", "followers": "18.8K" },
      { "name": "Mathaka", "followers": "56.0K" },
      { "name": "Soul Tune", "followers": "29.2K" },
      { "name": "Sihina Music", "followers": "5.6K" },
      { "name": "Melodies", "followers": "13.56K" },
      { "name": "Thaala", "followers": "9.513K" }
    ]
  },
  {
    "id": "plan-a",
    "name": "Plan A",
    "price": "8,500/-",
    "channelCount": 8,
    "deliverables": "01 Short Video",
    "syndication": ["TikTok", "Facebook", "YouTube", "Instagram"],
    "channels": [
      { "name": "Memories", "followers": "105.6K" },
      { "name": "Spandana", "followers": "18.8K" },
      { "name": "Mathaka", "followers": "56.0K" },
      { "name": "Soul Tune", "followers": "29.2K" },
      { "name": "Shan Music", "followers": "17.5K" },
      { "name": "Sihina Music", "followers": "5.6K" },
      { "name": "Melodies", "followers": "13.56K" },
      { "name": "Thaala", "followers": "9.513K" }
    ]
  },
  {
    "id": "plan-b",
    "name": "Plan B",
    "price": "15,000/-",
    "channelCount": 11,
    "deliverables": "01 Short Video",
    "syndication": ["TikTok", "Facebook", "YouTube", "Instagram"],
    "channels": [
      { "name": "Life Music", "followers": "292.1K" },
      { "name": "Track Music", "followers": "232.4K" },
      { "name": "Diary Of Shahiru", "followers": "252.8K" },
      { "name": "Soul Tune", "followers": "29.2K" },
      { "name": "Memories", "followers": "105.6K" },
      { "name": "Spandana", "followers": "18.8K" },
      { "name": "Mathaka", "followers": "56.0K" },
      { "name": "Melodies", "followers": "13.56K" },
      { "name": "Thaala", "followers": "9.513K" },
      { "name": "Sihina Music", "followers": "5.6K" },
      { "name": "Shan Music", "followers": "17.5K" }
    ]
  },
  {
    "id": "plan-c",
    "name": "Plan C",
    "price": "23,000/-",
    "channelCount": 15,
    "deliverables": "01 Short Video",
    "syndication": ["TikTok", "Facebook", "YouTube", "Instagram"],
    "channels": [
      { "name": "Frozen Status", "followers": "637.8K" },
      { "name": "Beliver Music", "followers": "492.8K" },
      { "name": "Shaggy", "followers": "387.4K" },
      { "name": "Black Lyrics", "followers": "306.8K" },
      { "name": "Life Music", "followers": "292.1K" },
      { "name": "Diary Of Shahiru", "followers": "252.8K" },
      { "name": "Memories", "followers": "105.6K" },
      { "name": "Spandana", "followers": "18.8K" },
      { "name": "Mathaka", "followers": "56.0K" },
      { "name": "Soul Tune", "followers": "29.2K" },
      { "name": "Track Music", "followers": "232.4K" },
      { "name": "Shan Music", "followers": "17.5K" },
      { "name": "Sihina Music", "followers": "5.6K" },
      { "name": "Melodies", "followers": "13.56K" },
      { "name": "Thaala", "followers": "9.513K" }
    ]
  },
  {
    "id": "plan-d",
    "name": "Plan D",
    "price": "29,999/-",
    "channelCount": 20,
    "deliverables": "01 Short Video (Total 23 Videos across channels)",
    "syndication": ["TikTok", "Facebook", "YouTube", "Instagram"],
    "channels": [
      { "name": "Frozen Status", "followers": "637.8K" },
      { "name": "Life Music", "followers": "292.1K" },
      { "name": "Beliver Music", "followers": "492.8K" },
      { "name": "Diary Of Shahiru", "followers": "252.8K" },
      { "name": "Shaggy", "followers": "387.4K" },
      { "name": "Story", "followers": "153.7K" },
      { "name": "Volume", "followers": "257.7K" },
      { "name": "Peaches", "followers": "79.7K" },
      { "name": "Soul Tune", "followers": "29.2K" },
      { "name": "Thaala", "followers": "9.513K" },
      { "name": "Pickvid", "followers": "14.0K" },
      { "name": "Track Music", "followers": "232.4K" },
      { "name": "Melodies", "followers": "13.56K" },
      { "name": "Black Lyrics", "followers": "306.8K" },
      { "name": "Rover", "followers": "150.0K" },
      { "name": "Shan Music", "followers": "17.5K" },
      { "name": "Sihina Music", "followers": "5.6K" },
      { "name": "Mathaka", "followers": "56.0K" },
      { "name": "Spandana", "followers": "18.8K" },
      { "name": "Memories", "followers": "105.6K" }
    ]
  }
]