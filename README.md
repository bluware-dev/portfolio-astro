<div align="center">

# Blu Astro Portfolio Template

[🇺🇸 English Version 🇬🇧](README.en.md)

**Plantilla Profesional para Portfolios en Astro - Multilenguaje, Theming y Arquitectura Modular**

_Principios: Clean Architecture, Performance-First, TypeScript Estricto._

---

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5+-FF5D01?logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## 📌 Visión General

Plantilla enfocada en **Astro SSG**, con arquitectura **desacoplada**, soporte **multilenguaje sin dependencias** y **theming sin FOUC** usando Tailwind 4.1. Es ideal para:

- Portfolios personales.
- Sitios corporativos ligeros.
- Usuarios que quieran clonar y escalar con TypeScript y Astro.

El proyecto actúa como **boilerplate**: estructura limpia, tipada y extendible.

## ⚡ Características Principales

- **Astro SSG + SEO:** Metadatos completos, JSON-LD y soporte para OpenGraph.
- **Multilenguaje sin librerías:** Sistema tipo i18n basado en `LangMap`, rutas `/es` y `/en` y contenido 100% desacoplado.
- **Prevención de FOUC:** Sistema nativo para tema oscuro/claro usando `data-theme`.
- **Arquitectura limpia:** Capas bien definidas: `features`, `ui`, `content`, `scripts` y `styles`.
- **Tipado total:** TypeScript estricto para datos, componentes y scripts.
- **Tailwind 4.1:** Tokens, utilidades personalizadas, variantes de tema y animaciones.

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── features/   # Secciones completas (Hero, About, Services, ...)
│   └── ui/         # Componentes atómicos (Card, Button, Navbar)
├── content/        # Datos y textos por idioma (100% TS)
│   ├── data/       # Perfil, experiencia, showcase, servicios
│   └── tags/       # Diccionarios multilenguaje
├── pages/          # Enrutamiento SSG (/, /es, /en)
├── scripts/        # MobileMenu, ThemeSwitch, LangSwitch, Animaciones
└── styles/         # Tailwind, tokens, animaciones globales
```

## 🧩 Arquitectura

### Clean Architecture Minimal

- **UI atómica:** componentes puros.
- **Features independientes:** cada sección encapsula su diseño + props.
- **Content desacoplado:** datos y textos no viven en componentes.
- **Scripts de cliente minimalistas:** sin frameworks;
  solo DOM + utilidades escalables.

## 🌍 Sistema Multilenguaje (sin dependencias)

- Diccionarios tipados vía `LangMap<T>`.
- Control centralizado en `content/{data,tags}`.
- Extendible a rutas dedicadas: `/es`, `/en`, `/{lang}`.
- Props limpias → UI completamente aislada de lógica de idioma.

## 🎨 Tailwind 4.1 + Theming sin FOUC

- Sistema de tokens en `tokens.css`.
- Variantes via `@theme light` / `@theme dark`.
- `data-theme` en `<html>` aplicado antes del render para evitar parpadeos.
- Animaciones globales y utilidades personalizadas.

## 🛠️ Instalación

```bash
git clone https://github.com/bluware-dev/portfolio-astro.git
cd portfolio-astro
pnpm install
pnpm dev
```

## 🚀 Despliegue

Totalmente compatible con:

- **Vercel** (CI/CD).
- Netlify.

Incluye sitemap, robots.txt y metadatos completos.

## 🧪 Calidad y Estándares

- **Prettier:** formateo consistente con plugins Astro + Tailwind.
- **ESLint:** reglas estrictas, import/order, TS estricto, argumentos ignorados con prefijo `_`.
- **Documentación:** JSDoc minimal para mantener consistencia.

## 🧱 Extensibilidad

La arquitectura permite agregar fácilmente:

- Más idiomas
- GSAP/Motion
- Frameworks (Ej: React)
- ThreeJS (o R3F)
- Nuevas secciones en `features`
- Nuevos temas en Tailwind
- Consumo de APIs

## 📄 Licencia

Este proyecto está bajo licencia **[MIT](LICENSE)**.

---

Plantilla lista para clonar, extender y desplegar.
