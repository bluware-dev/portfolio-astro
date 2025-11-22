// src/content/tags/Footer.ts

import { profileDataLangMap } from '@/content/data/profile.ts';
import type { FooterLang } from '@/content/tags/types.ts';
import type { LangMap } from '@/content/types.ts';

const year: number = new Date().getFullYear();
const LICENSE_URL: string =
	'https://github.com/bluware-dev/portfolio-astro/tree/main?tab=MIT-1-ov-file';

export const FooterLangMap: LangMap<FooterLang> = {
	es: {
		title: profileDataLangMap.es.name,
		description: `<a href="${LICENSE_URL}" target="_blank">© LICENCIA MIT - ${year}<a/>`,
	},
	en: {
		title: profileDataLangMap.en.name,
		description: `<a href="${LICENSE_URL}" target="_blank">© MIT LICENSE - ${year}<a/>`,
	},
};
