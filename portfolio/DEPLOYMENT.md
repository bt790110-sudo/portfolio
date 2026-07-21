# Deploying to GitHub Pages

This project is pre-configured for GitHub Pages: asset paths are relative (`base: "./"` in `vite.config.js`), there's a `.nojekyll` file so GitHub doesn't run Jekyll over the build, and a `deploy` script publishes `dist/` to a `gh-pages` branch automatically.

## 1. Create a GitHub repository

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a new, empty repository on GitHub (don't initialize it with a README), then:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

## 2. Deploy

```bash
npm install
npm run deploy
```

This runs `npm run build` (via `predeploy`) and then pushes the contents of `dist/` to a `gh-pages` branch using the `gh-pages` package.

## 3. Turn on Pages

In your repository on GitHub:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `gh-pages` and folder `/ (root)`, then **Save**.
4. Wait a minute or two, then your site will be live at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

## 4. Update your metadata URLs (optional but recommended)

Once you know your live URL, update these three files so search engines and social previews point to the right place:

- `index.html` — the `canonical`, `og:url`, and `twitter:url` meta tags
- `public/robots.txt` — the `Sitemap:` line
- `public/sitemap.xml` — the `<loc>` value

## Deploying to a custom domain (optional)

If you're pointing a custom domain (e.g. `yourname.dev`) at this repo instead of using the `github.io` subpath:

1. Add a `CNAME` file inside `public/` containing just your domain, e.g.:
   ```
   yourname.dev
   ```
2. In `vite.config.js`, change `base: "./"` to `base: "/"`, since the site will now be served from the domain root rather than a `/repo-name/` subpath.
3. Configure your domain's DNS as described in [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Common issues and fixes

**Blank page after deploying, but it works locally with `npm run dev`**
Almost always an asset path issue. Confirm `vite.config.js` still has `base: "./"` (or the correct `/repo-name/` base) and that you deployed the latest `dist/` output (`npm run deploy` again).

**CSS/JS loads but images are missing**
Any image referenced from `src/` code (e.g. `import img from "../assets/x.png"`) is fine — Vite bundles it and rewrites the path automatically. Images placed directly in `public/` must be referenced with a relative path like `./my-image.png`, not `/my-image.png`, to respect the relative base.

**404 on refresh for a specific section**
This shouldn't happen here since the site has no client-side router — every "page" is just an anchor (`#about`, `#projects`, etc.) on the same `index.html`. If you later add React Router, you'll need the standard GitHub Pages SPA redirect trick (a `404.html` that redirects back to `index.html` with the intended path encoded in the query string).

**`npm run deploy` fails with a permissions or authentication error**
Make sure your local git is authenticated to push to the repo (SSH key or a personal access token over HTTPS), and that `origin` points to the correct repository.

**Old content still showing after deploy**
GitHub Pages and browsers both cache aggressively. Hard-refresh (Ctrl/Cmd+Shift+R) and give the `gh-pages` branch a minute to propagate; check the **Actions** tab or **Settings → Pages** for the latest deployment status.
