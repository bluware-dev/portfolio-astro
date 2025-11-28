// src/content/data/profile.ts

import type { Profile, SocialItem } from '@/content/data/types.ts';
import type { LangMap } from '@/content/types.ts';

export const profileDataLangMap: LangMap<Profile> = {
	es: {
		name: 'Elian (Blu) Jofré',
		role: 'Desarrollador de Software',
		location: 'Buenos Aires, Argentina',
		description:
			'Especializado en backend, automatización y despliegue eficiente de servicios web.',
		about: 'Apasionado por la optimización de procesos y la calidad del código. Combino modularidad, eficiencia y buenas prácticas de ingeniería para entregar soluciones escalables y mantenibles. Manejo Python, JavaScript y entornos Linux con destreza.',
		website: 'https://bluware-astro.vercel.app',
	},
	en: {
		name: 'Elian (Blu) Jofré',
		role: 'Software Developer',
		location: 'Buenos Aires, Argentina',
		description:
			'Specialized in backend, automation, and efficient web service deployment.',
		about: 'Passionate about optimizing processes and delivering high-quality code. I combine modularity, efficiency, and engineering best practices to build scalable and maintainable solutions. Skilled in Python, JavaScript, and Linux environments.',
		website: 'https://bluware-astro.vercel.app/en',
	},
};

export const socials: SocialItem[] = [
	{
		platform: 'GitHub',
		label: 'github.com/bluware-dev',
		url: 'https://github.com/bluware-dev',
	},
	{
		platform: 'LinkedIn',
		label: 'linkedin.com/in/bluware',
		url: 'https://www.linkedin.com/in/bluware/',
	},
	{
		platform: 'Instagram',
		label: '@bluware.dev',
		url: 'https://instagram.com/bluware.dev',
	},
	{
		platform: 'Email',
		label: 'bluware.contact@gmail.com',
		url: 'mailto:bluware.contact@gmail.com',
	},
];
