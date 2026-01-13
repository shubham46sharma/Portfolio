# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. This project showcases skills, experience, and projects with a sleek dark-themed UI and smooth animations.

🔗 **Live Demo:** [https://shubham46sharma.github.io/Portfolio/](https://shubham46sharma.github.io/Portfolio/)

---

## 🛠️ Tech Stack

*   **Frontend Framework:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite 7](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Deployment:** [GitHub Pages](https://pages.github.com/)

---

## 🏁 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

*   **Node.js** (v18+ recommended) installed. [Download Node.js](https://nodejs.org/)
*   **Git** installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shubham46sharma/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173/Portfolio/`.

---

## 📂 Project Structure

Here is a quick overview of the top-level files and folders:

```
/
├── public/              # Static assets (favicon, images that don't need processing)
├── src/                 # Source code
│   ├── assets/          # Imported images and media
│   ├── components/      # Reusable React components (Hero, About, Projects, etc.)
│   ├── App.tsx          # Main layout component
│   ├── main.tsx         # Entry point (renders App into HTML)
│   └── index.css        # Global styles & Tailwind configuration
├── dist/                # Production build output (created after running build)
├── vite.config.ts       # Vite configuration settings
└── package.json         # Project metadata and dependencies
```

---

## 📖 Development Guide

### 1. Styling (Tailwind CSS v4)
This project uses the latest **Tailwind CSS v4**.
*   **No `tailwind.config.js`:** All theme configurations (colors, fonts, screens) are defined directly in `src/index.css` using the `@theme` directive.
*   **CSS Variables:** We use CSS variables for theme colors (e.g., `--color-primary`, `--color-bg-dark`) to allow easy updates.

### 2. Animations
We use **Framer Motion** for animations.
*   Most components use the `motion` primitive (e.g., `motion.div`, `motion.h1`).
*   Look for `initial`, `animate`, and `whileInView` props to understand how elements animate on scroll.

### 3. Images
*   Place images in `src/assets/` if you want them processed by Vite (hashed filenames, optimization).
*   Place images in `public/` if you need a static URL that doesn't change.

---

## 💡 Under the Hood: Vite

Understanding the build tool is crucial for modern web development. This project uses **Vite** (French for "fast"), a next-generation frontend tool that significantly improves the development experience.

### How it Works

Vite operates in two distinct modes to optimize for both developer speed and production performance:

#### 1. Development Mode (`npm run dev`)
*   **Native ESM:** Instead of bundling the entire application before starting the server (like older tools), Vite serves source files over native ES modules.
*   **On-Demand Compilation:** It only compiles code that the browser actually requests. If you have a massive project but only visit the "Home" page, Vite only processes the Home page code.
*   **Hot Module Replacement (HMR):** When you modify a file (e.g., `Hero.tsx`), Vite precisely updates *only* that module in the browser without reloading the page. This preserves the application state (like scroll position or form inputs).

#### 2. Production Mode (`npm run build`)
*   **Bundling with Rollup:** For production, browsers perform better with fewer network requests. Vite uses **Rollup** to bundle your code into highly optimized static assets.
*   **Tree Shaking:** It automatically removes unused code (dead code elimination) to ensure the smallest possible bundle size.
*   **Asset Optimization:** Images and CSS are compressed and hashed (e.g., `index-aB12.js`) for efficient caching.

### The Connection Pipeline

1.  **Entry Point (`index.html`):** Vite treats `index.html` as the entry point to your graph. The `<script type="module" src="/src/main.tsx">` tag triggers the entire chain.
2.  **Transpilation:** Browser requests for `.tsx` files are intercepted by Vite. It uses **esbuild** (written in Go) to instantly convert TypeScript and JSX into JavaScript that the browser can execute.
3.  **Styling Integration:** The `@tailwindcss/vite` plugin hooks into this process. When `index.css` is requested, the plugin scans your files and generates the necessary CSS utility classes on the fly.

---

## 🚀 Deployment

This project is hosted on **GitHub Pages**.

### How it works
The `gh-pages` package pushes the contents of the `dist` folder (production build) to a specific branch named `gh-pages` on your GitHub repository. GitHub serves the website from that branch.

### To Deploy Changes:

1.  **Commit your changes** to the main branch.
2.  **Run the deploy script:**
    ```bash
    npm run deploy
    ```
    *   This script automatically runs `npm run build` first.
    *   Then it uploads the `dist` folder to GitHub.

**Important Note:**
In `vite.config.ts`, the `base` property is set to `/Portfolio/`. This is required for GitHub Pages because the site is hosted at `username.github.io/Portfolio/`, not the root domain.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local dev server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles the TypeScript code and bundles the app into the `dist` folder. |
| `npm run preview` | Previews the production build locally (useful to test before deploying). |
| `npm run lint` | checks code for errors and formatting issues using ESLint. |
| `npm run deploy` | Builds the project and pushes it to GitHub Pages. |