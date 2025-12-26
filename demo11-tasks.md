# Development Tasks - Demo 11 (Boba Pop!)

Source docs:

- `boba-pop/demo11.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [ ] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [ ] Choose interactivity framework for islands: Preact OR Solid.
- [ ] Choose complex motion library (if needed): Framer Motion (React) OR GSAP.
- [ ] Choose fonts: headings (`Bangers` OR `Alumni Sans Pinstripe`) + body (`Outfit`).
- [ ] Confirm business placeholders (name, phone, Perth suburb list, hours, socials, delivery links).
- [ ] Confirm primary conversion CTAs + routes: Order Now, View Menu, Find a Store, Catering Enquiry.
- [ ] Confirm menu categories + tags: Milk Tea, Fruit Tea, Dessert, Toppings; bestSeller, limited, veganOption, glutenFriendly.

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [ ] Create Astro 4 project (static output / SSG).
- [ ] Configure `astro.config.mjs` with `site` + `base` for GitHub Pages.
- [ ] Enable View Transitions and confirm page navigations work.
- [ ] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [ ] Add/verify scripts: `dev`, `build`, `preview`.
- [ ] Add `src/assets/` placeholder images + sticker SVGs + OG image.
- [ ] Install `lucide-react` (or chosen icon set).

## Phase 2 - Design System (Neobrutalist / Sticker-Pop)

- [ ] Create `src/styles/tokens.css` with exact palette:
  - [ ] Primary `#FF2DAB`, Secondary `#00F0FF`, Accent `#FFF01F`, Background `#F9F7F2`, Ink `#1A1A1B`
- [ ] Define shared UI rules (tokens/utilities) used site-wide:
  - [ ] Borders: `3px solid var(--ink)`
  - [ ] Hard shadow: `6px 6px 0 0 var(--ink)`
  - [ ] Corners: `border-radius: 20px`
- [ ] Add typography rules:
  - [ ] H1 uses `clamp(2rem, 8vw, 5rem)`
  - [ ] Headings use Ink text-stroke (CSS utility)
- [ ] Add subtle grain overlay on main layout (opacity ~0.03).
- [ ] Implement focus-visible styles for links/buttons/inputs.
- [ ] Implement `prefers-reduced-motion` baseline (disable loops, reduce transitions).
- [ ] If using Tailwind: add custom utilities (`shadow-hard`, `border-ink`, `text-stroke-ink`, `sticker-card`, `sticker-button`).

## Phase 3 - Core Layout & Shared Components

- [ ] Create `src/layouts/MainLayout.astro` with header, footer, texture overlay, SEO slots, schema injection.
- [ ] Build `Header.astro` (sticky) with primary Order Now sticker button.
- [ ] Build `MobileActionBar.astro` (mobile sticky): Menu / Order / Call / Map.
- [ ] Build shared components:
  - [ ] `StickerButton.astro` (squish hover + pressed feel)
  - [ ] `StickerCard.astro`
  - [ ] `Badge.astro` (LIMITED / NEW)
- [ ] Build hero components:
  - [ ] `HeroCup.astro` layered SVG (cup outline, liquid mask, ice layer, pearls layer)
  - [ ] `BobaPhysics.astro` CSS-only bouncing pearls (transform-only loops, `will-change: transform`)
- [ ] Build shared content components (as needed): `SectionHeader`, `ReviewCard`, `CTASection`, `FormInput`/`Textarea`.

## Phase 4 - Data Layer (Typed + Sample Data)

- [ ] Create `src/data/products.ts` with strict typing:
  - [ ] `id`, `name`, `price`, `category`, `image`, `ingredients[]`, `allergens[]`, `tags[]`, `sweetnessDefault` (0-100)
  - [ ] Add 10-20 sample products with tags like `bestSeller` and `limited`
- [ ] Create `src/data/locations.ts` (3+ Perth locations; include Subiaco, Northbridge, Vic Park).
- [ ] Create `src/data/reviews.ts` (6 reviews; include rating + author + quote).
- [ ] Create `src/data/specials.ts` (4 limited-time drops).

## Phase 5 - Islands (Interactive UI)

