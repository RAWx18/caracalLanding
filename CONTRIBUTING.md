## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS, styled-jsx (for specific section-level styles)
- Icons: Lucide React
- Components: Custom React components in `src/components/sections/`

## Architecture
- `src/app/`: Contains the main page and layout.
- `src/components/sections/`: Modular components for each section of the website (Hero, Navbar, Features, etc.).
- `src/app/globals.css`: Global styles, CSS variables, and theme configurations.

## User Preferences
- None specified yet.

## Project Guidelines
- Use `"use client"` for components using `styled-jsx` or other client-side hooks.
- Maintain the Enterprise Cyberpunk aesthetic (dark theme, neon lime #cdff3e, safety orange #ff4f03).
- Follow the 1408px max-container width for content alignment.

## Common Patterns
- Section structure: Wrapped in a `section` tag with consistent vertical padding (e.g., `pt-24 pb-32`).
- Typography: Use `font-mono` for headings and labels, `font-sans` for body text.
- Gradients: Use linear gradients for dividers and decorative overlays.
