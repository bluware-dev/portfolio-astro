// src/scripts/setup/theme-switch.setup.ts

/**
 * @function setupThemeSwitch
 * @description Inicializa el 'click listener' para el botón de cambio de tema.
 * Alterna el atributo 'data-theme' en el elemento <html> entre 'dark' y 'default',
 * y asegura la persistencia del tema seleccionado en localStorage.
 * @returns {void}
 */
export function setupThemeSwitch(): void {
	const html = document.documentElement;
	const btn = document.getElementById('theme-switch') as HTMLElement | null;

	btn?.addEventListener('click', () => {
		const current = html.getAttribute('data-theme') || 'default';
		const next = current === 'dark' ? 'default' : 'dark';
		localStorage.setItem('theme', next);
		html.setAttribute('data-theme', next);
	});
}
