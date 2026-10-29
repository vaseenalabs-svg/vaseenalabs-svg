# LA ROYALE PARFUMS — Haute Parfumerie Digital Flagship & Client Showcase

An interactive luxury web experience for **LA ROYALE PARFUMS** that showcases the uploaded 1080p 3D botanical perfume video as a responsive, all-device hero backdrop layered beneath bespoke HTML typography, an interactive olfactory anatomy explorer, a complete **Client-Ready Demo Fragrance Catalog**, a built-in **Custom Product Studio** for adding/editing creations on the fly, and direct WhatsApp Concierge acquisition flows.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Client-Ready Demo Products & Custom Product Studio Added**:
> 1. **Pre-Loaded Luxury Demo Catalog (6 Signature & Bespoke Creations)**: Includes the 3 flagship extraits (*No. 01 Oud Impérial*, *No. 07 Rose Velours*, *Elixir Ambre d'Or*) plus 3 additional client-showcase demo creations (*No. 12 Santal Royal*, *No. 19 Néroli de Grasse*, and *The Royal Discovery Coffret — 5 × 15ml Collector's Vault*), complete with studio photography, olfactory pyramids, pricing, and category filters (`All Creations`, `Extrait de Parfum`, `Pure Parfum Oils`, `Discovery & Gift Sets`).
> 2. **Live "Add / Edit Custom Product" Studio**: Includes an interactive **Atelier Catalog Manager** drawer where you can create new custom products (custom name, collection tag, bottle size, price, top/heart/base notes, concentration %, custom photo upload or luxury bottle preset), edit or remove existing items, and toggle **"Client Presentation Mode"** (hiding edit controls when presenting to clients).

> [!NOTE]
> **Hero Video Playback & All-Device Visibility**: The uploaded 1080p perfume video (`/assets/aistudio/Write_LA_ROYALE_PERFUMES_on_ec63e032_1080p_5ccd0f45.mp4`) runs in **Continuous Autoplay Loop Mode by default** (`muted`, `autoPlay`, `loop`, `playsInline`, `object-fit: cover`) so it is immediately vivid and clearly visible on every desktop, tablet, and smartphone, while also supporting 60fps scroll-scrubbing and the `"DISCOVER THE SCENT →"` interactive replay.

- **Confirmed Video Asset & Focal Framing**: Uses the 1080p MP4 with responsive focal positioning (`object-[65%_center]` on desktop, `object-[58%_center]` on mobile) to preserve the perfume flacon on the right and protect the editorial text column on the left with a calibrated contrast scrim.
- **Confirmed Dual Theme Support**: Defaults to **Obsidian Noir & Metallic Gold (`#0B0806` / `#B69138`)** with a header toggle for **Parisian Atelier Ivory (`#F8F5EF` / `#B69A68`)**.
- **Confirmed Direct WhatsApp Concierge**: Every demo and custom product dynamically generates a pre-filled WhatsApp order link (`wa.me/918141603449`) with the exact product title, volume, price, and custom engraving requests.

---

## 1. Overview & Core Concept

- **What It Does**: Delivers a production-ready luxury digital flagship for **LA ROYALE PARFUMS** featuring a 1080p 3D background video hero, interactive Scent Anatomy explorer, a filterable 6-product luxury demo catalog with a live **Custom Product Creator**, and instant WhatsApp Concierge ordering.
- **Target Audience / Persona**: Fragrance clients, retail buyers, and luxury patrons browsing on mobile and desktop who want to experience the full brand presentation, inspect realistic demo products, and customize or order bespoke fragrances via WhatsApp.
- **Key Value**: Lets you immediately share a polished, realistic luxury perfume storefront with clients while empowering you to add, edit, or tailor custom perfume SKUs directly in the browser before or during client presentations.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Immersive Hero Arrival & Video Interaction**:
   - Visitors land on the full-viewport hero where the 1080p **LA ROYALE PARFUMS** botanical infusion video plays smoothly behind crisp HTML editorial typography (`"Royalty In Every Drop."`).
   - Clicking `"DISCOVER THE SCENT →"` restarts the 3D botanical infusion sequence from `00:00` with synchronized step highlights (`01` Citrus-Spice Infusion $\to$ `02` Floral Heart Immersion $\to$ `03` Golden Amber Alchemy $\to$ `04` Capped Royal Flacon) along the right-edge `"REVEAL"` telemetry bar.
2. **Interactive Scent Anatomy Exploration**:
   - Patrons click through 4 radial ingredient nodes flanking the central crystal flacon (*01 Top Note: Calabrian Bergamot & Royal Saffron*, *02 Heart Note: Velvet Damascus Rose & Night Jasmine*, *03 Base Note: Aged Cambodian Oud & Smoked Woods*, *04 Elixir Note: Golden Amber Resin & Madagascar Vanilla*).
   - Selecting a node animates the active gold ring (`layoutId="activeNoteRing"`), updates the Extrait oil concentration meter (`32%` to `45%` pure parfum extract), and transitions the sensory tasting card.
