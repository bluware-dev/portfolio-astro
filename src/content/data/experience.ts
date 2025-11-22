// src/content/data/experience.ts

import type { ExperienceItem } from '@/content/data/types.ts';
import type { LangMap } from '@/content/types.ts';

export const experienceDataLangMap: LangMap<ExperienceItem[]> = {
	es: [
		{
			title: 'Frontend Minimalista',
			description:
				'Desarrollos con Vite, React, Tailwind, GSAP y Astro; priorizando escalabilidad y rendimiento.',
		},
		{
			title: 'Backend Node',
			description:
				'Desarrollo de servicios API REST con Node y ExpressJS.',
		},
		{
			title: 'DevOps & CI/CD',
			description:
				'Despliegues óptimos de Containers/Virtualización Linux con Docker/Podman y QEMU/VirtManager, implementación de pipelines CI/CD vía GitHub Actions.',
		},
	],

	en: [
		{
			title: 'Minimalist Frontend',
			description:
				'Development with Vite, React, Tailwind, GSAP, and Astro; prioritizing scalability and performance.',
		},
		{
			title: 'Node Backend',
			description: 'REST API development using Node and ExpressJS.',
		},
		{
			title: 'DevOps & CI/CD',
			description:
				'Optimized Linux container/virtualization deployments with Docker/Podman and QEMU/VirtManager, plus CI/CD pipelines via GitHub Actions.',
		},
	],
};
