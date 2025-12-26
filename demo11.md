# Senior Expert Prompt — “Boba Pop!” (Astro + Neobrutalist Motion / Sticker-Pop)

## Role
You are a **Senior Creative Developer + Astro Architect**.
Objective: Build a **high-performance, high-conversion** brochure site for a **Perth-based bubble tea shop**.

Design Style: **Neobrutalist / Sticker-Pop**  
High contrast, heavy outlines, loud typography, chunky hard shadows, rounded “squircle” corners, and playful **squash-and-stretch** motion.

---

## 0) Non-negotiables
- Static site generation (SSG). Must be deployable to GitHub Pages.
- The site must feel **cartoonish + premium**: sticker-like UI, bold colors, hard outlines, bouncy motion.
- Motion must remain performant: keep main thread free; respect `prefers-reduced-motion`.
- Conversion-first: “Order Now”, “View Menu”, “Find a Store”, “Catering Enquiry” are always easy to reach.

---

## 1) Visual Design System (Sticker Aesthetic)

### Color palette (Option C — High Energy)
Use these exact tokens:
- **Primary:** `#FF2DAB` (Hot Pink)
- **Secondary:** `#00F0FF` (Electric Teal)
- **Accent:** `#FFF01F` (Lemon Yellow — badges like “Limited” / “New”)
- **Background:** `#F9F7F2` (Warm off-white, reduces eye strain)
- **Ink:** `#1A1A1B` (Deep charcoal for text + borders)

### Typography
- **Headings:** `Bangers` *or* `Alumni Sans Pinstripe` (Google Fonts)  
  - Extra-bold feeling, add **2px text-stroke** in Ink (via CSS)
- **Body:** `Outfit` (clean, rounded, high x-height)

**Fluid type rules**
- H1 must “pop” on mobile:
  - `font-size: clamp(2rem, 8vw, 5rem);`
- Use a consistent scale for H2/H3/body (with clamp where useful).

### UI element rules (must be consistent site-wide)
- **Borders:** `3px solid #1A1A1B` (Ink)
- **Hard shadows only:**  
  `box-shadow: 6px 6px 0px 0px #1A1A1B;`
- **Corners:** `border-radius: 20px;` (squircle look)
- Buttons, cards, inputs, modals: all follow the same sticker rule-set.

### Texture / premium print feel
- Add a subtle **grain overlay** on the main layout:
  - opacity around `0.03`
  - never interfere with readability

---

## 2) Advanced Motion Implementation (Neobrutalist Motion)

### Motion stack
- Use **View Transitions API** for page navigation transitions (Astro strength).
- Use **Framer Motion (React island)** *or* **GSAP** for complex hero sequences.
- All decorative loops (pearls bouncing) must be **CSS @keyframes + transform** with:
  - `will-change: transform;`
  - no heavy JS loops

### Interaction logic
**A) “Squish” CTA hover**
- On hover: animate through a squish step before settling:
  1) `scale(1.05, 0.95)`
  2) settle to `scale(1.1)`  
- On press: `active: translateY(2px)` and reduce shadow (or shift shadow) to feel “pressed”.

**B) Micro-interactions**
- When selecting sugar level, the “ice” in a background SVG **jiggles** (small rotation/translate).
- Tabs and chips have springy feedback (no slow easing).

**C) Scroll-triggered cup fill**
- Hero has a layered cup SVG.
- As user scrolls the hero (first ~200–300px), animate a **clip-path** (or mask) to “fill” liquid from bottom to top.

**D) Reduce motion**
- Implement `prefers-reduced-motion`:
  - disable loops (pearls stop)
  - replace transitions with fast fades
  - keep the site fully usable

---

## 3) Tech Stack & Architecture

### Framework
- **Astro 4.x**, SSG, GitHub Pages compatible.

### Styling approach
- **Tailwind CSS** for layout + utilities  
- **Custom CSS Variables** for theme tokens + neobrutalist utilities (borders/shadows/text-stroke)
- Create a small set of Tailwind utilities (or `@layer utilities`) for:
  - `shadow-hard`
  - `border-ink`
  - `text-stroke-ink`
  - `sticker-card`
  - `sticker-button`

### Icons & assets
- Icons: **Lucide-React**
- Add custom SVG “sticker” assets (stars, sparkles, blobs, ice cubes)

### Interactivity (Islands strategy)
- Keep interactivity in small islands for instant UI feedback:
  - **Drink Builder**: Preact or Solid component
  - **Menu Filter**: Preact or Solid component
- Everything else stays pure Astro/static.

### Images & performance
- Use **Astro Image** (`@astrojs/image` / `astro:assets` pipeline) for WebP/AVIF conversion.
- Goal: keep LCP under **~1.2s** on a reasonable mobile profile.
- Ensure images are sized, lazy-loaded, and not blocking render.

---

## 4) Enhanced Site Structure & Sections

