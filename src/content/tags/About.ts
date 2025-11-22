// src/content/tags/About.ts

import { profileDataLangMap } from '@/content/data/profile.ts';
import type { AboutLang } from '@/content/tags/types.ts';
import type { LangMap } from '@/content/types.ts';

export const aboutLangMap: LangMap<AboutLang> = {
	es: {
		title: 'Sobre Mí',
		description: profileDataLangMap.es.about,
	},
	en: {
		title: 'About Me',
		description: profileDataLangMap.en.about,
	},
};
