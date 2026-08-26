---
name: personal-site-design
description: Design system reference for the personal-site portfolio — color tokens, typography, component patterns, spacing conventions. Use whenever adding or modifying UI in this project.
---

# personal-site design system

Single source of truth for the visual language of jonathanlambert.com. Update this file every time a new pattern is introduced or an existing one shifts.

All design tokens live in `src/styles.css` inside a Tailwind v4 `@theme` block — they're consumed via Tailwind utilities (e.g. `bg-primary-600`, `text-gray-900`, `font-display`). Do **not** hard-code hex values in components.

---

## Color palette

### Gray (neutral spectrum, mapped from Tailwind's `neutral`)

| Token | Hex | Typical use |
|---|---|---|
| `gray-50` | `#fafafa` | Page background |
| `gray-100` | `#f5f5f5` | Subtle surfaces, hover backgrounds |
| `gray-200` | `#e5e5e5` | Borders, dividers |
| `gray-300` | `#d4d4d4` | Disabled borders |
| `gray-400` | `#a3a3a3` | Disabled text, placeholder |
| `gray-500` | `#737373` | Secondary muted text |
| `gray-600` | `#525252` | Body secondary, nav links |
| `gray-700` | `#404040` | Strong body text |
| `gray-800` | `#262626` | Near-black surfaces |
| `gray-900` | `#171717` | Default body & heading text |
| `gray-950` | `#0a0a0a` | Reserved for darkest accents |

### Primary (emerald)

| Token | Hex | Typical use |
|---|---|---|
| `primary-50` | `#ecfdf5` | Tinted backgrounds |
| `primary-100` | `#d1fae5` | Soft surfaces, badges |
| `primary-200` | `#a7f3d0` | |
| `primary-300` | `#6ee7b7` | |
| `primary-400` | `#34d399` | Hover accents |
| `primary-500` | `#10b981` | Default accent (e.g. dot, underline) |
| `primary-600` | `#059669` | **Primary action / accent text** (eyebrow, links) |
| `primary-700` | `#047857` | Hover state for primary actions |
| `primary-800` | `#065f46` | Pressed state |
| `primary-900` | `#064e3b` | |
| `primary-950` | `#022c22` | |

**Defaults to remember**
- Page background: `gray-50`
- Body text: `gray-900`
- Secondary/UI text: `gray-600`
- Borders: `gray-200`
- Accent text & links: `primary-600` → hover `primary-700`

---

## Typography

Single font for now — Figtree, loaded from Google Fonts via a `<link>` tag in `src/routes/__root.tsx`. Both `--font-sans` and `--font-display` point to the same Figtree stack, so `font-display` (Logo, h1/h2 headings) and `font-sans` (body copy, nav links, UI labels) render identically until a second display face is reintroduced.

| Family | Tailwind class | CSS var | Used for |
|---|---|---|---|
| **Figtree** | `font-sans` *(default)* | `--font-sans` | All body copy, nav links, UI labels, eyebrows, buttons |
| **Figtree** | `font-display` | `--font-display` | Logo, h1/h2 headings, anything that should feel "branded" |

### Weight conventions

- Logo / display headings: `font-bold` (700) — Figtree available at 400/500/600/700/800/900
- Body: `font-normal` (400) by default
- UI labels & eyebrows: `font-medium` (500)
- Avoid italics; use weight + size for emphasis

### Size scale (in use)

- Hero h1: `text-4xl sm:text-5xl md:text-6xl` + `tracking-tight` (ramps from mobile to desktop)
- Eyebrow: `text-sm` + `uppercase` + `tracking-widest`
- Body lead: `text-lg`
- Nav links / UI: `text-sm`

---

## Component patterns

### Container

Every full-width section uses the same responsive container shell:

```tsx
<section className="mx-auto max-w-5xl px-6 md:px-12 lg:px-20 ...">
```

- `max-w-5xl` (1024px) is the column width. Stay consistent — do not introduce other max widths without good reason.
- Horizontal gutters ramp by viewport: `px-6` (mobile) → `md:px-12` (tablet, ≥768px) → `lg:px-20` (desktop, ≥1024px). Apply this same triplet to nav and every content section so vertical edges align across the page.

