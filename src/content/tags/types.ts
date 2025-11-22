// src/content/tags/types.ts

export interface AboutLang {
	title: string;
	description: string;
}

export interface ContactLang {
	title: string;
}

export interface ExperienceLang {
	title: string;
}

export interface FooterLang {
	title: string;
	description?: string;
}

export interface HeroLang {
	title: string;
	subtitle: string;
	description: string;
	more: string;
}

export interface NavbarLang {
	name: string;
	href: string;
}

export interface ServicesLang {
	title: string;
}

export interface ShowcaseLang {
	title: string;
	viewProject: string;
	viewRepository: string;
	noImage: string;
}
