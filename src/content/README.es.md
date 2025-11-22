# Añadir múltiples idiomas

> Esta convención minimalista permite incorporar soporte multilenguaje de forma modular y escalable. Es adecuada cuando el proyecto requiere más de tres o cuatro idiomas, o cuando el contenido incluye párrafos extensos que deben mantenerse organizados y desacoplados.

Organiza el contenido multilenguaje bajo `src/content/` creando una carpeta por idioma:

```sh

src/content/es/ # Opcional → Puedes usar directamente src/content/{data, tags, ...} para el idioma por defecto
src/content/en/
src/content/fr/

```

Cada idioma debe replicar la misma estructura interna:

```sh

src/content/<lang>/data/
src/content/<lang>/tags/
...

```

Con la estructura definida, importa los diccionarios necesarios en:

- `src/pages/index.astro` (idioma por defecto)
- `src/pages/<lang>/index.astro` (resto de idiomas)

Pasa los textos a los componentes mediante **Props**, manteniendo el árbol de componentes limpio y desacoplado.
Define **interfaces TypeScript** para tipar los diccionarios y garantizar consistencia en todas las páginas y componentes.
