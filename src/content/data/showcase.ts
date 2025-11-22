// src/content/data/showcase.ts

import type { ShowcaseItem } from '@/content/data/types.ts';
import type { LangMap } from '@/content/types.ts';

export const showcaseDataLangMap: LangMap<ShowcaseItem[]> = {
	es: [
		{
			title: 'Frontend - Portfolio React',
			about: 'Portfolio Personal: Exploración de interfaces web modernas, experimentación con React, Tailwind y arquitecturas modulares.',
			image: 'https://bluware.vercel.app/images/portfolio.webp',
			projectUrl: 'https://bluware.vercel.app',
			repositoryUrl: 'https://github.com/bluware-dev/portfolio',
		},
		{
			title: 'Frontend - Portfolio Astro',
			about: 'Portfolio Extra: Plantilla Profesional para Portfolios en Astro - Multilenguaje, Theming y Arquitectura Modular.',
			image: 'portfolio-astro.webm',
			projectUrl: 'https://bluware-astro.vercel.app',
			repositoryUrl: 'https://github.com/bluware-dev/portfolio-astro',
		},
		{
			title: 'CLI - FakeStore API',
			about: 'CLI minimalista para el consumo de la API FakeStore desarrollado con NodeJS',
			image: 'project-fakestore-cli.webp',
			repositoryUrl: 'https://github.com/bluware-dev/fakestore-cli',
		},
		{
			title: 'CLI - Minimal Notes',
			about: 'Typer CLI inteligente para gestión de notas con SQLite3 y procesamiento con la API de Gemini AI',
			image: 'https://raw.githubusercontent.com/uCoders-Devs/minimal-notes/refs/heads/main/docs/MNCTL_CLI.png',
			repositoryUrl: 'https://github.com/uCoders-Devs/minimal-notes',
		},
	],

	en: [
		{
			title: 'Frontend - React Portfolio',
			about: 'Personal Portfolio: exploring modern web interfaces, experimenting with React, Tailwind, and modular architectures.',
			image: 'https://bluware.vercel.app/images/portfolio.webp',
			projectUrl: 'https://bluware.vercel.app',
			repositoryUrl: 'https://github.com/bluware-dev/portfolio',
		},
		{
			title: 'Frontend - Astro Portfolio',
			about: 'Extra Portfolio: Professional template for portfolios in Astro - Multilanguage, Theming, and Modular Architecture.',
			image: 'portfolio-astro.webm',
			projectUrl: 'https://bluware-astro.vercel.app',
			repositoryUrl: 'https://github.com/bluware-dev/portfolio-astro',
		},
		{
			title: 'CLI - FakeStore API',
			about: 'Minimalist CLI for consuming the FakeStore API developed with NodeJS',
			image: 'project-fakestore-cli.webp',
			repositoryUrl: 'https://github.com/bluware-dev/fakestore-cli',
		},
		{
			title: 'CLI - Minimal Notes',
			about: 'Smart Typer CLI for note management with SQLite3 and processing with the Gemini AI API',
			image: 'https://raw.githubusercontent.com/uCoders-Devs/minimal-notes/refs/heads/main/docs/MNCTL_CLI.png',
			repositoryUrl: 'https://github.com/uCoders-Devs/minimal-notes',
		},
	],
};
