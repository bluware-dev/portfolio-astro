// src/content/tags/Navbar.ts

import type { NavbarLang } from '@/content/tags/types.ts';
import type { LangMap } from '@/content/types.ts';

export const navbarLangMap: LangMap<NavbarLang[]> = {
	es: [
		{ name: 'Inicio', href: '#hero' },
		{ name: 'Sobre mí', href: '#about' },
		{ name: 'Servicios', href: '#services' },
		{ name: 'Experiencia', href: '#experience' },
		{ name: 'Mi Trabajo', href: '#showcase' },
		{ name: 'Contacto', href: '#contact' },
	],
	en: [
		{ name: 'Home', href: '#hero' },
		{ name: 'About', href: '#about' },
		{ name: 'Services', href: '#services' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Showcase', href: '#showcase' },
		{ name: 'Contact', href: '#contact' },
	],
};
