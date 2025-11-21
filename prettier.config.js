export default {
	// Astro Config
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '**/*.astro',
			options: {
				parser: 'astro',
			},
		},
	],

	// Prettier Config
	trailingComma: 'es5',
	singleQuote: true,
	useTabs: true,
	tabWidth: 4,
	semi: true,
};
