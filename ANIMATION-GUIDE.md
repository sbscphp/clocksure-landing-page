# Animation Guide — How Animations Work in This App

This document explains how animations are implemented so you can reproduce the same approach in other apps.

---

## 1. Packages Used

| Package | Version | Role |
|--------|--------|------|
| **tailwindcss-animate** | ^1.0.7 | Tailwind plugin that adds animation utility classes (e.g. `animate-in`, `animate-out`, `fade-in-0`, `slide-in-from-*`). |
| **tw-animate-css** | 1.3.3 | CSS layer that provides the keyframes and animation definitions used by those utilities. |

- **tailwindcss-animate** is in `dependencies`.
- **tw-animate-css** is in `devDependencies` and is imported directly in your global CSS.

---

## 2. Setup

### 2.1 Install

```bash
pnpm add tailwindcss-animate
pnpm add -D tw-animate-css
```

(Or use `npm` / `yarn` as in your other app.)

### 2.2 Global CSS

In your main global CSS file (e.g. `app/globals.css` or `styles/globals.css`), import the animation CSS **after** Tailwind:

```css
@import 'tailwindcss';
@import 'tw-animate-css';
```

That’s all that’s required for the utility-based animations. No extra Tailwind config is needed for the `animate-in` / `animate-out` style usage in this project (Tailwind v4 with `@tailwindcss/postcss`).

### 2.3 Tailwind config (if you use a config file)

If your setup uses a `tailwind.config.js` and the `animate-in` / `animate-out` classes don’t work, add the plugin:

```js
// tailwind.config.js
module.exports = {
  plugins: [require('tailwindcss-animate')],
}
```

---

## 3. How Animated Parts Are Chosen

This app uses three patterns:

1. **Utility-based UI animations** — applied via Tailwind classes (often with data attributes).
2. **Mount / scroll-based entrance** — React state + CSS transitions.
3. **Continuous / keyframe animations** — e.g. bounce, spin.

---

## 4. Pattern 1: Utility-Based (Dialogs, Dropdowns, etc.)

**What gets animated:** Radix UI primitives (Dialog, Dropdown, Sheet, Toast, etc.). The **content** or **overlay** elements are the targets.

**How:** Add classes to the component that renders the overlay or content. Animation is driven by **data attributes** set by Radix (e.g. `data-state="open"` / `"closed"`).

**Typical class combo:**

- `data-[state=open]:animate-in` — when open, run “in” animation.
- `data-[state=closed]:animate-out` — when closed, run “out” animation.
- `data-[state=closed]:fade-out-0` / `data-[state=open]:fade-in-0` — opacity.
- `data-[state=closed]:zoom-out-95` / `data-[state=open]:zoom-in-95` — scale.
- `data-[side=bottom]:slide-in-from-top-2` (and similar for other sides) — slide direction.

**Example (conceptually):**

```tsx
<div
  className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
  data-state={open ? 'open' : 'closed'}
  data-side="bottom"
>
  {/* content */}
</div>
```

**Picking what to animate:**

- Target the **single wrapper** that should fade/scale/slide (usually the content or overlay div).
- Add the `data-*` attributes that your component controls (or that Radix provides).
- Use the same class pattern as in this repo’s UI components (dialog, dropdown, sheet, toast, etc.).

---

## 5. Pattern 2: Mount / Scroll-Based Entrance (Hero, Contact, Stats)

**What gets animated:** Hero sections, contact hero, stats, feature intros. Elements “enter” with a short translate + opacity transition.

**How:**

1. **Trigger:** Either **on mount** or **when the section enters the viewport**.
2. **State:** A boolean (e.g. `isVisible`) is set when that condition is true.
3. **Classes:** `transition-all duration-500` (or `duration-700`) plus conditional classes for “before” and “after”:
   - Before: `translate-y-4 opacity-0` (or `-translate-y-4`, `translate-x-8`, etc.).
   - After: `translate-y-0 opacity-100`.

**On-mount example (hero, contact hero, features hero):**

