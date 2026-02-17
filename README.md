# Age-Link Specialist Clinic

Website for **Age-Link Specialist Clinic** — a specialist geriatric medical practice. Built with Next.js, React, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework:** Next.js 16 (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + Sass
- **Animations:** Framer Motion
- **Carousel:** Swiper
- **Lightbox:** Fancyapps UI

## Project Structure

```
src/
├── app/                  # Next.js app router (layout, page, globals)
├── components/
│   ├── layout/           # Header, Footer, MobileMenu, StickyMobileCTA
│   ├── sections/         # Hero, Services, DoctorProfile, HowItWorks, etc.
│   ├── shared/           # CursorFollower, SkipLinks, SVGBackground
│   └── ui/               # Button, Card, Container, SectionHeading, ScrollReveal
├── data/                 # Centralized content source (content.tsx)
└── lib/                  # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start development server   |
| `npm run build` | Create production build    |
| `npm start`     | Start production server    |
| `npm run lint`  | Run ESLint                 |