- [ ] Build `MenuIsland.tsx` with:
  - [ ] Category filter + quick toggles (Best Sellers, Limited, Vegan, Gluten-friendly)
  - [ ] Search with instant feedback
  - [ ] Accessible filter controls (buttons/checkboxes/labels)
- [ ] Build sweetness meter slider interaction (0-100):
  - [ ] Color ramp: green (0) -> yellow -> orange -> deep red (100)
  - [ ] Subtle "shiver" at 100%
- [ ] Build `DrinkBuilderIsland.tsx` with:
  - [ ] Base + size + sweetness + toppings selection
  - [ ] Triggers ice jiggle micro-interaction on changes

## Phase 6 - Pages (IA + Conversion-First)

### Home (`src/pages/index.astro`)

- [ ] Hero copy:
  - [ ] Headline: POP. SHAKE. SIP.
  - [ ] Subhead: Perth's loudest boba is here.
- [ ] Above-the-fold CTAs: Order Now + View Menu.
- [ ] Render `HeroCup.astro` and implement scroll-triggered liquid fill (first ~200-300px).
- [ ] Add social proof block (rating + review cards).
- [ ] Add footer "Cravings Map" section mentioning Subiaco, Northbridge, Vic Park (and a few more).

### Menu (`src/pages/menu/index.astro`)

- [ ] Sticker Grid layout; rotate every 3rd item by -2deg / 2deg.
- [ ] Render products from `src/data/products.ts` and wire `MenuIsland.tsx`.
- [ ] Add quick ordering CTAs per item (as appropriate).

### Specials (`src/pages/specials/index.astro`)

- [ ] Render drops from `src/data/specials.ts` with LIMITED / NEW badges.
- [ ] Link to Menu and Order hub.

### About (`src/pages/about/index.astro`)

- [ ] Brand story page (cartoonish + premium tone, Perth-local references).

### Locations (`src/pages/locations/index.astro`)

- [ ] Render locations from `src/data/locations.ts` with hours + address + call + map links.

### Contact (`src/pages/contact/index.astro`)

- [ ] Catering + general enquiry form UI (accessible labels; non-functional OK).
- [ ] Keep conversion CTAs visible (Order/Menu/Locations).

### Order (`src/pages/order/index.astro`)

- [ ] Order hub with delivery platform links + pickup CTA.
- [ ] Ensure Order Now is reachable everywhere (header + mobile action bar).

## Phase 7 - Motion & Interactions

- [ ] Implement Squish CTA hover sequence:
  - [ ] Hover: `scale(1.05, 0.95)` then settle to `scale(1.1)`
  - [ ] Active: `translateY(2px)` + pressed shadow shift
- [ ] Implement sugar selection micro-interaction (ice layer jiggle).
- [ ] Ensure decorative loops use CSS transforms only (no heavy JS loops).
- [ ] Implement View Transition effects (sticker-like wipe or pop/fade).
- [ ] Enforce reduced motion:
  - [ ] Disable loops (pearls stop)
  - [ ] Replace transitions with quick fades

## Phase 8 - SEO (Perth GEO + Schema)

- [ ] Set per-page titles + meta descriptions (conversion-focused).
- [ ] Set canonical URLs correctly (respect `site` + `base`).
- [ ] Add OpenGraph + Twitter card meta with placeholder OG image.
- [ ] Inject JSON-LD `CafeOrCoffeeShop` (Perth, WA, AU) with NAP + hours + URL + `sameAs` placeholders.
- [ ] Add internal linking: Home -> Menu -> Order -> Locations/Contact.

## Phase 9 - Accessibility, Performance & Deployment

- [ ] Accessibility QA: one H1 per page, headings, keyboard nav, focus states, contrast, touch targets.
- [ ] Use `astro:assets` for images (WebP/AVIF, sizing, lazy-load).
- [ ] Keep islands small; avoid heavy JS; sanity-check LCP target (~1.2s mobile profile).
- [ ] Verify the built site works under GitHub Pages base path (no broken links/assets).
- [ ] Add minimal `README.md` with install/dev/build/deploy + where to set `base`/`site`.

## Optional / Bonus

- [ ] Add open now / closed indicator for each location based on hours.
- [ ] Add sticker asset pack (stars/sparkles/blobs/ice cubes) and reuse across pages.