3. **Demo Product Catalog, Filtering & Quick Inspection**:
   - Patrons browse 6 pre-loaded luxury demo creations across interactive category tabs (`All Creations`, `Extrait de Parfum`, `Pure Parfum Oils`, `Gift & Discovery Sets`):
     1. **La Royale No. 01 — Oud Impérial** (`Extrait De Parfum • 100ml` — Aged Cambodian Oud, Royal Saffron, Smoked Cedar)
     2. **La Royale No. 07 — Rose Velours** (`Extrait De Parfum • 100ml` — Velvet Damascus Rose, Night Jasmine, White Musk)
     3. **La Royale Elixir — Ambre d'Or** (`Pure Parfum Oil • 50ml` — Golden Amber Resin, Madagascar Vanilla, Labdanum)
     4. **La Royale No. 12 — Santal Royal** (`Extrait De Parfum • 100ml` — Mysore Sandalwood, Cardamom Pod, Iris Butter)
     5. **La Royale No. 19 — Néroli de Grasse** (`Extrait De Parfum • 100ml` — Calabrian Bergamot, Bitter Orange Blossom, Vetiver)
     6. **The Royal Discovery Vault** (`Bespoke Coffret • 5 × 15ml` — Complete Travel Atomizer Collection in Gold-Leaf Box)
   - Clicking any product opens a **Bespoke Flacon Dossier & Customization Drawer** where clients can inspect the full olfactory pyramid (Top, Heart, Base notes), select bottle volume (`50ml` / `100ml`), add complimentary gold monogram engraving, and click `"Acquire via WhatsApp →"`.
4. **Custom Product Studio (Add / Edit Products for Client Presentations)**:
   - Clicking **"+ Add Custom Creation"** (or toggling **"Manage Catalog"**) opens the **Atelier Product Studio** modal.
   - Users can add new custom perfumes with title, edition subtitle, category, volume, price, longevity rating, oil concentration %, scent notes, and either upload a custom product photo or choose from curated high-fashion luxury flacon photography presets.
   - Includes a **"Client Presentation Lock"** toggle that hides management buttons so the site looks like a pure consumer luxury storefront when shared with clients, plus a **"Reset to Default Demo Catalog"** option.
5. **Flagship Boutique & Private Consultation**:
   - Patrons view boutique hours, copy or dial `+91 81416 03449`, inspect exact GPS coordinates (`21°11'59.2"N 72°49'39.2"E`), interact with the dark-luxury embedded Google Map (`21.1997665, 72.8275564`), or launch Google Maps navigation directly.

### Visual Identity & Theme
- **Aesthetic Direction**: Haute Parfumerie Editorial Minimalism—combining deep obsidian chiaroscuro lighting, hairline antique gold rules (`1px`), and generous gallery-grade spatial rhythm.
- **Color Palette & Mood**:
  - **Obsidian Noir Mode (Default)**: Canvas `#0B0806`, Elevated Cards `#120D0A` with `border-[#B69138]/20`, Metallic Gold Primary `#B69138`, Highlight Gold `#D4AF37`, Alabaster Text `#F5EFE6`, Muted Warm Grey `#9E958C`.
  - **Parisian Atelier Mode (Ivory Toggle)**: Canvas `#F8F5EF`, Architectural Panels `#F1E9DC`, Antique Gold `#B69A68`, Champagne Border `#D9C5A3`, Deep Charcoal Ink `#25231F`, with a subtle warm ivory scrim over the hero video text zone.
- **Typography & Hierarchy**:
  - **Display Serif**: `Cormorant Garamond` (weights 400, 600, 700) and `Playfair Display` (weights 400, 500, 600) for poetic headlines, fragrance titles, and step numerals (`tabular-nums`).
  - **Body & UI Sans**: `Plus Jakarta Sans` (weights 300, 400, 500, 600) with expansive uppercase tracking (`0.2em`–`0.28em`) for olfactory classifications, navigation, and actions.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Persistent Client-Ready Demo Catalog + Custom SKU Builder**
  - *Chosen Approach*: Seed the catalog with 6 richly detailed luxury fragrance creations backed by studio imagery generated via `generate_image`, while storing user-added or edited custom products in `localStorage` with instant preview and WhatsApp link generation.
  - *Why*: Gives you an immediately impressive, stocked storefront to show clients right out of the box, while letting you tailor products (names, prices, photos, notes) for specific client pitches without touching code.
- **Decision 2: Hybrid Autoplay + Scroll-Scrubbing Video Engine**
  - *Chosen Approach*: Combine continuous `muted autoPlay loop playsInline` playback with conflict-free `requestAnimationFrame` scroll-scrubbing and an explicit `"DISCOVER THE SCENT →"` replay trigger.
  - *Why*: Ensures the 1080p hero video is visibly in motion on every mobile and desktop device while still supporting smooth scroll-driven progress telemetry (`REVEAL 01–04`).
