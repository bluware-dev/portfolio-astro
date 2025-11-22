<div align="center">

# Blu Astro Portfolio Template

[🇦🇷 Versión en Español 🇪🇸](README.en.md)

**Professional Portfolio Template for Astro - Multilanguage, Theming & Modular Architecture**

_Principles: Clean Architecture, Performance-First, Strict TypeScript._

---

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5+-FF5D01?logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## 📌 Overview

Template focused on **Astro SSG**, with **decoupled architecture**, **multilanguage support without dependencies**, and **theming without FOUC** using Tailwind 4.1. Ideal for:

- Personal portfolios.
- Lightweight corporate sites.
- Users who want to clone and scale with TypeScript and Astro.

The project acts as a **boilerplate**: clean, typed, and extendable structure.

## ⚡ Main Features

- **Astro SSG + SEO:** Full metadata, JSON-LD, and OpenGraph support.
- **Multilanguage without libraries:** i18n-like system based on `LangMap`, `/es` and `/en` routes, and 100% decoupled content.
- **FOUC prevention:** Native dark/light theme system using `data-theme`.
- **Clean architecture:** Well-defined layers: `features`, `ui`, `content`, `scripts`, and `styles`.
- **Full typing:** Strict TypeScript for data, components, and scripts.
- **Tailwind 4.1:** Tokens, custom utilities, theme variants, and animations.

## 📁 Project Structure

```
src/
├── components/
│   ├── features/   # Full sections (Hero, About, Services, ...)
│   └── ui/         # Atomic components (Card, Button, Navbar)
├── content/        # Data and texts per language (100% TS)
│   ├── data/       # Profile, experience, showcase, services
│   └── tags/       # Multilanguage dictionaries
├── pages/          # SSG routing (/, /es, /en)
├── scripts/        # MobileMenu, ThemeSwitch, LangSwitch, Animations
└── styles/         # Tailwind, tokens, global animations
```

## 🧩 Architecture

### Minimal Clean Architecture

- **Atomic UI:** pure components.
- **Independent features:** each section encapsulates its design + props.
- **Decoupled content:** data and texts do not live in components.
- **Minimal client scripts:** no frameworks; just DOM + scalable utilities.

## 🌍 Multilanguage System (no dependencies)

- Typed dictionaries via `LangMap<T>`.
- Centralized control in `content/{data,tags}`.
- Extendable to dedicated routes: `/es`, `/en`, `/{lang}`.
- Clean props → UI fully isolated from language logic.

## 🎨 Tailwind 4.1 + Theming without FOUC

- Token system in `tokens.css`.
- Variants via `@theme light` / `@theme dark`.
- `data-theme` on `<html>` applied before render to avoid flicker.
- Global animations and custom utilities.

## 🛠️ Installation

```bash
git clone https://github.com/bluware-dev/portfolio-astro.git
cd portfolio-astro
pnpm install
pnpm dev
```

## 🚀 Deployment

Fully compatible with:

- **Vercel** (CI/CD).
- Netlify.

Includes sitemap, robots.txt, and full metadata.

## 🧪 Quality & Standards

- **Prettier:** consistent formatting with Astro + Tailwind plugins.
- **ESLint:** strict rules, import/order, strict TS, ignored args prefixed with `_`.
- **Documentation:** minimal JSDoc for consistency.

## 🧱 Extensibility

The architecture allows you to easily add:

- More languages
- GSAP/Motion
- Frameworks (e.g., React)
- ThreeJS (or R3F)
- New sections in `features`
- New themes in Tailwind
- API consumption

## 📄 License

This project is licensed under **[MIT](LICENSE)**.

---

Template ready to clone, extend, and deploy.
