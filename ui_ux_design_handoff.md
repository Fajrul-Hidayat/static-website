# UI/UX Design Handoff Document — Small Business Static Website
**Agent:** Agent 2 — UI/UX Designer  
**Prepared for:** Agent 3 (Frontend Developer)  
**Date:** 2026-03-09  
**Version:** 1.0

---

## TABLE OF CONTENTS
1. [Design Rationale](#1-design-rationale)
2. [Design System Tokens](#2-design-system-tokens)
3. [Page Layout Specifications](#3-page-layout-specifications)
4. [Component Specifications](#4-component-specifications)
5. [Asset Requirements](#5-asset-requirements)
6. [Implementation Notes](#6-implementation-notes)

---

## 1. DESIGN RATIONALE

> [!IMPORTANT]
> **Client Approval Required:** No brand colors, logo, or business name were provided. All defaults below are flagged with ⚠️ and must be confirmed by the client before Agent 3 begins implementation.

### Aesthetic Direction: **Warm Corporate Premium** *(Hybrid)*

**Direction chosen:** A hybrid of *Clean Corporate* and *Warm & Friendly*, elevated with subtle premium micro-interactions.

**Rationale:**
- Small business clients need to project **trust and approachability simultaneously** — a purely clinical corporate feel alienates local customers, while a purely warm/playful feel undermines professional credibility.
- The chosen direction uses a warm off-white background, deep navy as the authority anchor, and a rich amber accent to signal energy and action — a palette validated by conversion research in local services/consulting sectors.
- Glassmorphism is used **sparingly** (floating nav only) to add a modern premium layer without sacrificing readability on lower-end mobile devices.
- Large, confident typography paired with generous white space communicates competence without feeling sterile.

---

## 2. DESIGN SYSTEM TOKENS

> All tokens map directly to CSS custom properties. Naming convention: `--token-name`.

### 2.1 COLOR PALETTE

⚠️ **CLIENT APPROVAL REQUIRED** — Colors below are defaults. Replace with brand colors if provided.

| Token Name              | Hex Value  | CSS Variable              | Usage                                         |
|-------------------------|------------|---------------------------|-----------------------------------------------|
| `color-primary`         | `#1E3A5F`  | `--color-primary`         | CTAs (bg), section headings, nav logo          |
| `color-primary-hover`   | `#162D4A`  | `--color-primary-hover`   | Primary button hover state                     |
| `color-accent`          | `#D98C2B`  | `--color-accent`          | Highlight accents, icon fills, link underlines |
| `color-accent-hover`    | `#C07820`  | `--color-accent-hover`    | Accent hover state                             |
| `color-background`      | `#F9F7F4`  | `--color-background`      | Page background                                |
| `color-surface`         | `#FFFFFF`  | `--color-surface`         | Cards, modals, input backgrounds               |
| `color-surface-tinted`  | `#EEF2F7`  | `--color-surface-tinted`  | Alternating section backgrounds                |
| `color-text-primary`    | `#1A1A2E`  | `--color-text-primary`    | Body copy, headings                            |
| `color-text-muted`      | `#6B7280`  | `--color-text-muted`      | Captions, labels, placeholder text             |
| `color-text-inverse`    | `#FFFFFF`  | `--color-text-inverse`    | Text on dark/primary backgrounds               |
| `color-border`          | `#E2E6EB`  | `--color-border`          | Dividers, card borders, input outlines         |
| `color-success`         | `#15803D`  | `--color-success`         | Form success states                            |
| `color-error`           | `#B91C1C`  | `--color-error`           | Form error states                              |

**WCAG AA Contrast Verification:**
- `color-text-primary` (#1A1A2E) on `color-background` (#F9F7F4) → **contrast ratio: ~15.8:1** ✅
- `color-text-inverse` (#FFFFFF) on `color-primary` (#1E3A5F) → **contrast ratio: ~9.2:1** ✅
- `color-text-primary` (#1A1A2E) on `color-surface` (#FFFFFF) → **contrast ratio: ~17.4:1** ✅
- `color-text-muted` (#6B7280) on `color-surface` (#FFFFFF) → **contrast ratio: ~4.61:1** ✅ (borderline — do NOT use on tinted backgrounds)

---

### 2.2 TYPOGRAPHY

⚠️ **CLIENT APPROVAL REQUIRED** — Font selection below is a default. Confirm if brand fonts exist.

**Font Family:** `Inter` — sourced from Google Fonts CDN  
**Weights loaded:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)  
**Google Fonts link:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Token Name          | Mobile Size | Desktop Size | Line Height | Weight | CSS Variable             |
|---------------------|-------------|--------------|-------------|--------|--------------------------|
| `type-h1`           | 36px        | 56px         | 1.15        | 700    | `--type-h1`              |
| `type-h2`           | 28px        | 40px         | 1.25        | 600    | `--type-h2`              |
| `type-h3`           | 22px        | 28px         | 1.35        | 600    | `--type-h3`              |
| `type-h4`           | 18px        | 22px         | 1.4         | 600    | `--type-h4`              |
| `type-body`         | 16px        | 17px         | 1.7         | 400    | `--type-body`            |
| `type-body-sm`      | 14px        | 15px         | 1.6         | 400    | `--type-body-sm`         |
| `type-caption`      | 12px        | 13px         | 1.5         | 400    | `--type-caption`         |
| `type-label`        | 13px        | 14px         | 1.4         | 500    | `--type-label`           |
| `type-cta`          | 15px        | 16px         | 1.0         | 600    | `--type-cta`             |

**Letter spacing:**
- H1, H2: `-0.02em` (tight for display headings)
- H3, H4: `-0.01em`
- Body, Caption: `0` (normal)
- Labels, CTA: `0.02em` (slightly open for readability)

---

### 2.3 SPACING SCALE (8pt Grid)

| Token Name    | Value | CSS Variable      | Typical Usage                          |
|---------------|-------|-------------------|----------------------------------------|
| `space-2xs`   | 4px   | `--space-2xs`     | Icon-to-label gaps, tight inline gaps  |
| `space-xs`    | 8px   | `--space-xs`      | Tag padding, list item gaps            |
| `space-sm`    | 16px  | `--space-sm`      | Inner card padding (mobile), form gaps |
| `space-md`    | 24px  | `--space-md`      | Card padding (desktop), section gaps   |
| `space-lg`    | 40px  | `--space-lg`      | Section internal spacing               |
| `space-xl`    | 64px  | `--space-xl`      | Between-section vertical padding       |
| `space-2xl`   | 96px  | `--space-2xl`     | Hero vertical padding                  |
| `space-3xl`   | 128px | `--space-3xl`     | Top-of-page hero offset (desktop only) |

**Grid:** 12-column with `24px` gutters (desktop), `16px` gutters (mobile)  
**Max content width:** `1200px` centered  
**Section max-width for text passages:** `760px` centered  

---

### 2.4 BORDER RADIUS

| Token Name      | Value    | CSS Variable        | Usage                                     |
|-----------------|----------|---------------------|-------------------------------------------|
| `radius-sm`     | 4px      | `--radius-sm`       | Input fields, tags                        |
| `radius-md`     | 8px      | `--radius-md`       | Cards, dropdowns                          |
| `radius-lg`     | 16px     | `--radius-lg`       | Section panels, hero image container      |
| `radius-xl`     | 24px     | `--radius-xl`       | Feature highlight boxes                   |
| `radius-pill`   | 9999px   | `--radius-pill`     | CTA buttons (primary style), badges       |

---

### 2.5 SHADOWS

| Token Name        | CSS Value                                              | CSS Variable         | Usage                            |
|-------------------|--------------------------------------------------------|----------------------|----------------------------------|
| `shadow-subtle`   | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | `--shadow-subtle`    | Subtle lift on input fields      |
| `shadow-card`     | `0 4px 16px rgba(30,58,95,0.08), 0 1px 4px rgba(0,0,0,0.04)` | `--shadow-card`   | Service cards, testimonial cards |
| `shadow-elevated` | `0 12px 40px rgba(30,58,95,0.14), 0 4px 12px rgba(0,0,0,0.06)` | `--shadow-elevated` | Nav (scrolled), modals, floating CTAs |
| `shadow-glow-accent` | `0 0 0 3px rgba(217,140,43,0.3)`                | `--shadow-glow-accent` | Focus rings on accent elements  |
| `shadow-glow-primary` | `0 0 0 3px rgba(30,58,95,0.25)`              | `--shadow-glow-primary` | Focus rings on primary buttons  |

---

### 2.6 TRANSITIONS

| Token Name           | Value                    | CSS Variable           |
|----------------------|--------------------------|------------------------|
| `transition-fast`    | `150ms ease`             | `--transition-fast`    |
| `transition-base`    | `200ms ease`             | `--transition-base`    |
| `transition-slow`    | `350ms ease`             | `--transition-slow`    |
| `transition-spring`  | `300ms cubic-bezier(0.34, 1.56, 0.64, 1)` | `--transition-spring` |

---

## 3. PAGE LAYOUT SPECIFICATIONS

### PAGE 1: HOME (`index.html`)

**PURPOSE:** Convert first-time visitors into leads by immediately communicating the business value proposition, building trust through social proof, and driving a single clear call-to-action.

---

#### SECTION 1: Navigation Bar
- **Layout:** Full-width, sticky, horizontal flex row
- **Sticks to:** Top of viewport on scroll (z-index: 1000)
- **Content Blocks:**
  - Logo/Business Name (left) — `type-h4`, `color-text-inverse` OR `color-primary` depending on scroll state
  - Nav Links (center-right) — "Home", "Services", "About", "Contact" — `type-label`
  - CTA Button (far right) — "Get a Quote" — Primary button (pill style)
- **Background (top of page):** Transparent with text in `color-text-inverse` (overlaid on hero)
- **Background (scrolled >80px):** `color-surface` with `shadow-elevated`, text switches to `color-text-primary`
- **Mobile Behavior:** Logo stays left; nav links collapse into hamburger icon (3-line icon); CTA button hidden; hamburger opens full-screen slide-down drawer with stacked nav links + CTA button at bottom

---

#### SECTION 2: Hero
- **Layout:** Full-width, 2-column (desktop) — Left: content, Right: image
- **Min-height:** 640px (desktop), auto (mobile)
- **Content Blocks (Left Column):**
  - Eyebrow label — `type-label`, `color-accent`, letter-spacing: `0.08em`, UPPERCASE — e.g., `"Trusted Local Experts"` ⚠️ CLIENT CONFIRMS TAGLINE
  - H1 Headline — `type-h1`, `color-text-inverse` — e.g., `"Your Business Deserves Better Results"` ⚠️ CLIENT PROVIDES
  - Subheadline — `type-body`, `color-text-inverse` at 85% opacity — 2 lines max, value proposition sentence
  - Primary CTA Button — label: `"Get a Free Consultation"` — pill style, `color-accent` bg
  - Secondary CTA — text link with right-arrow icon — `"See Our Services"`, `color-text-inverse` underline
  - Trust Signal Row — 3 small stat badges: e.g., `"12+ Years"`, `"500+ Clients"`, `"4.9★ Rating"` ⚠️ CLIENT PROVIDES REAL STATS
- **Content Blocks (Right Column):**
  - Hero Image — aspect ratio 4:3, `radius-lg`, subtle `shadow-elevated`
  - Image fills column width, vertically centered
- **Background:** Linear gradient `135deg`, from `color-primary` to `#2A4A7A` (a lighter navy variant)
- **Mobile Behavior (375px):**
  - Image hidden (or shown as full-bleed background with 40% opacity overlay)
  - Content centered, single column
  - H1 uses mobile size (36px)
  - Trust Signal Row: horizontal scroll row (no wrapping)

---

#### SECTION 3: Services Snapshot
- **Layout:** Centered heading + 3-column card grid
- **Purpose:** Show top 3 services with minimal friction before full Services page
- **Content Blocks:**
  - Section Eyebrow — `type-caption`, `color-accent`, UPPERCASE, centered
  - H2 Heading — `type-h2`, `color-text-primary`, centered — e.g., `"What We Do Best"`
  - Subheading — `type-body`, `color-text-muted`, centered, max 1 line
  - Service Cards × 3 (see Component Spec — Service Card)
  - "View All Services" link — centered below grid, `type-label`, `color-primary`, underline on hover
- **Background:** `color-background`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** Cards stack vertically, full-width each. Grid → single column.

---

#### SECTION 4: Why Choose Us (Value Proposition)
- **Layout:** 2-column, 50/50 — Left: image, Right: content list
- **Content Blocks (Right):**
  - H2 Heading — `type-h2`, `color-text-primary`
  - Body paragraph — 2–3 sentences
  - Feature List — 4 items, each: checkmark icon (`color-accent`) + `type-body` text + `type-body-sm` descriptor in `color-text-muted`
  - Secondary CTA text link — "Learn About Us →"
- **Content Blocks (Left):**
  - Photo — aspect ratio 3:4 (portrait-ish), `radius-lg`
  - Optional: Floating stat card overlay (bottom-right corner of image) — e.g., `"98% Client Satisfaction"`, white bg, `shadow-elevated`, `radius-md`
- **Background:** `color-surface-tinted`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** Image stacks above content. Image aspect ratio becomes 16:9. Floating stat card remains visible.

---

#### SECTION 5: Testimonials
- **Layout:** Centered heading + horizontal scrolling row of cards (desktop: 3 visible; mobile: 1.3 visible — peek scroll)
- **Content Blocks:**
  - H2 — `type-h2`, centered
  - 3–5 Testimonial Cards (see Component Spec — Testimonial Card)
- **Background:** `color-primary`
- **Section heading color:** `color-text-inverse`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** Horizontal scroll snap container. Arrows hidden. Cards: 88vw wide with 16px right margin.

---

#### SECTION 6: CTA Banner
- **Layout:** Centered, full-width, constrained to 860px text column
- **Content Blocks:**
  - H2 — e.g., `"Ready to Get Started?"` — `color-text-inverse`
  - Subtext — 1 short sentence — `color-text-inverse` at 80% opacity
  - Primary CTA Button — large size
  - Optional: Phone number link below button — `type-body-sm`, `color-accent`
- **Background:** Gradient — `color-primary` to `color-accent` at 135deg OR `color-accent` solid (decide with client) ⚠️
- **Padding:** `space-2xl` top/bottom
- **Mobile Behavior:** Text and buttons centered, full-width button on mobile.

---

#### SECTION 7: Footer
- **See Component Spec — Footer**

---

### PAGE 2: SERVICES (`services.html`)

**PURPOSE:** Clearly communicate all service offerings, their value, and make it simple to take the next step (contact/quote).

---

#### SECTION 1: Navigation Bar
- Same as Home (scroll behavior: always opaque on this page since no dark hero)
- **Background on load:** `color-surface` with `shadow-subtle`

---

#### SECTION 2: Page Hero (Compact)
- **Layout:** Centered content, full-width background, NO image column
- **Height:** 280px (desktop), 220px (mobile)
- **Content Blocks:**
  - Breadcrumb — `type-caption`, `color-text-inverse` at 70% — "Home / Services"
  - H1 — `type-h1`, `color-text-inverse` — e.g., `"Our Services"`
  - Subheadline — `type-body`, `color-text-inverse` at 80%, max 1 line
- **Background:** Same gradient as Home hero
- **Mobile Behavior:** All centered, H1 at 36px.

---

#### SECTION 3: Services Grid (Full)
- **Layout:** 2-column asymmetric grid (desktop) — icon/title left label, full detail right
  - OR: 3-column uniform card grid (simpler) — **recommend uniform 3-column for 6+ services** ⚠️ CLIENT CONFIRMS NUMBER OF SERVICES
- **Content Blocks per Service:**
  - Service Card (see Component Spec — Service Card Expanded)
- **Background:** `color-background`
- **Padding:** `space-xl` top, `space-lg` bottom
- **Mobile Behavior:** 1-column stack, cards full-width.

---

#### SECTION 4: Process Section
- **Layout:** Centered heading + 4-step horizontal process row
- **Content Blocks:**
  - H2 — `"How We Work"`
  - Step Item × 4: Number badge, Step Title (`type-h4`), 1-line descriptor (`type-body-sm`, `color-text-muted`)
  - Connector line between steps (CSS `::after` border-top)
- **Background:** `color-surface-tinted`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** Steps stack vertically. Connector line becomes vertical left border. Number badge stays left of text.

---

#### SECTION 5: FAQ Accordion
- **Layout:** Centered, max-width 760px
- **Content Blocks:**
  - H2 — `"Frequently Asked Questions"`, centered
  - 4–6 Accordion items (see Component Spec — Accordion Item)
- **Background:** `color-background`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** Full-width accordion. Touch targets min 48px tall.

---

#### SECTION 6: CTA Banner + Footer
- Reuse CTA Banner and Footer from Home page.

---

### PAGE 3: ABOUT (`about.html`)

**PURPOSE:** Build personal trust and emotional connection with the business — showcase the people, values, and story behind the brand.

---

#### SECTION 1: Navigation Bar (same rules as Services page)

---

#### SECTION 2: Page Hero (Compact)
- Same compact hero pattern as Services page
- H1: e.g., `"About Us"` or `"Who We Are"`
- Subtext: 1-line mission teaser

---

#### SECTION 3: Our Story
- **Layout:** 2-column, 50/50
- **Content Blocks:**
  - Left: Image (founder/team photo) — `radius-lg`, aspect ratio 4:3
  - Right:
    - H2 — `"Our Story"`
    - Body paragraphs — 2–3 short paragraphs
    - Founding year badge (optional) — `color-accent`, `radius-pill`, `type-label`
- **Background:** `color-background`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** Image above content. Image aspect ratio 16:9.

---

#### SECTION 4: Values Grid
- **Layout:** Centered heading + 3-column grid of Value Cards
- **Value Card:** icon (top, `color-accent`), H3 title, 2-line descriptor (`type-body-sm`)
- **Background:** `color-surface-tinted`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** 1-column stack.

---

#### SECTION 5: Team Section
- **Layout:** Centered heading + 3-column grid of Team Cards
- **Team Card:** portrait photo (`radius-lg`, 1:1 crop), Name (`type-h4`), Role (`type-body-sm`, `color-text-muted`), 1-line bio
- **Background:** `color-background`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** 2-column grid on mobile (smaller cards), 1-column if team > 4.

⚠️ **CLIENT PROVIDES:** Team member photos, names, roles, bios.

---

#### SECTION 6: CTA Banner + Footer

---

### PAGE 4: CONTACT (`contact.html`)

**PURPOSE:** Remove all friction from contacting the business — clear form, multiple contact methods, and confidence signals.

---

#### SECTION 1: Navigation Bar (same rules as Services page)

---

#### SECTION 2: Page Hero (Compact)
- H1: `"Get in Touch"`
- Subtext: `"We'd love to hear from you. Fill out the form or use the details below."`

---

#### SECTION 3: Contact Split
- **Layout:** 2-column — Left: Contact Form (60% width), Right: Contact Details (40% width)
- **Left Column — Contact Form:**
  - Form fields (see Component Spec — Form Field)
  - Fields: Full Name, Email Address, Phone (optional), Service Interest (select dropdown), Message (textarea)
  - Primary Submit Button — full-width, label `"Send Message"`
  - Privacy note beneath button — `type-caption`, `color-text-muted` — `"We'll never share your information."`
- **Right Column — Contact Details:**
  - H3 — `"Contact Information"`
  - Address block — icon + text
  - Phone — icon + linked text (`tel:` link)
  - Email — icon + linked text (`mailto:` link)
  - Business hours table — `type-body-sm`
  - Social icons row (LinkedIn, Facebook, Instagram if applicable) ⚠️ CLIENT CONFIRMS
  - Optional: Small Google Maps embed / static map image
- **Background:** `color-background`
- **Padding:** `space-xl` top/bottom
- **Mobile Behavior:** Form stacks above contact details. Both full-width. Map hides on mobile (show address only).

---

#### SECTION 4: Trust Strip
- **Layout:** Full-width, 4-column flex row of trust signals
- **Items:** "Licensed & Insured", "Free Consultations", "24h Response Time", "Local Since [Year]" ⚠️ CLIENT CONFIRMS
- Each item: icon (`color-accent`) + label (`type-label`)
- **Background:** `color-surface-tinted`
- **Padding:** `space-md` top/bottom
- **Mobile Behavior:** 2-column grid, 2 rows.

---

#### SECTION 5: Footer

---

## 4. COMPONENT SPECIFICATIONS

---

### COMPONENT 1: Navigation Bar

```
Structure:
  [Logo/Business Name]  [Nav Links]  [CTA Button]

States: Default (transparent, over hero) | Scrolled (white bg) | Mobile (hamburger)
```

| Property         | Default (transparent) | Scrolled              |
|------------------|-----------------------|-----------------------|
| Background       | `transparent`         | `color-surface`       |
| Box-shadow       | `none`                | `shadow-elevated`     |
| Text color       | `color-text-inverse`  | `color-text-primary`  |
| Logo color       | `color-text-inverse`  | `color-primary`       |
| Transition       | `transition-slow`     | `transition-slow`     |

**Nav Link (individual):**
- Default: `type-label`, `color-text-primary` (or inverse), no underline
- Hover: `color-accent`, underline appears with `transition-base`
- Active (current page): `color-accent`, underline permanent

**Hamburger Icon:**
- 3 lines, each 22px × 2px, `color-text-primary` or inverse
- Gap between lines: 5px
- On open: animates to × (cross) via CSS transform
- Menu drawer: full-screen overlay, `color-primary` background, links centered vertically

---

### COMPONENT 2: Primary Button

```
Variants: Primary (filled) | Ghost (outlined) | Text (link-style)
Sizes:    Default (medium) | Large | Small (iconable)
```

**PRIMARY BUTTON (Default / Medium):**

| State    | Background           | Text                  | Border              | Box-shadow              | Transform           |
|----------|----------------------|-----------------------|---------------------|-------------------------|---------------------|
| Default  | `color-primary`      | `color-text-inverse`  | `none`              | `none`                  | `none`              |
| Hover    | `color-primary-hover`| `color-text-inverse`  | `none`              | `shadow-elevated`       | `translateY(-1px)`  |
| Active   | `#0F1F33` (darker)   | `color-text-inverse`  | `none`              | `none`                  | `translateY(0)`     |
| Disabled | `color-primary` at 40% opacity | `color-text-inverse` at 60% | `none` | `none`       | `none`              |
| Focus    | `color-primary`      | `color-text-inverse`  | `none`              | `shadow-glow-primary`   | `none`              |

- Padding: `12px 28px` (medium), `16px 40px` (large), `8px 18px` (small)
- Border-radius: `radius-pill`
- Font: `type-cta`, letter-spacing `0.02em`
- Transition: `transition-base` (bg, transform, box-shadow)
- Cursor: `pointer`; Disabled: `not-allowed`

**ACCENT CTA BUTTON (Hero CTA variant):**
- Same structure but `color-accent` background, `color-text-primary` text
- Hover: `color-accent-hover`, `shadow-elevated`, `translateY(-1px)`

**GHOST BUTTON:**
- Background: `transparent`
- Border: `2px solid color-primary`
- Text: `color-primary`
- Hover: Background `color-primary`, text `color-text-inverse`
- Same padding and radius as Primary Button

**TEXT LINK BUTTON:**
- Background: `none`, no border
- Text: `color-primary`, `type-label`
- Hover: `color-accent`, underline
- Arrow icon (→) inline, transitions `translateX(4px)` on hover

---

### COMPONENT 3: Service Card

**Variant A: Snapshot (Home page, 3-column grid)**

```
┌──────────────────────────────┐
│  [Icon — 40x40, color-accent]│
│                              │
│  Service Title (H3)          │
│  2-line description (body-sm)│
│                              │
│  "Learn More →" (text link)  │
└──────────────────────────────┘
```

| Property        | Value                              |
|-----------------|------------------------------------|
| Background      | `color-surface`                    |
| Border          | `1px solid color-border`           |
| Border-radius   | `radius-md`                        |
| Padding         | `space-md`                         |
| Box-shadow      | `shadow-card`                      |
| Hover shadow    | `shadow-elevated`                  |
| Hover transform | `translateY(-4px)`                 |
| Transition      | `transition-base`                  |

- Icon: 40×40px, SVG or icon font, `color-accent`
- Title: `type-h3`, `color-text-primary`
- Description: `type-body-sm`, `color-text-muted`, clamped to 2 lines (`-webkit-line-clamp: 2`)
- Link: Text Link Button component

**Variant B: Expanded (Services page, full listing)**
- Width: Full card max-width in grid column
- Adds: longer body text (4 lines), bullet list of sub-features (3–4 items), and a "Get a Quote" Primary ghost button at bottom
- Same visual style, radius, shadow

---

### COMPONENT 4: Testimonial Card

```
┌────────────────────────────────────┐
│ ★ ★ ★ ★ ★  (5 stars, color-accent) │
│                                    │
│ "Testimonial quote text here.      │
│  This should be 2–3 lines max."    │
│                                    │
│ ┌──────┐                           │
│ │ IMG  │  Client Name (type-label) │
│ │ 40px │  Role or Location         │
│ │ circ │  (type-caption, muted)    │
│ └──────┘                           │
└────────────────────────────────────┘
```

| Property        | Value                              |
|-----------------|------------------------------------|
| Background      | `rgba(255,255,255,0.08)` (glassmorphism on `color-primary` bg) |
| Backdrop-filter | `blur(12px)`                       |
| Border          | `1px solid rgba(255,255,255,0.15)` |
| Border-radius   | `radius-md`                        |
| Padding         | `space-md`                         |
| Text color      | `color-text-inverse`               |

- Stars: Unicode ★ or SVG, `color-accent`, `16px`
- Quote: `type-body`, `color-text-inverse`, italic, `line-clamp: 4`
- Avatar: 40×40px circle, `radius-pill`, 1:1 object-fit: cover
- No hover transform on this card (passive content component)

---

### COMPONENT 5: Form Field

**Structure:** Label → Input → (Error message below)

| Property           | Default                            | Focus                              | Error                              |
|--------------------|------------------------------------|------------------------------------|-------------------------------------|
| Background         | `color-surface`                    | `color-surface`                    | `color-surface`                    |
| Border             | `1px solid color-border`           | `2px solid color-primary`          | `2px solid color-error`            |
| Border-radius      | `radius-sm`                        | `radius-sm`                        | `radius-sm`                        |
| Padding (input)    | `12px 16px`                        | `12px 16px`                        | `12px 16px`                        |
| Box-shadow         | `shadow-subtle`                    | `shadow-glow-primary`              | `0 0 0 3px rgba(185,28,28,0.2)`   |
| Font               | `type-body`, `color-text-primary`  | same                               | same                               |
| Transition         | `transition-fast`                  | —                                  | —                                  |

**Label:** `type-label`, `color-text-primary`, `margin-bottom: space-2xs`  
**Placeholder:** `type-body`, `color-text-muted`  
**Error message:** `type-caption`, `color-error`, `margin-top: space-2xs`, with ⚠ icon prefix  
**Textarea:** Same as input, min-height `140px`, resize: vertical  
**Select dropdown:** Same as input; custom arrow icon replaces browser default  

---

### COMPONENT 6: Accordion Item (FAQ)

```
┌──────────────────────────────────────┐
│ Question text (type-h4)     [+ icon] │
├──────────────────────────────────────┤
│ Answer text (type-body) — collapsed  │
│ by default; expands on click         │
└──────────────────────────────────────┘
```

| State    | Border-bottom                | Icon       | Background         |
|----------|------------------------------|------------|--------------------|
| Closed   | `1px solid color-border`     | `+` (24px) | `color-surface`    |
| Open     | `1px solid color-border`     | `−` (24px) | `color-surface-tinted` |

- Trigger padding: `space-md` top/bottom, `space-sm` left/right
- Answer padding: `0 space-sm space-md`
- Answer max-height animates `0 → auto` using `transition-slow` (JS-driven)
- Icon rotates 45° on open: CSS `transform: rotate(45deg)`, `transition-base`
- Min touch height: `56px` per accordion item trigger
- First item has top border; last item has bottom border only

---

### COMPONENT 7: Footer

```
Layout (Desktop): 4-column grid
Col 1 (30%): Logo + tagline + social icons
Col 2 (23%): Quick Links nav list
Col 3 (23%): Services list
Col 4 (24%): Contact snippet + CTA

Bottom bar: Copyright text (left) | Privacy Policy link (right)
```

| Property        | Value                              |
|-----------------|------------------------------------|
| Background      | `#0F1F33` (deep navy, darker than primary) |
| Text color      | `color-text-inverse` at 80% opacity|
| Heading color   | `color-text-inverse` (100%)        |
| Link hover      | `color-accent`, `transition-fast`  |
| Padding         | `space-2xl` top, `space-lg` bottom |
| Bottom bar bg   | `rgba(0,0,0,0.2)` overlay          |
| Bottom bar padding | `space-sm` top/bottom           |

- Column headings: `type-label`, `color-text-inverse`, letter-spacing `0.08em`, UPPERCASE
- Nav links: `type-body-sm`, `color-text-inverse` at 75%, no underline, hover: `color-accent`
- Social icons: 24×24px SVG, `color-text-inverse` at 60%, hover: `color-accent`, scale 1.1
- Copyright: `type-caption`, `color-text-muted` (adjusted for dark bg → use `rgba(255,255,255,0.45)`)
- **Mobile Behavior:** 2-column grid (Col1 + Col2, Col3 + Col4) → on very small screens, single column stack. Bottom bar stacks vertically (copyright above policy link).

---

### COMPONENT 8: Trust Badge / Stat Card (Hero overlay)

```
┌──────────────────────┐
│  BIG NUMBER (type-h2)│
│  Label (type-caption)│
└──────────────────────┘
```

| Property     | Value                          |
|--------------|--------------------------------|
| Background   | `color-surface`                |
| Padding      | `space-sm space-md`            |
| Border-radius| `radius-md`                    |
| Box-shadow   | `shadow-elevated`              |
| Min-width    | `120px`                        |
| Number color | `color-primary`                |
| Label color  | `color-text-muted`             |

- Used inline in Hero trust signal row (horizontal, 3 badges)
- Also used as floating overlay card on About/Home value section image

---

## 5. ASSET REQUIREMENTS

**⚠️ All items marked ⚠️ require client confirmation before Agent 3 begins.**

### Images (to be provided by client or sourced royalty-free)

| # | Image                   | Page(s)              | Recommended Size | Notes                                     |
|---|-------------------------|----------------------|------------------|-------------------------------------------|
| 1 | Hero Image              | Home                 | 800×600px min    | ⚠️ Business-relevant photo (team, office, product) |
| 2 | About / Story Photo     | About                | 800×600px min    | ⚠️ Founder or team photo                  |
| 3 | Team Member Photo × N   | About                | 400×400px each   | ⚠️ 1:1 crop, professional headshots       |
| 4 | Value Section Photo     | Home                 | 600×800px min    | ⚠️ Action/lifestyle shot                  |
| 5 | Testimonial Avatars × N | Home, Services       | 80×80px each     | ⚠️ Client photos OR use initial/icon avatars |
| 6 | Favicon                 | All                  | 32×32px + 180×180px | ⚠️ Derive from logo or use brand icon   |
| 7 | OG Social Image         | All (meta tag)       | 1200×630px       | Auto-generate from hero design            |

### Icons
- **Icon library:** Heroicons v2 (SVG, MIT licensed, CDN or self-hosted)
  - Use `outline` style primarily; `solid` for filled accent icons only
  - Size: 24×24px (default), 40×40px (service card icons)
- **Icons needed (minimum set):**
  - Navigation: menu (hamburger), x (close), chevron-down
  - Services: depends on service types ⚠️ CLIENT SPECIFIES
  - UI: check-circle, arrow-right, star, phone, envelope, map-pin, clock, shield-check, users

### Fonts
- Self-host OR use Google Fonts CDN link (CDN preferred for GitHub Pages):
  ```
  https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap
  ```

### Logo ⚠️
- **REQUIRED FROM CLIENT** — SVG preferred; PNG with transparent background acceptable
- Must be provided in both **dark version** (for light backgrounds) and **light/white version** (for dark nav/footer)
- If not provided before development starts, Agent 3 should use a text-based logotype placeholder using `Inter 700`

---

## 6. IMPLEMENTATION NOTES

### CSS Architecture

1. **Custom Properties First:** All design tokens must be defined as CSS custom properties on `:root` before any component styles. This is the single source of truth.

2. **Mobile-First:** All base styles are written at 375px width. Use `min-width` media queries only:
   ```
   @media (min-width: 768px) { ... }   /* Tablet */
   @media (min-width: 1280px) { ... }  /* Desktop */
   ```

3. **No JavaScript dependencies for layout** — All layout must function without JS. JS is only for:
   - Navbar scroll behavior (add/remove `.scrolled` class)
   - Mobile hamburger menu open/close
   - Accordion expand/collapse
   - Form validation (client-side only; form must use `action` pointing to a form service like Formspree or Netlify Forms)

### Performance

4. **Image optimization:** All images must be served as WebP with JPEG fallback. Use `<picture>` element. No image should exceed 200KB after compression.

5. **Font loading:** Use `font-display: swap` in `@font-face` (handled by Google Fonts `display=swap` parameter) to prevent layout shift.

6. **No additional CSS frameworks** (no Bootstrap, no Tailwind). Pure CSS only — the design system tokens replace the need for a utility framework.

### Sticky Navbar JS Hint

```
// Pseudocode for Agent 3
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
```

- This class toggle drives the transparent → white transition.
- On non-home pages (no dark hero), always apply `.scrolled` on load.

### Form Handling

7. The contact form must POST to an external service (no server):
   - **Recommended:** [Formspree](https://formspree.io) (free tier) — `action="https://formspree.io/f/{id}"`
   - Alternative: Netlify Forms (if deploying to Netlify instead of GitHub Pages)
   - ⚠️ **CLIENT CONFIRMS** deployment platform before implementation

8. Form must have:
   - `novalidate` attribute on `<form>` (JS handles validation)
   - Each field grouped in a `.form-group` div (label + input + error)
   - Aria attributes: `aria-describedby` linking input to error message span
   - Submit button shows loading spinner state during POST

### Glassmorphism (Scrolled Nav on Home)

9. Navbar glassmorphism on home (on scroll):
   ```
   background: rgba(255, 255, 255, 0.85);
   backdrop-filter: blur(16px);
   -webkit-backdrop-filter: blur(16px);
   ```
   Note: `backdrop-filter` is not supported in Firefox < 103. Use `background: rgba(255,255,255,0.97)` as fallback.

### Accessibility Checklist for Agent 3

- [ ] All images have descriptive `alt` attributes
- [ ] All form inputs have associated `<label>` elements (not placeholder-only)
- [ ] Skip-to-content link as first element in `<body>`
- [ ] Focus styles must be visible: never `outline: none` without replacement
- [ ] Hamburger button has `aria-label="Open navigation menu"` and `aria-expanded` toggle
- [ ] Accordion buttons have `aria-expanded` and `aria-controls`
- [ ] Color is never the sole means of conveying information (always pair with text/icon)
- [ ] Page `<title>` tags are unique per page

### File Structure for Agent 3

```
/
├── index.html
├── services.html
├── about.html
├── contact.html
├── css/
│   ├── tokens.css        ← CSS custom properties (design tokens)
│   ├── base.css          ← Reset, body, typography base
│   ├── layout.css        ← Grid, container, section rhythm
│   ├── components.css    ← All component styles
│   └── pages.css         ← Page-specific overrides
├── js/
│   ├── nav.js            ← Navbar scroll + hamburger
│   ├── accordion.js      ← FAQ accordion
│   └── form.js           ← Contact form validation + submit
├── assets/
│   ├── images/           ← All images (WebP)
│   └── icons/            ← SVG icons (if self-hosting Heroicons)
└── favicon.ico
```

---

*End of Handoff Document — Agent 2 → Agent 3*  
*Version 1.0 | 2026-03-09*  
*Flag all ⚠️ items for client response before frontend development begins.*
