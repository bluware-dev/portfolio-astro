// src/content/data/services.ts

import type { ServiceItem } from '@/content/data/types.ts';
import type { LangMap } from '@/content/types.ts';

export const servicesDataLangMap: LangMap<ServiceItem[]> = {
	es: [
		{
			title: 'Desarrollo Frontend',
			description:
				'Sitios minimalistas de alto rendimiento con Astro y/o React, Tailwind moderno y animaciones profesionales con GSAP',
		},
		{
			title: 'Desarrollo Backend',
			description:
				'APIs ligeras, seguras y escalables con Node y ExpressJS.',
		},
		{
			title: 'Automatización',
			description:
				'Integraciones de procesos en sistemas Linux y pipelines de productividad.',
		},
	],
	en: [
		{
			title: 'Frontend Development',
			description:
				'High-performance minimalist websites built with Astro and/or React, modern Tailwind, and professional animations using GSAP.',
		},
		{
			title: 'Backend Development',
			description:
				'Lightweight, secure, and scalable APIs built with Node and ExpressJS.',
		},
		{
			title: 'Automation',
			description:
				'Process integrations in Linux systems and productivity pipelines.',
		},
	],
};
