# Adding Multiple Languages

> This minimalist convention provides a modular and scalable way to add multilingual support. It is suitable when a project requires more than three or four languages, or when the content includes long paragraphs that must remain organized and decoupled.

Organize multilingual content under `src/content/` by creating one folder per language:

```sh

src/content/en/  # Optional → You can use src/content/{data, tags, ...} as the default language
src/content/es/
src/content/fr/

```

Each language must replicate the same internal structure:

```sh

src/content/<lang>/data/
src/content/<lang>/tags/
...

```

With the structure defined, import the required dictionaries in:

- `src/pages/index.astro` (default language)
- `src/pages/<lang>/index.astro` (other languages)

Pass text to components through **Props** to keep the component tree clean and decoupled.
Define **TypeScript interfaces** to type the dictionaries and ensure consistency across all pages and components.
