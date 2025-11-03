

## Quick start

1. Copy all files to your repository root.
2. Edit `site.config.js` (name, role, socials) and `content.js` (work, posts, gallery).
3. Commit and push to `main` (or `master`).
4. In your repo: Settings → Pages → Deploy from branch → `main` → `/ (root)`.
5. Open your Pages URL. Client-side routing uses `#/route` and `404.html` handles refreshes.

## Customize

- Change avatar and images in `assets/` and update paths in `site.config.js` / `content.js`.
- Add blog posts by appending objects to `content.blog`.
- Enable/disable pages via `site.config.js > enablePages`.

## Structure

- `index.html` – layout and section mounts
- `styles.css` – dark, minimal styling
- `site.config.js` – site-level settings (title, role, socials)
- `content.js` – your data (intro, work, studies, skills, blog, gallery)
- `router.js` – hash router
- `app.js` – render functions for each page
- `404.html` – SPA redirect for GitHub Pages
- `assets/` – images (place your own)



