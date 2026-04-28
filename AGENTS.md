# AGENTS.md — Hugolify project map

> Navigation guide for AI agents (Claude Code, Cursor, Copilot…).
> Read this first. It tells you what this project is, how it's structured, and where to find authoritative information for each concern.

---

## What this project is

A **Hugolify** site — a Hugo static site built on the [Hugolify](https://hugolify.io) module ecosystem. Content is written in Markdown/YAML. Layout comes from Hugo partials. Styling comes from an external styling module (no CSS lives here by default).

---

## Styling approach — read this before writing any CSS

**Since hugolify-theme v2, `hugolify-theme-design-system` is the recommended styling module.**
`hugolify-theme-bootstrap` still exists but is considered legacy — prefer the design system.

### How to customise the design

1. **Override CSS custom properties** — the preferred and almost always sufficient approach. Use `@layer config` in the project CSS to override any semantic or component token. Never rewrite component CSS from scratch.
2. **Add a scoped block style** — only if a project-specific block needs layout or visual rules that have no token equivalent.
3. **Never edit** files inside `node_modules/`, Hugo module caches, or `@uncinq/*` package files.

```css
/* ✓ Correct — override tokens in @layer config */
@layer config {
  :root {
    --color-brand:       var(--color-violet-600);
    --color-brand-muted: var(--color-violet-100);
    --btn-border-radius: var(--radius-pill);
    --font-family-heading: 'Playfair Display', serif;
  }
}

/* ✗ Wrong — do not copy-paste or rewrite component CSS */
.btn-primary { background-color: #7c3aed; border-radius: 9999px; }
```

---

## Repository roles in the ecosystem

| Repo | Role | Relevant for |
| ---- | ---- | ------------ |
| `hugolify-theme` | Hugo partials, layouts, JS | All projects |
| `hugolify-theme-design-system` | **Primary** styling module — token-based vanilla CSS | Recommended |
| `hugolify-theme-bootstrap` | Legacy styling module — SASS + Bootstrap 5 | Legacy only |
| `@uncinq/design-tokens` | Primitive + semantic CSS tokens (OKLCH colors, spacing) | design-system only |
| `@uncinq/component-tokens` | Component-level tokens (`--btn-*`, `--nav-*`) | design-system only |
| `@uncinq/css-base` | Base layer CSS (resets, element defaults) | design-system only |
| `@uncinq/css-components` | Component CSS (`.btn`, `.nav`, `.drawer`) | design-system only |

The `@uncinq/*` packages are **not available** when using `hugolify-theme-bootstrap`.

**This repo** (hugolify-template) is the project layer — it configures which modules to use and provides project-specific content and token overrides.

---

## Active styling module

Check `config/_default/module.yaml` → `imports`:

```yaml
# Recommended (v2 default)
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system

# Legacy
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-bootstrap
```

### hugolify-theme-design-system (recommended)

→ Full design system reference (tokens, components, layout, agent prompts):
  [`hugolify-theme-design-system/DESIGN.md`](https://github.com/hugolify/hugolify-theme-design-system/blob/main/DESIGN.md)

→ Customise by overriding semantic tokens in `@layer config`:

```text
Colors:    --color-brand, --color-bg, --color-text, --color-border, --color-*
Spacing:   --spacing-xs to --spacing-2xl, --spacing-section
Radius:    --radius-sm, --radius-md, --radius-lg, --radius-pill
Shadow:    --shadow-sm, --shadow-md, --shadow-lg
Type:      --font-size-fluid-*, --font-family-sans, --font-family-heading
Buttons:   --btn-border-radius, --btn-font-weight, --btn-padding-x, --btn-padding-y
```

### hugolify-theme-bootstrap (legacy)

→ SASS variables in `assets/sass/abstracts/_variables.sass`.
→ No `@uncinq/*` token packages — customise via Bootstrap SASS variables only.
→ Do not mix with design-system patterns.

---

## Key files

| File | Purpose |
| ---- | ------- |
| `config/_default/hugo.yaml` | Site title, base URL, language |
| `config/_default/module.yaml` | Hugo module imports (theme + styling module) |
| `config/_default/params.yaml` | Site params: header, footer, features, social |
| `config/_default/languages.yaml` | Language config for i18n sites |
| `package.json` | npm scripts and dependencies (generated in part by `hugo mod npm pack`) |
| `package.hugo.json` | Module-level npm dependencies — merged into `package.json` at install time |
| `assets/css/tokens/` | Project token overrides (`@layer config`) |
| `assets/css/components/` | Project-specific component styles |

---

## Development commands

```bash
# Install (after clone or module update)
yarn install:hugolify && yarn install
# or: npm run install:hugolify && npm install
# or: pnpm run install:hugolify && pnpm install

# Local dev server
yarn watch   # or: npm run watch

# Production build
yarn build   # or: npm run build
```

> Run `install:hugolify` whenever you add, remove, or update a Hugo module. It chains:
>
> 1. `hugo mod get` — downloads modules declared in `module.yaml`
> 2. `hugo mod npm pack` — merges `package.hugo.json` from each module into `package.json`

---

## Content structure

Content lives in `content/`. Hugo sections follow the directory structure.

| Path | Section |
| ---- | ------- |
| `content/_index.md` | Homepage |
| `content/<section>/_index.md` | Section list page |
| `content/<section>/<slug>.md` | Single page |

Front matter is YAML. Page layout is selected via `layout:` or inferred from the section.

```yaml
---
title: Page title
description: Meta description (also used in og:description)
layout: page        # optional — inferred from section by default
draft: false
date: 2025-01-01
---
```

---

## Hugo partials & blocks

Hugolify's page builder uses **blocks** — reusable content sections declared in front matter:

```yaml
# content/_index.md
blocks:
  - component: hero
    title: Welcome
    description: Sub-heading text
  - component: cta
    title: Get started
    cta:
      label: Documentation
      url: /docs/
```

Available blocks: `hero`, `cta`, `items`, `gallery`, `quote`, `pricing`, `press`, `timeline`, `block-bg`, and more. Each block is a Hugo partial in `hugolify-theme/layouts/partials/blocks/`.

---

## Site params reference

```yaml
header:
  drawer:
    position: end    # start | end | top | bottom

css:
  postcss: true      # enable PostCSS pipeline (required for hugolify-theme-design-system)

animation: false     # GSAP animations
carousel: true       # Splide.js carousels
map: true            # Leaflet maps
```

---

## Documentation & references

- Full docs: https://www.hugolify.io/docs/
- hugolify-theme architecture: [`hugolify-theme/STYLING.md`](https://github.com/hugolify/hugolify-theme/blob/main/STYLING.md)
- Design system: [`hugolify-theme-design-system/DESIGN.md`](https://github.com/hugolify/hugolify-theme-design-system/blob/main/DESIGN.md)
- Design tokens: [`@uncinq/design-tokens README`](https://github.com/uncinq/design-tokens/blob/main/README.md)
