# Age-Link — Rebuild Technical & Design Guide

> **Project:** Age-Link Specialist Clinic
> **Current site:** https://www.age-link.com/
> **Prepared by:** https://sklentr.com/
> **Scope:** Full rebuild from scratch using modern frontend technologies

---

## 1. Project Overview

### Purpose of the Website
- Professional medical website for **Age-Link Specialist Clinic**, a geriatric medicine practice led by **A/Prof Sitoh Yih Yiow** at Mount Elizabeth Novena Hospital, Singapore
- Replaces the current outdated WordPress/Genesis site with a modern, performant, conversion-focused experience
- Serves as the primary digital presence for patient acquisition, education, and trust-building

### Target Users
- **Older adults** — seeking specialist geriatric medical care
- **Families & caregivers** — researching care options for elderly loved ones, needing clear and empathetic guidance
- **Healthcare professionals** — looking for specialist geriatric input and collaborative care planning

### Main Goals of the Rebuild
- Modernize the tech stack from WordPress/Genesis to Next.js
- Improve page speed, SEO, and Core Web Vitals scores
- Create a mobile-first, accessible, and conversion-optimized experience
- Implement the updated content strategy from the content.pdf specification
- Build a scalable component-based architecture for long-term maintainability
- Establish a proper design system with consistent colors, typography, and spacing

---

## 2. Tech Stack

### Framework & Core
- **Next.js** (App Router) — server-side rendering, static generation, file-based routing, image optimization
- **React 18+** — component architecture with hooks
- **TypeScript** — type safety across all components and utilities

### Styling
- **Tailwind CSS** — utility-first styling for rapid layout and responsive design
- **SCSS with variables** — for complex component styles, theming tokens, and global mixins
- Tailwind handles layout/spacing/responsive; SCSS handles branded component internals and animation keyframes