### Section vertical rhythm

- **Nav**: `py-3` (compact, sits at top) — note: both the Logo and the nav links use `-bottom-3` on their hover underline to land at the navbar's bottom border, so any change to nav `py-*` must update those `-bottom-*` values too. The `<ul>` of nav links uses the modifier-syntax `text-base/9` (font-size 1rem + line-height 2.25rem in a single rule) so the link line-box is reliably 36px to match the Logo's `text-3xl` line-height. **Don't split this into `text-base leading-9`** — those are equal-specificity rules whose ordering Tailwind doesn't guarantee, and `text-base`'s 24px line-height can clobber `leading-9`. If the Logo size changes, update the ul's `text-base/{N}` to match.
- **Hero**: `py-32` (generous, page-defining)
- **Content sections** (e.g. Projects): `py-24` — established precedent
- Reserve `py-32` for hero-like emphasis only

### Borders

- Section dividers: `border-b border-gray-200` (used on nav)
- Avoid heavier borders; this is a low-chrome design

### Eyebrow + heading + lede pattern (Hero)

```tsx
<p className="text-sm font-medium uppercase tracking-widest text-primary-600">Eyebrow</p>
<h1 className="mt-4 font-display text-6xl font-bold tracking-tight text-gray-900">Heading</h1>
<p className="mt-6 max-w-xl text-lg text-gray-600">Lede paragraph</p>
```

Vertical spacing between stacked text uses `mt-*` rather than parent `space-y-*` so each element controls its own rhythm.

### Links (interactive)

- Default: inherit text color
- Hover: `transition-colors hover:text-gray-900` (when starting from `text-gray-600`)
- Primary CTAs (when introduced): `text-primary-600 hover:text-primary-700`

### Nav-bar underline reveal (Logo and nav links)

Both the Logo and the nav links use the same hover treatment: a 2px gray-900 line that wipes in left→right at the navbar's bottom border on hover/focus. Visually identical thickness and y-position. The CSS plumbing differs because the two anchors have different internal structure.

