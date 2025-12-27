# Personal Portfolio Project

## Overview
This is a modern, responsive personal portfolio website built to showcase skills, projects, and professional experience. It features a sleek dark-themed UI with gradient backgrounds, smooth animations, and a mobile-friendly layout.

## Tech Stack
*   **Framework:** React 19 (Functional Components + Hooks)
*   **Language:** TypeScript
*   **Build Tool:** Vite 7
*   **Styling:** Tailwind CSS v4
    *   **Plugin:** `@tailwindcss/vite`
    *   **Font:** Inter (Google Fonts)
    *   **Icons:** React Icons
*   **Animations:** Framer Motion

## Project Structure
```
/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # Project images and media
│   ├── components/      # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx          # Main application layout component
│   ├── index.css        # Global CSS, Tailwind @theme configuration
│   └── main.tsx         # Application entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
└── index.html           # HTML entry point
```

## Setup & Development

### Prerequisites
*   Node.js (LTS recommended)
*   npm

### Installation
```bash
npm install
```

### Key Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:5173/Portfolio/`. |
| `npm run build` | Builds the project for production to the `dist` folder. |
| `npm run preview` | Locally preview the production build. |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run deploy` | Deploys the `dist` folder to GitHub Pages. |

## Configuration Notes

### Tailwind CSS v4
This project uses the latest Tailwind CSS v4 setup.
*   **Configuration:** There is **no** `tailwind.config.js`. Configuration is handled directly in `src/index.css` using the `@theme` directive.
*   **Plugin:** Integrated via `@tailwindcss/vite` in `vite.config.ts`.
*   **Theme Variables:** Custom colors (`--color-primary`, `--color-secondary`, etc.) and fonts are defined in `src/index.css`.

### Deployment
The project is configured for GitHub Pages deployment.
*   `base` URL in `vite.config.ts` is set to `/Portfolio/`.
*   `gh-pages` package is used for deployment.

## Development Guidelines
*   **Styling:** Use Tailwind utility classes for styling. Define reusable theme values in CSS variables if needed.
*   **Components:** Keep components small, focused, and typed (use `interface` for props).
*   **Animations:** Use `framer-motion` for complex entrance and hover animations.
*   **Responsiveness:** Always test on mobile breakpoints. Use standard Tailwind breakpoints (`md:`, `lg:`).


## additional coding preferences

- Keep project dependencies minimal.
- use relative import and not path alias. 
