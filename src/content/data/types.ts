// src/content/data/types.ts

export interface Profile {
	name: string;
	role: string;
	location: string;
	description: string;
	about: string;
	website: string;
}

export interface SocialItem {
	platform: string;
	label: string;
	url: string;
}

export interface ShowcaseItem {
	title: string;
	about?: string;
	image?: string;
	projectUrl?: string;
	repositoryUrl?: string;
}

export interface ServiceItem {
	title: string;
	description: string;
}

export interface ExperienceItem {
	title: string;
	description: string;
}