- **Decision 3: Dual-Mode `<BrandLogo />` Component**
  - *Chosen Approach*: Default to a razor-sharp inline SVG vector recreation of `JPG-01.jpg` (round botanical flask with leaves inside, royal crown positioned directly over `"LE"`, serif `"LA ROYALE"`, and bottom rule with `"PARFUMS"` in metallic `#B69138` / `#D4AF37` gradients), with an interactive toggle to switch to medallion mode.
  - *Why*: Guarantees zero white-box artifacts on dark obsidian or translucent glassmorphic headers at any retina DPI.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram
```
┌────────────────────────────────────────────────────────────────────────────┐
│                   App Shell (Theme, Catalog & Motion State)                │
│  [Obsidian Noir #0B0806 / Parisian Ivory #F8F5EF] • [Catalog LocalStorage] │
└───────────────┬────────────────────────────────────────────┬───────────────┘
                │                                            │
                ▼                                            ▼
┌───────────────────────────────────────┐    ┌───────────────────────────────┐
│   Top Concierge Bar & Glass Header    │    │   Floating WhatsApp Widget    │
│ • Announcement Ribbon                 │    │ • Fixed bottom-6 right-6 z-50 │
│ • <BrandLogo /> (SVG Crown + Flask)   │    │ • #25D366 + #D4AF37 Border    │
│ • Nav Links + Client Mode Toggle      │    │ • Expandable Concierge Pill   │
│ • WhatsApp CTA (8141603449)           │    └───────────────────────────────┘
└───────────────┬───────────────────────┘
                │
                ▼
┌────────────────────────────────────────────────────────────────────────────┐
│            Section B: 380vh Sticky Hero & Responsive Video Engine          │
│ ┌───────────────────────────────────┐  ┌─────────────────────────────────┐ │
│ │ Background Media Stack (z-0)      │  │ Foreground Editorial HTML (z-10)│ │
│ │ • Primary 1080p MP4 Video         │  │ • Contrast Scrim (Obsidian/Ivory│ │
│ │ • Fallback MP4 + Canvas Particles │  │ • "Royalty In Every Drop."      │ │
│ │ • Responsive Focal Object-Position│  │ • "DISCOVER THE SCENT →" CTA    │ │
│ │ • rAF Scroll Scrub + Autoplay Loop│  │ • "ORDER VIA WHATSAPP" CTA      │ │
│ └───────────────────────────────────┘  │ • Right-Edge REVEAL 01-04 Bar   │ │
│                                        └─────────────────────────────────┘ │
└───────────────┬────────────────────────────────────────────────────────────┘
                │
      ┌─────────┴──────────────────────────┬─────────────────────────┐
      ▼                                    ▼                         ▼
┌───────────────────────────┐  ┌───────────────────────┐  ┌──────────────────┐
│ Section C: Scent Anatomy  │  │ Section D: Signature  │  │ Section E: Royal │
│ • Central Crystal Flacon  │  │ & Custom Collection   │  │ Boutique & Map   │
│ • 4 Radial Note Nodes     │  │ • 6 Luxury Demo SKUs  │  │ • Hours & Phone  │
│ • layoutId="activeNoteRing"│ │ • Category Filter Bar │  │ • GPS Coordinates│
│ • Concentration Meter     │  │ • + Add/Edit Custom   │  │ • Styled Map     │
│ • AnimatePresence Details │  │   Product Studio Modal│  │   Iframe Embed   │
│                           │  │ • Flacon Dossier &    │  │                  │
│                           │  │   WhatsApp Order Flow │  │                  │
└───────────────────────────┘  └───────────────────────┘  └──────────────────┘
```

### Data Model & Interactive State Mapping
- **Product Entity (`FragranceProduct`)**:
  - `id`, `code` (e.g., `"NO. 01"`), `name` (e.g., `"Oud Impérial"`), `fullTitle` (`"La Royale No. 01 — Oud Impérial"`), `category` (`'extrait' | 'elixir' | 'coffret'`), `concentrationLabel` (`"Extrait De Parfum"`), `volume` (`"100ml"`), `oilPercentage` (`38`), `longevity` (`"24+ Hours"`), `price` (`"₹18,500"`), `notes` (array of 3 key accords), `pyramid` (`{ top, heart, base }`), `description`, `imageUrl`, and `isCustom` boolean flag.
- **Custom Product Studio Modal (`CustomProductModal`)**:
  - Controlled form with real-time validation allowing creation or editing of any `FragranceProduct`.
  - Supports selecting from high-res studio perfume bottle imagery or uploading a custom image file (`FileReader` data URL) so custom products render immediately in the grid.
  - Updates state and persists to `localStorage` under `la_royale_catalog_v1`, with a one-click reset button to restore the default 6-item demo catalog.
- **Bespoke Flacon Dossier Drawer (`ProductDossierModal`)**:
  - Opens when a client clicks `"Inspect Dossier"` or a product card image; lets the patron choose bottle volume (`50ml` / `100ml`), enter an optional complimentary gold engraving monogram (up to 4 initials), and launch WhatsApp (`https://wa.me/918141603449?text=...`) with the complete bespoke specification.
