// src/content/tags/Hero.ts

import { profileDataLangMap } from '../data/profile.ts';

import type { HeroLang } from '@/content/tags/types.ts';
import type { LangMap } from '@/content/types.ts';

export const heroLangMap: LangMap<HeroLang> = {
	es: {
		title: `Hola, soy <br class=sm:hidden /> ${profileDataLangMap.es.name}`,
		subtitle: profileDataLangMap.es.role,
		description: profileDataLangMap.es.description,
		more: 'Ver más',
	},
	en: {
		title: `Hi, I’m <br class=sm:hidden /> ${profileDataLangMap.en.name}`,
		subtitle: profileDataLangMap.en.role,
		description: profileDataLangMap.en.description,
		more: 'See more',
	},
};
