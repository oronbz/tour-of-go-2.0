<p align="center">
  <img src="public/favicon.svg" width="80" height="80" alt="Go Gopher">
</p>

<h1 align="center">Tour of Go 2.0</h1>

<p align="center">
  A modern, engaging redesign of <a href="https://go.dev/tour/">Go's official tour</a>.<br>
  Same content. Better experience.
</p>

<p align="center">
  <a href="https://oronbz.github.io/tour-of-go-2.0/">Live Site</a>
</p>

---

## What is this?

The official [Tour of Go](https://go.dev/tour/) is a great resource — but the one-slide-at-a-time format makes it tedious to work through. This project takes all 92 lessons and repackages them into a modern, dark-themed site with:

- **Chapter-based navigation** — 6 chapters instead of 92 individual slides
- **Interactive code** — every example links directly to the Go Playground with code pre-filled
- **Progress tracking** — mark lessons complete, tracked in localStorage
- **Keyboard navigation** — arrow keys to move between lessons
- **Conversational tone** — rewritten explanations that are punchier and more engaging

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Shiki](https://shiki.style) — Go syntax highlighting
- GitHub Pages — hosting

## Getting Started

```bash
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── content/lessons/       # 92 markdown lesson files across 6 chapters
│   ├── 01-basics/
│   ├── 02-flow-control/
│   ├── 03-more-types/
│   ├── 04-methods/
│   ├── 05-generics/
│   └── 06-concurrency/
├── components/            # Astro components (Header, Sidebar, GoPlayground, etc.)
├── layouts/               # BaseLayout + ChapterLayout
├── lib/                   # Chapter metadata, progress helpers, playground IDs
├── pages/                 # index.astro + [...slug].astro dynamic route
└── styles/                # Prose typography
```

## Credits

- Content based on the [official Tour of Go](https://go.dev/tour/) by the Go Authors
- Go Gopher designed by [Renee French](https://reneefrench.blogspot.com/), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
