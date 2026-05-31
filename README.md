# Felix Ferdinand — Portfolio

Personal portfolio website for **Felix Ferdinand**, Frontend Engineer. Built with Next.js 13, TypeScript, Tailwind CSS, and SCSS Modules.

Live at **[felixferdinand.vercel.app](https://felixferdinand.vercel.app)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + SCSS Modules |
| HTTP Client | Axios |
| Icons | react-icons |
| Font | Inter (Google Fonts via `next/font`) |
| Deployment | Vercel |
| Container | Docker (multi-stage build) |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router — routing only
│   ├── layout.tsx          # Root layout, metadata, JSON-LD injection
│   ├── page.tsx            # Home page — composes all sections
│   ├── robots.ts           # Auto-generated robots.txt
│   └── sitemap.ts          # Auto-generated sitemap.xml
│
├── components/             # Generic reusable UI primitives
│   ├── Carousel/           # Image carousel with dot indicators
│   │   ├── index.tsx
│   │   └── Carousel.module.scss
│   ├── Modal/              # Overlay modal with scale animation
│   │   ├── index.tsx
│   │   └── Modal.module.scss
│   └── TechBadge/          # Pill badge for tech stack labels
│       └── index.tsx
│
├── features/               # Domain-specific feature modules
│   ├── about/
│   │   ├── Description.tsx
│   │   └── about.module.scss
│   ├── experience/
│   │   ├── ExperienceSection.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── experience.module.scss
│   ├── projects/
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   └── projects.module.scss
│   └── pokedex/            # Easter egg — Gen 1 Pokédex (PokéAPI)
│       ├── Pokedex.tsx
│       └── pokedex.module.scss
│
├── layout/                 # Page-shell components
│   ├── Sidebar/
│   │   ├── index.tsx
│   │   └── Sidebar.module.scss
│   ├── Footer/
│   │   └── index.tsx
│   ├── SocialIcons/
│   │   └── index.tsx
│   └── JsonLd.tsx          # Schema.org Person structured data
│
├── data/                   # Static content (no API calls)
│   ├── experience.ts       # Work history entries
│   └── projects.ts         # Project entries with images and metadata
│
├── types/                  # TypeScript type definitions
│   └── pokemon.ts          # IPokemon and related interfaces
│
├── utils/                  # Utility constants and helpers
│   ├── social.ts           # Social link definitions with icons
│   └── typeColors.ts       # Pokémon type → color map
│
└── styles/                 # Global SCSS
    ├── globals.scss        # Entry: Tailwind directives + shared layers
    ├── _variables.scss     # Design tokens ($color-teal, $duration-*)
    └── _base.scss          # Scrollbar, text selection (uses variables)
```

---

## Features

- **Responsive layout** — two-column desktop, single-column mobile with sticky section headers
- **Smooth scroll navigation** — sidebar links highlight based on scroll position
- **Project modals** — click any project thumbnail to open a full-screen image carousel
- **SEO optimised** — full Open Graph, Twitter Card, JSON-LD structured data, sitemap, robots.txt
- **Pokédex easter egg** — click the name in the sidebar to browse all 151 Gen 1 Pokémon (data from PokéAPI)
- **SCSS Modules** — each feature owns scoped styles; global tokens shared via `_variables.scss`
- **Docker ready** — multi-stage Dockerfile with non-root user and standalone Next.js output

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Docker

```bash
# Build and run
docker compose up --build

# Or manually
docker build -t felix-portfolio .
docker run -p 3000:3000 felix-portfolio
```

Open [http://localhost:3000](http://localhost:3000).

---

## Styling Approach

Styles use a **Tailwind + SCSS hybrid**:

- **Tailwind** — responsive layout, spacing, colors, and one-off utilities
- **SCSS Modules** — component-scoped styles for animations, pseudo-elements, and state transitions
- **`_variables.scss`** — shared design tokens (`$color-teal`, `$duration-std`, `$ease-out`, etc.) imported into every module via `@use`
- **`globals.scss`** — global layers (`.card-hover`, `.section-nav`) shared between multiple features

---

## Adding Content

**New experience entry** — edit [`src/data/experience.ts`](src/data/experience.ts) and add an object to the `experiences` array.

**New project** — add images to `public/img/`, import them in [`src/data/projects.ts`](src/data/projects.ts), and add an entry to the `projects` array. Set `slides` for a modal carousel, or `href` for an external link.

---

## Deployment

Deployed automatically to **Vercel** on every push to `main`. No additional configuration required.

---

## License

Personal portfolio — not licensed for reuse.
