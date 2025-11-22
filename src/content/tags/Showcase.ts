// src/content/tags/Showcase.ts

import type { ShowcaseLang } from '@/content/tags/types.ts';
import type { LangMap } from '@/content/types.ts';

export const showcaseLangMap: LangMap<ShowcaseLang> = {
	es: {
		title: 'Mi Trabajo',
		viewProject: 'Ir al Proyecto',
		viewRepository: 'Ver Repositorio',
		noImage: 'Sin imagen disponible',
	},
	en: {
		title: 'Showcase',
		viewProject: 'Go to Project',
		viewRepository: 'View Repository',
		noImage: 'No image available',
	},
};
