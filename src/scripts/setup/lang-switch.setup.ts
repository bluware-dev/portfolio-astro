// src/scripts/setup/switch-lang.setup.ts

/**
 * @function getNewLangPath
 * @description Lógica central: Determina la nueva ruta de idioma, alternando /en <-> /es.
 * Es una función pura, fácil de probar y sin dependencias del DOM.
 * @param {string} currentPath La ruta actual (ej: '/es').
 * @returns {string} La nueva ruta de idioma (ej: '/en' o '/en').
 */
function getNewLangPath(currentPath: string): string {
	// Usamos includes para manejar rutas con más segmentos (ej. /es/page/)
	if (currentPath.includes('/en')) {
		return currentPath.replace('/en', '/es');
	} else if (currentPath.includes('/es')) {
		return currentPath.replace('/es', '/en');
	}

	// Fallback: Si no tiene idioma (ej. / o /page), va hacia /en por defecto
	const separator = currentPath.endsWith('/') ? '' : '/';
	return `${currentPath}${separator}en`;
}

/**
 * @function runRedirectAnimationUX
 * @description Lógica UX: Aplica las clases CSS a elementos clave (overlay, navbar, hero)
 * para iniciar la animación de salida antes de la redirección.
 * Asume que el CSS maneja las transiciones (ej. durante 1000ms).
 * @returns {void}
 */
function runRedirectAnimationUX(): void {
	const overlay = document.getElementById('overlay');
	const navbar = document.getElementById('navbar');
	const hero = document.getElementById('hero');

	// Añade la clase para la animación de salida (ej. bounce-redirect)
	hero?.classList.add('bounce-redirect');
	// Asegura que el menú de hamburguesa esté cerrado (si aplica)
	navbar?.classList.remove('trigger');
	overlay?.classList.remove('trigger');
}

/**
 * @function setupLangSwitch
 * @description Función Principal de Setup: Configura el listener de eventos para el botón de cambio de idioma.
 * Coordina el scroll, la animación de salida y la redirección final.
 * @returns {void}
 */
export function setupLangSwitch(): void {
	const btn = document.getElementById('switch-lang');

	btn?.addEventListener('click', () => {
		// 1. Manejar el scroll instantáneo antes de la redirección
		const delay: { scroll: number; redirect: number } = {
			scroll: window.scrollY !== 0 ? 250 : 0,
			redirect: 1000,
		};
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

		// 2. Ejecutar la secuencia principal después del posible delay de scroll
		setTimeout(() => {
			const currentPath = window.location.pathname;

			// Iniciar la animación
			runRedirectAnimationUX();

			// Esperar a que la animación termine (1000ms) antes de redirigir
			setTimeout(() => {
				const newPath = getNewLangPath(currentPath);
				// Reemplaza la URL actual para evitar que la página anterior
				// quede en el historial de navegación (buena práctica).
				window.location.replace(newPath);
			}, delay.redirect);
		}, delay.scroll);
	});
}