```tsx
"use client";

import { useEffect, useState } from "react";

export function SomeHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <h1
      className={`transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      Title
    </h1>
  );
}
```

**Scroll-into-view example (stats section):**

```tsx
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    },
    { threshold: 0.3 }
  );
  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);

// On the section:
<section ref={sectionRef}>
  <div
    className={`transition-all duration-500 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* content */}
  </div>
</section>
```

**Picking what to animate:**

- **Hero/contact/features:** Wrap the block (title, subtitle, CTAs) and toggle one `isVisible` on mount. Use a single wrapper or multiple elements with different `transitionDelay` (e.g. `delay-100`, `delay-200`, `delay-300`) for stagger.
- **Stats / lists:** Attach `ref` to the scroll container or section, use `IntersectionObserver`, set `isVisible` when in view, and apply the same transition classes to each item. Use `style={{ transitionDelay: `${index * 100}ms` }}` for staggered items.

---

## 6. Pattern 3: Continuous / Keyframe (Bounce, Spin)

**What gets animated:** Floating cards (bounce), loaders (spin), accordion (open/close).

**How:** Use Tailwind’s built-in or tw-animate utilities:

- **Bounce:** `animate-bounce`. Override duration with inline style: `style={{ animationDuration: '3s' }}`.
- **Spin:** `animate-spin` (e.g. on a loader icon).
- **Pulse:** `animate-pulse` (e.g. skeleton).
- **Accordion:** `data-[state=open]:animate-accordion-down` and `data-[state=closed]:animate-accordion-up` on the content wrapper.

**Picking what to animate:**

- Add the class to the **single element** that should bounce/spin/pulse (e.g. the floating card div, the spinner icon, the skeleton div).
- For multiple bouncing elements, use different `animationDuration` so they don’t move in sync.

---

## 7. Custom “Animated Counter” (Stats)

**What gets animated:** The number value in the stats section (count-up when the section becomes visible).

**How:**

- **Trigger:** Same `isVisible` from the stats section’s `IntersectionObserver`.
- **Logic:** When `isVisible` becomes true, an effect runs a `setInterval` that increments state from 0 to the target value over a fixed duration (e.g. 2000 ms).
- **Display:** Render the current count (with optional formatting, e.g. K/M) plus suffix.

**Picking what to animate:** Use this pattern for any numeric stat that should count up when it enters the viewport. Pass `isVisible` from the same observer that drives the section entrance.

---

## 8. Quick Reference

| Goal | Approach | Packages / deps |
|------|----------|------------------|
| Dialogs, dropdowns, sheets, toasts | `data-[state=open]:animate-in` + fade/zoom/slide classes on content | tw-animate-css (+ tailwindcss-animate if needed) |
| Hero / section entrance on load | `useState` + `useEffect` → `isVisible`; `transition-all` + translate/opacity | None (React + Tailwind) |
| Section entrance on scroll | `IntersectionObserver` + `isVisible`; same transition classes; optional stagger delay | None (React + Tailwind) |
| Bounce / spin / pulse | `animate-bounce`, `animate-spin`, `animate-pulse` | tw-animate-css (Tailwind built-in/keyframes) |
| Count-up numbers | `AnimatedCounter` + `isVisible` from observer | None (React + setInterval) |

---

## 9. Reproducing in Another App

1. **Install:** `tailwindcss-animate` and `tw-animate-css` as above.
2. **CSS:** Add `@import 'tw-animate-css';` after your Tailwind import in the global CSS.
3. **UI components:** On overlay/content divs controlled by state (or Radix), add the same `data-[state=open]:animate-in` and related classes.
4. **Hero/sections:** Use the same `isVisible` + `transition-all` + translate/opacity pattern; use `IntersectionObserver` for scroll-triggered sections and optional `transitionDelay` for stagger.
5. **Bounce/spin:** Use `animate-bounce` / `animate-spin` (and optional `animationDuration`) on the element you want to animate.
6. **Count-up:** Reuse the `AnimatedCounter` + observer pattern from the stats section.

No Framer Motion or other animation library is used; everything is Tailwind utilities + React state and CSS transitions/keyframes.
