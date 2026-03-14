# Vite SPA Boilerplate

A modern, minimal single page application boilerplate powered by **Vite** and **React**.

---

## Features

| Feature | Details |
|---|---|
| **Blazing-fast dev server** | Vite's native ESM dev server with instant HMR |
| **Client-side routing** | React Router v7 with nested layouts |
| **Path aliases** | `@/` resolves to `src/` for cleaner imports |
| **Linting** | ESLint 9 flat config with React Hooks & React Refresh plugins |
| **Production build** | Optimized bundle with source maps via Rollup |

---

## Tech Stack

- [Vite](https://vite.dev) v6 — next-gen frontend tooling
- [React](https://react.dev) v19 — UI library
- [React Router](https://reactrouter.com) v7 — declarative routing
- [ESLint](https://eslint.org) v9 — code quality

---

## Quick Start

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9 (or yarn / pnpm)

### Installation

```bash
# Clone the repo
git clone https://github.com/Olevy4/vite-spa-boilerplate.git
cd vite-spa-boilerplate

# Install dependencies
npm install

# Start the dev server (opens http://localhost:3000)
npm run dev
```

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on all source files |

---

## Project Structure

```
.
├── public/
│   └── vite.svg              # Static assets served at root
├── src/
│   ├── assets/                # Importable assets (processed by Vite)
│   │   └── react.svg
│   ├── components/            # Shared/reusable components
│   │   ├── Layout.jsx
│   │   └── Layout.css
│   ├── pages/                 # Route-level page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   └── NotFound.jsx
│   ├── App.jsx                # Route definitions
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint flat config
└── package.json
```

---

## Routing

Routes are defined in `src/App.jsx` using React Router's declarative API:

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page with counter demo |
| `/about` | `About` | About page listing features |
| `*` | `NotFound` | 404 catch-all |

All routes share the `Layout` component which provides a consistent header, navigation, and footer.

---

## Customization

### Change the dev server port

Edit `vite.config.js`:

```js
server: {
  port: 8080, // change to any port
}
```

### Add a new page

1. Create `src/pages/MyPage.jsx`
2. Add a route in `src/App.jsx`:
   ```jsx
   <Route path="my-page" element={<MyPage />} />
   ```
3. Add a nav link in `src/components/Layout.jsx`

---

## Deployment

```bash
npm run build
```

The `dist/` folder contains the production-ready static files. Deploy to any static hosting provider:

- **Vercel** — `vercel --prod`
- **Netlify** — drag & drop `dist/` or connect your repo
- **GitHub Pages** — use `vite-plugin-gh-pages` or a CI workflow
- **AWS S3 + CloudFront** — sync `dist/` to an S3 bucket

> **SPA Note:** Configure your hosting to redirect all routes to `index.html` for client-side routing to work.

---

## License

MIT
