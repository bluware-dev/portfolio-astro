// src/scripts/setup/animation.setup.ts

import { useElementObserver } from '@/scripts/lib/useElementObserver';

/**
 * @fileoverview Configura un Intersection Observer para disparar animaciones
 * cuando los elementos entran en el viewport.
 */

/**
 * @function triggerLanding
 * @description Inicializa la lógica de animaciones para todos los elementos
 * marcados con el atributo `[data-animate="landing"]`.
 * Cada elemento es observado de forma individual; la animación se dispara
 * al entrar en el viewport y el observador se desconecta inmediatamente (one-shot).
 *
 * @param {boolean} [skipAnimation=false] Si es true, añade la clase 'trigger'
 * directamente sin usar el observador,
 * útil para restaurar el estado en navegaciones.
 * @returns {void}
 */
export function triggerLanding(skipAnimation: boolean = false): void {
	const landingElements: NodeListOf<HTMLElement> = document.querySelectorAll(
		'[data-animate="landing"]'
	);
	if (skipAnimation)
		landingElements.forEach((element) => {
			element.removeAttribute('data-animate');
			element.classList.add('trigger');
		});
	if (landingElements.length === 0) {
		// Salir si no hay elementos que animar
		return;
	}

	landingElements.forEach((element: HTMLElement) => {
		let cleanup: (() => void) | null = null;

		// Inicializar un observador ÚNICO para cada elemento
		cleanup = useElementObserver(
			element,
			(isObserved: boolean) => {
				if (isObserved) {
					// Añadir la clase que dispara la animación
					element.classList.add('trigger');

					// DESCONECTAR: one-shot execution
					if (cleanup) {
						cleanup();
					}
				}
				// else {} // Si la animación fuera reversible
			},
			0.1, // Threshold
			10 // Para centro de pantalla, usar: 0.5, -50
		);
	});
}