**Logo classes** (pseudo lives directly on the hovered `<a>` so the underline spans both the dot and the JL text continuously; `group` is still on the `<a>` to drive the dot's color change):
```
group relative
after:absolute after:inset-x-0 after:-bottom-3 after:h-0.5
after:origin-left after:scale-x-0 after:bg-gray-900
after:transition-transform after:duration-300 after:content-['']
hover:after:scale-x-100 focus-visible:after:scale-x-100
```

**Nav link classes** (pseudo lives directly on the hovered `<a>`, so plain `hover:` works):
```
relative -my-3 inline-block py-3
after:absolute after:inset-x-0 after:bottom-0 after:h-0.5
after:origin-left after:scale-x-0 after:bg-gray-900
after:transition-transform after:duration-300 after:content-['']
hover:after:scale-x-100 focus-visible:after:scale-x-100
```

Notes:
- The link is `inline-block` with `py-3 -my-3` so its padding-box fills the entire navbar height (top to bottom border) without growing the navbar layout. Result: the clickable hit area for each link is the full navbar height, and the underline at `after:bottom-0` lands precisely on the navbar border.
- `py-3` and `-my-3` on the link are both coupled to nav `py-3`. If you change nav `py-*`, change all three to match (link `py-N` = link `-my-N` = nav `py-N`).
- The Logo doesn't use the inline-block + negative-margin trick because its `<a>` is already `inline-flex` with geometry that puts its own bottom at the nav content bottom; `-bottom-3` then places the pseudo at the navbar border. The pseudo's `inset-x-0` makes the underline span the full width of the inline-flex `<a>` — i.e., dot + gap + JL — as one continuous line.
- Both pseudos use `h-0.5` (2px) so the underlines read as one consistent visual element across the navbar.

### Nav (mobile)

Below `md` (<768px), the inline `<ul>` of links is hidden and replaced with a hamburger button on the right. Tapping it toggles a stacked panel positioned absolutely just below the navbar.

- Toggle button: `md:hidden`, ~44px square hit target, inline SVG (three lines → X when open). Wires up `aria-label="Toggle menu"`, `aria-expanded`, `aria-controls`.
- Inline links list: `hidden md:flex` so the desktop treatment stays untouched at `md+`.
- Open panel: `absolute inset-x-0 top-full z-10 border-b border-gray-200 bg-gray-50 md:hidden`. Each link is `block px-6 py-4 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900`, separated by `border-t border-gray-200`. No underline reveal on stacked rows — the row-highlight on hover does the same job.
- State lives in `Nav.tsx` via `useState`. Link clicks close the menu; an `Escape` key listener (added while open) also closes it.

```tsx
const [open, setOpen] = useState(false);

useEffect(() => {
  if (!open) return;
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [open]);
```

### Section with eyebrow heading

For content sections that follow the hero. The eyebrow alone (no h2) carries the section label when contents speak for themselves.

```tsx
<section className="mx-auto max-w-5xl px-6 py-24">
  <p className="text-sm font-medium uppercase tracking-widest text-primary-600">Section Label</p>
  <ul className="mt-8 ...">…</ul>
</section>
```

`mt-8` (32px) between eyebrow and content — tighter than the hero's `mt-4 / mt-6` cascade because content is a block, not stacked text.

### Project card

Used in the Projects grid. Flat aesthetic — no shadows, borders, or rounded corners.

```tsx
<a href={href} className="group block">
  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
    <img
      src={imageUrl}
      alt=""
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
    />
  </div>
  <h3 className="mt-4 font-display text-xl font-bold text-gray-900">{name}</h3>
  <p className="mt-1 text-sm text-gray-600">{platform} | {description}</p>
</a>
```

- Image box: 4:3 landscape, `bg-gray-100` as load-state placeholder, sharp corners.
- Hover: subtle 1.02× image scale via `group-hover`.
- Meta line uses pipe (`|`) separator — `platform | description`.
- Wrap the card in `<a className="group block">` so the whole card is clickable and the image can react to hover.

**No-image variant**: when `project.image` is `null`, drop the image box entirely (never render an `<img>` with an empty/`"null"` `src`) and give the card's content a simple border instead:

```tsx
<a className="group block border border-gray-200 p-6">
  <div className="flex items-start justify-between gap-4">
    <h3 className="font-sans text-xl font-bold text-gray-900">{name}</h3>
    <ArrowUpRight ... />
  </div>
  <p className="mt-1 text-sm text-gray-600">{description}</p>
</a>
```

- `border border-gray-200` (the standard divider token) plus `p-6` gives the text-only card its own visual boundary instead of floating unanchored next to image cards in the grid.
- No `mt-4` before the title row here — the box's own `p-6` padding provides the top offset that the image box's height otherwise gave.

---

## Spacing & layout conventions

- **Single-column** layout — no sidebars at the top level. Sections stack.
- **Left-aligned** copy by default. Center only when specifically called for.
- **Max content width** = `max-w-xl` (~36rem) for paragraphs, `max-w-5xl` for the layout column.
- Horizontal page gutters always `px-6` — never `px-4` or `px-8` (consistency over local optimization).
- Vertical rhythm uses Tailwind's spacing scale; favor `mt-4 / mt-6 / mt-12 / mt-24` over arbitrary values.

---

## File map (where things live)

- Tokens: `src/styles.css`
- Font links: `src/routes/__root.tsx`
- Shared chrome: `src/components/Nav.tsx`, `src/components/Logo.tsx`
- Page sections: `src/components/Hero.tsx`, `src/components/Projects.tsx` (and future siblings)
- Content data: `src/data/` (e.g. `projects.ts`)
- Routes: `src/routes/` (file-based via TanStack Start)

---

## When updating this skill

- Add a new row to the color or typography tables when a new token enters use.
- Add a new component subsection when a reusable pattern is established (e.g. Card, Button, FormField).
- Remove or revise sections that no longer reflect the codebase — stale design docs are worse than none.