### Libraries
- **Swiper.js** (https://swiperjs.com/) — touch-friendly carousels and sliders for services, testimonials, and image galleries
- **Fancybox** (https://fancyapps.com/fancybox/) — lightbox image gallery for clinic photos, doctor profile, and facility images
- **React Hook Form** — lightweight form handling with validation for the contact/enquiry form
- **Framer Motion** (optional) — subtle scroll-reveal animations and section transitions

### Font Family System
- **Heading font:** `"Playfair Display", Georgia, "Times New Roman", serif` — conveys medical authority, trust, and professionalism
- **Body font:** `"Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` — clean, highly legible at all sizes, optimized for screen reading
- **Monospace (if needed):** `"JetBrains Mono", "Fira Code", monospace`
- Load via `next/font/google` for zero layout shift and self-hosted optimization
- Fallback stack ensures consistent rendering before web fonts load

### Color Palette System
- Defined as both Tailwind `theme.extend.colors` and SCSS variables for cross-system consistency
- See **Section 5: Design System** for the full palette specification

---

## 3. Site Map & Page Structure

### Pages to Build

| Route | Page | Priority |
|---|---|---|
| `/` | Home | High |
| `/about` | About the Clinic | High |
| `/about/doctor` | About Our Doctor | High |
| `/about/why-geriatric-medicine` | Why Geriatric Medicine | Medium |
| `/services` | Services Overview | High |
| `/services/[slug]` | Individual Service (dynamic) | High |
| `/care/[slug]` | Care of the Older Person topics (dynamic) | Medium |
| `/publications` | Publications & Resources | Medium |
| `/contact` | Contact & Appointment | High |
| `/privacy-policy` | Privacy Policy | Low |
| `/terms-of-use` | Terms of Use | Low |

### Navigation Structure (Updated from content.pdf)

```
Home
About
  ├─ Our Clinic
  ├─ About Our Doctor
  └─ Why Geriatric Medicine?
Services
  ├─ Comprehensive Geriatric Assessment
  ├─ Memory & Cognitive Disorders
  ├─ Medication Review and Optimization
  ├─ Falls, Frailty & Mobility Issues
  ├─ Chronic Disease Management
  ├─ Geriatric Rehabilitation
  ├─ Caregiver Training
  └─ Home-based Care
Care of the Older Person
  ├─ Dementia
  ├─ Geriatric Syndromes
  ├─ Healthy Aging
  ├─ Nutritional Needs
  ├─ Osteoporosis
  └─ Successful Aging
Publications
Contact
```

---

## 4. UI Components to Build

### 4.1 Header & Navigation
- **Top bar:** emergency phone number (`+65 6535 8833`) with phone icon, email link
- **Main header:** logo (left), primary nav (center), "Book an Appointment" CTA button (right)
- **Sticky behavior:** header becomes fixed with a subtle shadow on scroll (`sticky top-0 z-50`)
- **Desktop nav:** horizontal links with dropdown menus; dropdowns use a clean grid layout (not deeply nested)
- **Mobile nav:** hamburger toggle opening a full-screen overlay with accordion-style sub-menus
- **Active state:** highlight current page in nav with an underline or color accent
- **Accessibility:** `aria-expanded`, `aria-haspopup`, keyboard navigation, focus trapping in mobile menu

### 4.2 Hero Section (Homepage)
- **Layout:** split — left side content, right side image (doctor profile or clinic photo)
- **Headline (H1):** "Geriatric Medical Care Focused on Healthy Aging"
- **Subheading:** "Specialist assessment and ongoing care for older adults, helping patients and families make confident medical decisions."
- **Primary CTA:** "Book an Appointment" — solid button, prominent
- **Secondary CTA:** "Call to Discuss Care" — outlined/ghost button with phone icon
- **Trust badges below CTAs:** hospital logo, "30+ Years Experience" badge, affiliation icons
- **Background:** subtle gradient or soft medical-themed image with overlay
- **Mobile:** stack vertically — image on top (responsive, not hidden), content below, CTAs full-width
- **Animation:** subtle fade-in on load for headline and CTAs

### 4.3 Value Propositions Section
- **Heading:** "Why Choose Age-Link"
- **Layout:** 4-column grid on desktop, 2-column on tablet, single-column on mobile
- **Cards:** icon + short title + one-line description
  - Specialist geriatric medical expertise
  - Comprehensive, whole-person assessments
  - Clear guidance for patients and families
  - Evidence-based, ethical medical care
- **Style:** clean cards with subtle border or shadow, icon in brand color

### 4.4 Who We Help Section
- **Layout:** 3-column card grid
- **Cards with icons for each audience:**
  - Older Adults — "Medical care designed for the complex health needs associated with aging."
  - Families & Caregivers — "Clear explanations and professional guidance to support informed decisions."
  - Healthcare Professionals — "Specialist geriatric input and collaborative care planning."
- **Hover state:** subtle lift effect on each card

### 4.5 Services Section
- **Heading:** "Our Core Services"
- **Layout:** card grid (2 or 3 columns) or **Swiper.js carousel** on mobile
- **Service cards:** icon + title + one-line description + "Learn More" link
  - Comprehensive Geriatric Assessment
  - Memory & Cognitive Disorders
  - Medication Review and Optimization
  - Falls, Frailty & Mobility Issues
  - Chronic Disease Management
- **CTA below:** "View All Services" button linking to `/services`
- **Swiper config:** `slidesPerView: 1` on mobile, `slidesPerView: 3` on desktop, `spaceBetween: 24`, pagination dots, touch-drag enabled

### 4.6 Doctor Profile / Authority Section
- **Heading:** "Experienced Specialist Care"
- **Layout:** two-column — photo left, content right
- **Photo:** professional portrait of A/Prof Sitoh Yih Yiow, rounded corners or soft mask
- **Content:** name, title, top 3–4 credentials, brief bio summary (2–3 sentences)
- **CTA:** "Meet the Specialist" button linking to `/about/doctor`
- **Credential badges:** small icons/pills for MBBS, MRCP, FRCP, MMed, LLM, Fellow AMG
- **Mobile:** stack photo above content

### 4.7 How It Works Section
- **Heading:** "How It Works"
- **Layout:** horizontal 4-step process with numbered circles and connector lines
- **Steps:**
  1. Initial consultation and assessment
  2. Review of medical history and medications
  3. Individualized care plan
  4. Follow-up and coordination of care
- **Style:** numbered circles in brand color, step title below, connector lines between
- **Mobile:** vertical timeline layout
- **Animation:** steps reveal sequentially on scroll

### 4.8 Image Gallery (Fancybox)
- **Purpose:** showcase clinic facility, consultation rooms, hospital environment
- **Layout:** masonry or responsive grid (3–4 columns desktop, 2 columns tablet, 1 column mobile)
- **Thumbnails:** click to open Fancybox lightbox with zoom, swipe navigation, and close button
- **Fancybox config:** `Carousel` type, `infinite: false`, `Thumbs` plugin enabled, keyboard navigation
- **Lazy loading:** all gallery images use `loading="lazy"` and Next.js `<Image>` with `placeholder="blur"`

### 4.9 Slider / Carousel (Swiper.js)
- **Use cases across the site:**
  - Services carousel on homepage
  - Testimonials slider (if testimonials are added)
  - Image carousel on inner pages
  - "Care of the Older Person" topic slider
- **Global Swiper config:**
  - `loop: false`
  - `grabCursor: true`
  - `pagination: { clickable: true }`
  - `navigation: true` on desktop, hidden on mobile
  - `breakpoints` for responsive slidesPerView
  - `a11y: { enabled: true }` for screen reader support

### 4.10 Final CTA / Conversion Section
- **Heading:** "Take the Next Step in Care"
- **Subtext:** "If you are concerned about your health or that of a loved one, we are here to help."
- **CTA:** "Book an Appointment" — large, centered, prominent button
- **Background:** brand color or soft gradient to visually separate from content above
- **Placement:** above the footer on every page as a persistent conversion prompt

### 4.11 Contact Form
- **Page:** `/contact`
- **Form fields (from current site + content.pdf):**
  - Name (text, required)
  - Email (email, required)
  - Phone (tel, optional)
  - Are you an existing patient? (radio: Yes / No, optional)
  - Message (textarea, required)
  - How did you hear about us? (select: Online Search, Family/Friend, Directory, Print Ad, Other — optional)
- **Validation:** client-side with React Hook Form, inline error messages
- **Submit:** POST to API route or email service (Resend, SendGrid, or Nodemailer)
- **Success state:** replace form with a confirmation message
- **Sidebar or below form:** clinic address, phone numbers, email, Google Maps embed
- **Accessibility:** proper `<label>` associations, `aria-required`, `aria-invalid`, focus management on errors

### 4.12 Footer
- **Layout:** 4-column grid on desktop, stacked on mobile
- **Column 1 — Brand:** logo, one-line clinic description, copyright
- **Column 2 — Quick Links:** About, Services, Publications, Contact
- **Column 3 — Contact Info:** address (Mount Elizabeth Novena Hospital), phone numbers, email
- **Column 4 — Legal & Extras:** Privacy Policy, Terms of Use, Sitemap
- **Bottom bar:** copyright line: "Copyright (c) 2026 Age-Link Specialist Clinic"
- **Style:** dark background (slate-900), white/gray text, teal accent for links

---

## 5. Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#00809f` | Buttons, links, active states, brand accent |
| `primary-dark` | `#006680` | Button hover, active nav, focus rings |
| `primary-light` | `#e6f4f8` | Light backgrounds, card tints, badge fills |
| `secondary` | `#1a3c50` | Headings, dark text, footer background |
| `accent` | `#f59e0b` | Warning highlights, attention badges, stars |
| `neutral-50` | `#f8fafc` | Page background, alternating sections |
| `neutral-100` | `#f1f5f9` | Card backgrounds, light dividers |
| `neutral-200` | `#e2e8f0` | Borders, separators |
| `neutral-500` | `#64748b` | Body text secondary, captions |
| `neutral-700` | `#334155` | Body text primary |
| `neutral-900` | `#0f172a` | Headings, footer background |
| `white` | `#ffffff` | Card surfaces, button text on dark |
| `success` | `#10b981` | Form success states |
| `error` | `#ef4444` | Form validation errors |

### Typography Scale

| Element | Font | Size (desktop) | Size (mobile) | Weight | Line Height |
|---|---|---|---|---|---|
| H1 | Playfair Display | 48px / 3rem | 32px / 2rem | 700 | 1.2 |
| H2 | Playfair Display | 36px / 2.25rem | 26px / 1.625rem | 700 | 1.25 |
| H3 | Playfair Display | 28px / 1.75rem | 22px / 1.375rem | 600 | 1.3 |
| H4 | Inter | 22px / 1.375rem | 18px / 1.125rem | 600 | 1.35 |
| Body | Inter | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| Body Large | Inter | 18px / 1.125rem | 16px / 1rem | 400 | 1.6 |
| Small / Caption | Inter | 14px / 0.875rem | 13px / 0.8125rem | 400 | 1.5 |
| Button | Inter | 16px / 1rem | 15px / 0.9375rem | 600 | 1 |

### Spacing & Layout Scale
- Base unit: **4px**
- Spacing tokens: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`
- Section padding: `py-16` (64px) desktop, `py-12` (48px) mobile
- Container max-width: `1280px` with `px-4` (16px) horizontal padding
- Card padding: `p-6` (24px) desktop, `p-4` (16px) mobile
- Grid gap: `gap-6` (24px) standard, `gap-8` (32px) large sections

### Border Radius
- Small (inputs, badges): `rounded` (4px)
- Medium (cards, buttons): `rounded-lg` (8px)
- Large (image containers): `rounded-xl` (12px)
- Full (avatars, icons): `rounded-full`

### Shadows
- Card: `shadow-sm` default, `shadow-md` on hover
- Header sticky: `shadow-md`
- Modal/lightbox overlay: `shadow-2xl`

### Button Styles & States

**Primary Button:**
- Default: `bg-primary text-white rounded-lg px-6 py-3 font-semibold`
- Hover: `bg-primary-dark` with subtle scale (`hover:scale-[1.02]`)
- Focus: `ring-2 ring-primary ring-offset-2`
- Disabled: `opacity-50 cursor-not-allowed`

**Secondary / Outline Button:**
- Default: `border-2 border-primary text-primary bg-transparent rounded-lg px-6 py-3 font-semibold`
- Hover: `bg-primary text-white`
- Focus: same ring as primary

**Ghost / Text Button:**
- Default: `text-primary underline-offset-4 hover:underline font-medium`

**Icon Button:**
- Default: `p-2 rounded-full hover:bg-neutral-100`
- Used for: phone icon, close buttons, mobile menu toggle

---

## 6. UX & Mobile Strategy

### Responsive Behavior
- **Breakpoints** (Tailwind defaults):
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- All sections fluid between breakpoints, no fixed-width jumps
- Images scale proportionally using `next/image` with responsive `sizes` attribute

### Mobile-First Layout
- All components designed for 320px minimum width first, then enhanced at larger breakpoints
- Hero: single column, stacked (image top, text below, full-width CTAs)
- Service cards: single column carousel (Swiper) on mobile, grid on desktop
- Doctor profile: photo above, content below on mobile
- How It Works: vertical timeline on mobile, horizontal on desktop
- Footer: single stacked column on mobile

### Navigation Usability
- Mobile: full-screen overlay menu with accordion sub-menus and smooth open/close transitions
- Sticky header on all devices — always accessible without scrolling up
- "Book an Appointment" button visible in header at all breakpoints
- Breadcrumbs on inner pages for wayfinding (especially service and care topic pages)
- Active page highlighted in navigation

### Touch-Friendly Elements
- All interactive targets minimum **44x44px** (WCAG 2.1 AA)
- Swiper carousels: native touch-drag with `grabCursor`, momentum scrolling
- Fancybox gallery: pinch-to-zoom, swipe to navigate
- Phone numbers wrapped in `tel:` links for tap-to-call
- Email wrapped in `mailto:` link
- Adequate spacing between adjacent tappable elements (minimum 8px gap)
- Sticky mobile bottom bar with "Call Now" and "Book Appointment" buttons (visible on scroll)

---

## 7. Performance & SEO

### Image Optimization
- Use Next.js `<Image>` component for all images — automatic WebP/AVIF, responsive `srcSet`, lazy loading
- Define explicit `width` and `height` to prevent layout shift (CLS)
- Use `placeholder="blur"` with blurDataURL for above-the-fold images
- Gallery thumbnails: serve at reduced resolution, Fancybox loads full-size on open
- Background images: use CSS with `image-set()` for format selection, or Next.js `<Image>` with `fill`

### Lazy Loading
- All below-the-fold images: `loading="lazy"` (native) via Next.js `<Image>`
- Hero image: `priority={true}` (no lazy loading — above the fold)
- Swiper and Fancybox: initialize only when their sections enter viewport (dynamic import or Intersection Observer)
- Defer non-critical JS: Google Analytics, Tag Manager loaded via `next/script` with `strategy="afterInteractive"` or `"lazyOnload"`

### Semantic HTML
- One `<h1>` per page (hero headline on homepage, page title on inner pages)
- Proper heading hierarchy: `h1 > h2 > h3` — no skipping levels
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` landmarks
- `<address>` for clinic contact details
- `<ul>` / `<ol>` for service lists and steps
- `<figure>` and `<figcaption>` for doctor profile image and gallery images
- `<form>` with proper `<fieldset>` and `<legend>` for contact form groups
- `<button>` for actions, `<a>` for navigation — never mix

### Meta Tags & SEO
- Dynamic `<title>` and `<meta name="description">` per page via Next.js `metadata` export
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`) for social sharing
- Twitter Card meta tags
- Canonical URLs on all pages
- Structured data (JSON-LD) for:
  - `MedicalClinic` (organization, address, phone, hours)
  - `Physician` (doctor name, credentials, affiliation)
  - `MedicalCondition` (on care topic pages)
  - `BreadcrumbList` (on all inner pages)
  - `WebSite` with `SearchAction` (if search is implemented)
- XML sitemap generated by Next.js (`next-sitemap` package)
- `robots.txt` with sitemap reference

### Accessibility (WCAG 2.1 AA Target)
- All images: descriptive `alt` text (not just "image" — e.g., "Dr Sitoh Yih Yiow, Consultant Geriatrician")
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text — verified against palette
- Skip links: "Skip to main content" and "Skip to footer" at the top of every page
- ARIA attributes:
  - `aria-expanded` on dropdown toggles and accordion items
  - `aria-haspopup="menu"` on nav dropdowns
  - `aria-current="page"` on active nav link
  - `aria-label` on icon-only buttons (hamburger, close, phone)
  - `aria-live="polite"` on form success/error messages
  - `role="navigation"` with `aria-label` distinguishing primary/footer nav
- Focus management: visible focus rings on all interactive elements, logical tab order
- Reduced motion: respect `prefers-reduced-motion` — disable animations for users who opt out
- Form errors: associated with fields via `aria-describedby`, announced to screen readers

---

## 8. Conversion Optimization

### CTA Placement Strategy
- **Header:** persistent "Book an Appointment" button in navigation bar (all pages, all devices)
- **Hero section:** primary CTA "Book an Appointment" + secondary "Call to Discuss Care"
- **Services section:** "View All Services" after the card grid
- **Doctor profile section:** "Meet the Specialist"
- **Each service card:** "Learn More" link
- **Final CTA section:** "Take the Next Step in Care" with "Book an Appointment" — placed above footer on every page
- **Mobile sticky bar:** fixed bottom bar with "Call Now" (tel: link) and "Book" buttons
- **Rule:** no page should require more than one scroll to reach a CTA

### Contact Form Strategy
- Homepage: final CTA section links to `/contact` — clear single path
- Contact page: form as the primary focus, contact details in sidebar
- Form fields kept minimal (5 fields + 2 optional) — reduces abandonment
- Inline validation: errors appear as the user leaves a field, not only on submit
- Success confirmation: clear message with expected response time
- Fallback: phone numbers and email displayed prominently alongside the form
- Consider: floating WhatsApp button (widely used in Singapore) for instant contact

### Trust Elements
- **Doctor credentials:** displayed on homepage (summary) and dedicated profile page (full)
- **Hospital affiliation:** Mount Elizabeth Novena Hospital logo and name in hero trust badges
- **Professional memberships:** Academy of Medicine, Royal College of Physicians, etc. displayed as icon strip
- **Teaching awards:** Outstanding Tutor Award, Dean's Award for Excellence in Teaching
- **Experience indicators:** "30+ Years of Clinical Experience" badge
- **How It Works section:** transparent 4-step process reduces uncertainty
- **Professional email:** recommend upgrading to `enquiry@age-link.com` (currently Gmail)

---

## 9. Folder & Component Structure

```
age-link/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (header, footer, fonts, metadata)
│   ├── page.tsx                  # Homepage
│   ├── about/
│   │   ├── page.tsx              # About the clinic
│   │   ├── doctor/
│   │   │   └── page.tsx          # About our doctor
│   │   └── why-geriatric-medicine/
│   │       └── page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   └── [slug]/
│   │       └── page.tsx          # Individual service (dynamic)
│   ├── care/
│   │   └── [slug]/
│   │       └── page.tsx          # Care topics (dynamic)
│   ├── publications/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── terms-of-use/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts          # Contact form API endpoint
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header with nav
│   │   ├── MobileMenu.tsx        # Full-screen mobile nav overlay
│   │   ├── Footer.tsx            # 4-column footer
│   │   ├── Breadcrumbs.tsx       # Breadcrumb navigation
│   │   └── StickyMobileCTA.tsx   # Fixed bottom bar (mobile)
│   │
│   ├── sections/
│   │   ├── Hero.tsx              # Homepage hero
│   │   ├── ValueProps.tsx        # Why Choose Age-Link (4 cards)
│   │   ├── WhoWeHelp.tsx         # 3 audience cards
│   │   ├── ServicesOverview.tsx   # Service cards with Swiper
│   │   ├── DoctorProfile.tsx     # Authority & trust section
│   │   ├── HowItWorks.tsx        # 4-step process
│   │   ├── ImageGallery.tsx      # Fancybox gallery grid
│   │   ├── FinalCTA.tsx          # "Take the Next Step" section
│   │   └── ContactSection.tsx    # Contact form + details
│   │
│   ├── ui/
│   │   ├── Button.tsx            # Primary, secondary, ghost, icon variants
│   │   ├── Card.tsx              # Reusable card wrapper
│   │   ├── Badge.tsx             # Credential/trust badges
│   │   ├── SectionHeading.tsx    # H2 + optional subtitle
│   │   ├── ServiceCard.tsx       # Icon + title + description + link
│   │   ├── StepCard.tsx          # Numbered step for How It Works
│   │   ├── AudienceCard.tsx      # Who We Help card
│   │   ├── Input.tsx             # Form input with label and error
│   │   ├── Select.tsx            # Form select dropdown
│   │   ├── Textarea.tsx          # Form textarea
│   │   ├── RadioGroup.tsx        # Form radio buttons
│   │   └── Container.tsx         # Max-width wrapper with padding
│   │
│   └── shared/
│       ├── Logo.tsx              # SVG logo component
│       ├── PhoneLink.tsx         # tel: link with icon
│       ├── EmailLink.tsx         # mailto: link with icon
│       ├── SkipLinks.tsx         # Accessibility skip navigation
│       └── SchemaMarkup.tsx      # JSON-LD structured data
│
├── styles/
│   ├── globals.scss              # Global resets, base styles, font-face
│   ├── _variables.scss           # Color tokens, spacing, breakpoints, typography
│   ├── _mixins.scss              # Responsive mixins, typography mixins, flex/grid helpers
│   ├── _animations.scss          # Keyframes for fade-in, slide-up, scale
│   ├── components/
│   │   ├── _header.scss          # Header-specific styles
│   │   ├── _hero.scss            # Hero section styles
│   │   ├── _gallery.scss         # Fancybox overrides and gallery grid
│   │   ├── _swiper.scss          # Swiper custom pagination and navigation styles
│   │   └── _forms.scss           # Contact form custom styles
│   └── tailwind.css              # Tailwind directives (@tailwind base, components, utilities)
│
├── assets/
│   ├── images/
│   │   ├── logo.svg              # Primary logo
│   │   ├── logo-footer.svg       # Footer logo variant (white/light)
│   │   ├── hero-bg.jpg           # Hero background image
│   │   ├── doctor-profile.jpg    # Doctor portrait
│   │   ├── clinic/               # Facility photos (gallery)
│   │   │   ├── clinic-01.jpg
│   │   │   ├── clinic-02.jpg
│   │   │   └── ...
│   │   └── services/             # Service-related images
│   │       ├── geriatric-assessment.jpg
│   │       ├── memory-disorders.jpg
│   │       └── ...
│   └── icons/
│       ├── services/             # Service icons (SVG)
│       │   ├── assessment.svg
│       │   ├── memory.svg
│       │   ├── medication.svg
│       │   ├── falls.svg
│       │   └── chronic.svg
│       └── ui/                   # UI icons (SVG)
│           ├── phone.svg
│           ├── email.svg
│           ├── location.svg
│           ├── arrow-right.svg
│           ├── chevron-down.svg
│           ├── menu.svg
│           └── close.svg
│
├── data/
│   ├── services.ts               # Services array (title, slug, description, icon)
│   ├── careTopics.ts             # Care topics array (title, slug, description)
│   ├── doctor.ts                 # Doctor credentials, bio, memberships
│   ├── navigation.ts             # Nav menu structure
│   └── siteConfig.ts             # Site-wide config (name, address, phones, email, social)
│
├── lib/
│   ├── utils.ts                  # Utility functions (cn classnames helper, etc.)
│   └── schemas.ts                # Zod schemas for form validation
│
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # Default Open Graph image
│   └── robots.txt
│
├── tailwind.config.ts            # Tailwind config with custom colors, fonts, spacing
├── tsconfig.json
├── next.config.js
├── package.json
└── postcss.config.js
```

### SCSS Variables Reference (`_variables.scss`)

```scss
// Colors
$color-primary: #00809f;
$color-primary-dark: #006680;
$color-primary-light: #e6f4f8;
$color-secondary: #1a3c50;
$color-accent: #f59e0b;
$color-neutral-50: #f8fafc;
$color-neutral-100: #f1f5f9;
$color-neutral-200: #e2e8f0;
$color-neutral-500: #64748b;
$color-neutral-700: #334155;
$color-neutral-900: #0f172a;
$color-white: #ffffff;
$color-success: #10b981;
$color-error: #ef4444;

// Typography
$font-heading: "Playfair Display", Georgia, "Times New Roman", serif;
$font-body: "Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

// Spacing
$spacing-base: 4px;
$section-padding-desktop: 64px;
$section-padding-mobile: 48px;
$container-max-width: 1280px;
$container-padding: 16px;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;

// Border Radius
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 12px;

// Shadows
$shadow-card: 0 1px 3px rgba(0, 0, 0, 0.1);
$shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.1);
$shadow-header: 0 2px 8px rgba(0, 0, 0, 0.08);
```

---

## 10. Content Integration Notes

### From content.pdf Specification
- All homepage section headings, copy, and CTAs follow the content.pdf document prepared by Sklentr
- Individual service pages use the **Service Page Template** (Section 4 of content.pdf): Overview, Who This Service Is For, What the Assessment Includes, Expected Outcomes, CTA
- About page uses the philosophy, clinical experience, and differentiators from content.pdf Section 2
- Contact page uses the simplified form structure and messaging from content.pdf Section 6
- Footer links: About, Services, Publications, Contact, Privacy Policy

### Content NOT to Rewrite
- Doctor biography and credentials are factual — maintain accuracy from the original site
- Medical terminology on inner care topic pages should remain precise
- Clinic address, phone numbers, and hospital affiliation are fixed data

---