### Pages
- `/` Home (conversion-first + signature motion hero)
- `/menu/` Menu (core)
- `/specials/` Limited-time drops
- `/about/` Brand story
- `/locations/` Perth locations + hours
- `/contact/` Catering + general enquiries
- `/order/` Order hub (delivery platform links + pickup CTA)

### Global conversion UX
- Sticky header with primary “Order Now” sticker button.
- Mobile sticky bottom bar: `Menu` / `Order` / `Call` / `Map`.

---

## 5) Homepage: “The Signature Shake” (Hero requirements)

### Layout
- Split screen on desktop:
  - Left: huge typography + CTAs
  - Right: `HeroCup.astro`

### Hero copy (exact direction)
Headline: **“POP. SHAKE. SIP.”**  
Subhead: **“Perth’s loudest boba is here.”**

### HeroCup interaction
- The hero cup is a **layered SVG**:
  - cup outline
  - liquid mask layer for fill
  - ice layer that jiggles with selections
  - pearls layer that bounce/settle

**Pearls:**
- Physics-enabled if feasible (lightweight), otherwise **simulate**:
  - CSS keyframes bounce with staggered delays
  - settle near bottom visually (fake depth is fine)

---

## 6) Menu experience: “Sticker Grid” (core feature)

### Sticker grid UI rules
- Use CSS grid where every 3rd item is slightly rotated:
  - rotate `-2deg` or `2deg`
- Cards look like stickers: thick border, hard shadow, squircle corners.

### Menu filter island (must)
- Category filter: Milk Tea / Fruit Tea / Dessert / Toppings
- Quick toggles: Best Sellers / Limited / Vegan / Gluten-friendly

### Sweetness meter (signature interaction)
- A custom slider that changes color:
  - Green (0%) → Yellow → Orange → Deep Red (100%)
- At 100% the UI has a tiny “shivering” animation (subtle).

---

## 7) Perth Localization (SEO / GEO)

### Local intent copy
- Footer section titled **“Cravings Map”**:
  - mention **Subiaco, Northbridge, Vic Park** naturally (and a couple more)
- Add NAP-style details (mock) and Perth references in headings/subheads.

### Schema
- Inject JSON-LD **CafeOrCoffeeShop** in `<head>`:
  - name, address (Perth, WA, AU), openingHours, telephone (placeholder), url, sameAs (placeholder social)

---

## 8) Data layer (typed)
Create `src/data/products.ts` with strict typing:
- `id`
- `name`
- `price`
- `category`
- `image` (path)
- `ingredients[]`
- `allergens[]`
- `tags[]` (e.g., `bestSeller`, `limited`, `veganOption`)
- `sweetnessDefault` (0–100)

Also create `src/data/locations.ts`, `src/data/reviews.ts`, `src/data/specials.ts` with typed structures.

---

## 9) Required components (implementation checklist)

### Core UI
- `MainLayout.astro`
  - includes global nav, footer, texture overlay, SEO meta, schema injection
- `StickerButton.astro`
  - 3px border, hard shadow, squish hover, press effect:
  - includes `active: translate-y-1` feel (or 2px)
- `StickerCard.astro`
  - shared card base style
- `Badge.astro`
  - “LIMITED” / “NEW” with Accent color and Ink border

### Motion / hero
- `HeroCup.astro`
  - layered SVG
  - clip-path fill on scroll
- `BobaPhysics.astro`
  - CSS-only bouncing pearls in a container (transform-only loops)

### Islands (interactive)
- `DrinkBuilderIsland.tsx` (Preact or Solid)
  - base, size, sweetness slider, toppings selection
  - triggers ice jiggle micro-interaction
- `MenuIsland.tsx`
  - category filter + tags toggles + search
  - instant filtering feedback

### Navigation
- `MobileActionBar.astro`
- `Header.astro` (sticky)

---

## 10) View Transitions (page navigation)
- Enable View Transitions in Astro config and implement tasteful transitions:
  - sticker-like wipe or quick pop/fade
- Ensure transitions are disabled/reduced under `prefers-reduced-motion`.

---

## 11) GitHub Pages compatibility
- Configure `astro.config.mjs` with `site` and `base` for repo deployment.
- Ensure asset paths and links work under a base path.
- Provide a minimal `README.md` explaining:
  - install, dev, build
  - GitHub Pages deploy steps
  - where to set `base` and `site`

---

## 12) Deliverables required from the AI
Return:
1) Project folder structure  
2) Key config files:
   - `astro.config.mjs` (View Transitions enabled)
   - Tailwind config with neobrutalist utilities
3) Full code for:
   - All pages listed above
   - All required components + islands
4) Data files with realistic sample data (10–20 products, 3 locations, 6 reviews, 4 specials)
5) Performance + accessibility notes (short, actionable)
   - motion reduction
   - focus states
   - image sizing

**Final quality bar:**  
This should look like a standout motion demo template: loud, sticky, neobrutalist, cartoonish, and still fast + conversion-focused.
