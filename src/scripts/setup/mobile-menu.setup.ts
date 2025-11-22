// src/scripts/setup/mobile-menu.setup.ts

/**
 * @function setupMobileMenu
 * @description Inicializa el sistema de menú móvil.
 * Agrega 'click listeners' al botón toggle y a los enlaces del menú
 * para alternar la clase 'trigger' y gestionar la accesibilidad (A11y).
 * @returns {void}
 */
export function setupMobileMenu(): void {
	const toggle: HTMLElement | null = document.getElementById('menu-toggle');
	const menu: HTMLElement | null = document.getElementById('mobile-menu');

	if (!toggle || !menu) return;

	const toggleMenu = () => {
		menu.classList.toggle('trigger'); // Clase de estado

		// A11y:** Actualiza el estado del botón
		const isOpen: boolean = menu.classList.contains('trigger');
		toggle.setAttribute('aria-expanded', String(isOpen));
	};

	toggle.addEventListener('click', toggleMenu);

	menu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', toggleMenu);
	});
}
