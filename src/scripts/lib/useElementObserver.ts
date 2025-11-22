// src/scripts/lib/useElementObserver.ts

type ElementObserverCallback = (isObserved: boolean) => void;

/**
 * @function useElementObserver
 * @description Observa un elemento y llama a un callback cuando intersecta el viewport,
 * permitiendo configurar un área de detección específica utilizando la API Intersection Observer.
 *
 * @param {string | HTMLElement} target El elemento (Nodo DOM) o selector CSS a observar (ej: '#hero').
 * @param {ElementObserverCallback} callback Función a ejecutar (true si interseca, false si sale).
 * @param {number} [threshold=0.25] Porcentaje (0 a 1) del elemento visible para disparar la intersección.
 * @param {number} [rootMarginBottomPct=-25] Porcentaje (%) del viewport a excluir desde abajo.
 * Define la zona activa de detección vertical. Un valor negativo estrecha el área de observación.
 * @returns {() => void} Función de limpieza para dejar de observar y desconectar el Intersection Observer.
 */
export function useElementObserver(
	target: string | HTMLElement,
	callback: ElementObserverCallback,
	threshold: number = 0.25,
	rootMarginBottomPct: number = -25
): () => void {
	// 1. Determinar si 'element' es una cadena (selector) o un nodo DOM
	const element =
		typeof target === 'string'
			? (document.querySelector(target) as HTMLElement | null) // Si es cadena, busca el primer elemento.
			: target; // Si es nodo, úsalo directamente.

	if (!element) {
		return () => {}; // Devolver una función vacía para evitar errores de llamada.
	}

	// Calcula el margen inferior si es necesario
	const bottomMargin =
		rootMarginBottomPct !== 0 ? `${rootMarginBottomPct}%` : '0px';

	const options = {
		root: null, // Observa el viewport
		// Top (0px), Right (0px), Bottom (variable), Left (0px).
		rootMargin: `0px 0px ${bottomMargin} 0px`,
		threshold: threshold,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			// El callback se llama con el estado de intersección.
			callback(entry.isIntersecting);
		});
	}, options);

	observer.observe(element);

	// Función de limpieza
	return () => observer.unobserve(element);
}
