# 📘 Capricious Cycle - Documentation

**Capricious Cycle** is a high-performance, full-stack portfolio website built with **Astro (Server-Side Rendering)** and **Node.js**. It features a built-in Content Management System (CMS) powered by **SQLite** and a bold **Neo-Brutalist** design system.

---

## 🏗️ System Architecture

This project is not a static site. It runs as a dynamic Node.js server to support real-time database interactions.

-   **Frontend:** Astro (Component-based), TailwindCSS (Styling).
-   **Backend:** Node.js (Adapter: `@astrojs/node` in standalone mode).
-   **Database:** SQLite (`better-sqlite3`). Local file database (`projects.db`).
-   **Authentication:** Session-based using secure HTTP-only cookies.
-   **Media Storage:** Local filesystem (`uploads/` directory).

---

## 📂 Project Structure

```bash
/
├── .env                 # Environment variables (Password, Secrets)
├── astro.config.mjs     # Astro configuration (SSR, Sitemap, Tailwind)
├── projects.db          # SQLite Database file (Created automatically)
├── public/              # Static assets (Favicon, Robots.txt)
├── uploads/             # User-uploaded images (Created automatically)
└── src/
    ├── components/      # Reusable UI components (Header, Footer, Cards)
    │   └── pages/       # Page components with i18n logic
    ├── i18n/            # Translation dictionaries (EN/ID)
    ├── layouts/         # HTML shell & Global Scripts (Toast, SEO)
    ├── lib/             # Backend utilities (Database connection)
    ├── middleware.ts    # Request interception (Auth check, Analytics)
    ├── pages/           # File-based Routing
    │   ├── admin/       # Dashboard & Login UI
    │   ├── api/         # Backend API Endpoints (JSON/Form Data)
    │   ├── id/          # Indonesian version routes
    │   └── index.astro  # Main English route
    └── styles/          # Global CSS (Neo-Brutalist Theme)
```

---

## 🚀 Installation & Setup

### 1. Prerequisites
-   **Node.js** v18+
-   **npm** (or yarn/bun)

### 2. Clone Repository
```bash
git clone https://github.com/LT-SYAII/LT-SYAII.git my-portfolio
cd my-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment
Create a `.env` file in the root directory. This is crucial for accessing the admin panel.

```env
# Password for /admin/login
ADMIN_PASSWORD=admin123!

# Random string to encrypt session cookies
SESSION_SECRET=change_this_to_something_secure_and_long
```

---

## 💻 Running the Project

### Development Mode
Use this for coding and testing changes live.
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build
To deploy the project, you must build it first. This generates the Node.js server script.
```bash
npm run build
```

### Start Production Server
Run the built server using Node (or PM2).
```bash
# Direct run
node dist/server/entry.mjs

# Using PM2 (Recommended)
PORT=4000 HOST=0.0.0.0 pm2 start ./dist/server/entry.mjs --name "my-portfolio"
```
The site will be live at `http://localhost:4000`.

---

## 🔐 Admin Dashboard Guide

The website includes a hidden CMS to manage your portfolio content.

1.  **Access:** Go to `/admin/login`.
2.  **Login:** Enter the password defined in your `.env`.
3.  **Dashboard Features:**
    *   **Real-time Stats:** View total hits, server latency, and project count.
    *   **System Logs:** Monitor all create/delete actions in the sidebar.
    *   **Add Project:**
        *   **Title/Desc/Tech/Link:** Standard text fields.
        *   **Image:** Choose between pasting an **External URL** or **Uploading a File** from your device.
    *   **Manage:** View list of active projects and delete them with one click (includes confirmation modal).

---

## 🌍 Localization (i18n) Guide

This project supports **English (Default)** and **Indonesian**.

### Adding a New Language
1.  Open `src/i18n/ui.ts`.
2.  Add your language key to the `languages` object (e.g., `es: 'Spanish'`).
3.  Duplicate the translation object structure inside `ui` for your new language key.
4.  Translate the strings.

### Creating Language Routes
1.  Create a new folder in `src/pages/`, e.g., `src/pages/es/`.
2.  Duplicate files from `src/pages/id/` to `src/pages/es/`.
3.  Update the prop in each file: `<Home lang="es" />`.

---

## 🎨 Customization

### Changing Colors (Neo-Brutalism)
Go to `src/styles/global.css` and modify the CSS variables at the top:

```css
:root {
  --bg-dark: #050505;       /* Main Background */
  --accent-primary: #69de10; /* The Neon Green */
  --border-color: #ffffff;   /* Thick Borders */
}
```

### SEO & Meta Tags
Edit `src/layouts/Layout.astro`. The default props handle the global meta tags. You can also customize specific page metadata in `src/pages/index.astro`, `src/pages/projects.astro`, etc.

---

## 🛠️ Troubleshooting

**Issue: Admin password not working**
*   Check your `.env` file. Restart the server/PM2 after changing `.env`.

**Issue: Images not showing**
*   If using Uploads: Ensure the `uploads/` folder exists in the root directory.
*   The server automatically serves files from `/uploads/filename` via a custom route handler.

**Issue: Analytics not updating**
*   Analytics track visits to public pages only (`/`, `/projects`). Admin pages are ignored.
*   Check `src/middleware.ts` logic if you customized routes.

---

**Developed by Bang_syaii**
