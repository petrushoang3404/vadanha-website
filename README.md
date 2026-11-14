# Vadanha website

Marketing site for a web design and development studio. Vite, React, TypeScript, Tailwind CSS v4, shadcn/ui (Base UI), Lucide.

```bash
npm install
npm run dev     # local dev server
npm run build   # type-check and production build
```

- Design tokens (colors, type scale, layout utilities): `src/index.css`
- All copy, in Vietnamese (default) and English: `src/locales/vi.json`, `src/locales/en.json` (setup in `src/i18n.ts`)
- Language-independent data (project themes, nav targets, contact email): `src/data/content.ts`
- Page sections: `src/components/site/`
- Content is edited from the CMS at `/admin/` (see "Quản lý nội dung / Content management" below). Copy is split per section: `src/locales/<lang>/<section>.json` (file name = top-level i18n key). Project data: `src/content/projects.json`. Uploaded images: `public/uploads/`.

## Deployment (GitHub Pages)

Every push to `main` builds the site and deploys it with `.github/workflows/deploy.yml` (it can also be run manually from the Actions tab). The workflow only installs, builds and publishes; it does not run tests.

**One-time repository setup**

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually). The URL appears in the deploy job and under Settings → Pages. For this repository it is `https://petrushoang3404.github.io/vadanha-website/`.

If the workflow fails with a permissions error, check **Settings → Actions → General → Workflow permissions** is not restricted by an organization policy. The workflow itself requests `pages: write` and `id-token: write`.

**How it works**

- **Base path:** the workflow passes `--base` to Vite using the value from `actions/configure-pages`, so the site works from `/<repo>/` and from the root of a `<user>.github.io` repository without any code changes. For local `npm run dev` the base stays `/`.
- **Routing:** the site is a single page that navigates with `#section` anchors, so no SPA fallback (`404.html`) is needed. If you add client-side routes later, use a hash router or add a `404.html` that redirects to `index.html`.
- **Languages:** both translation files are bundled into the JavaScript, so Vietnamese and English work on Pages with no extra requests. The visitor's choice is stored in `localStorage`.
- **Custom domain:** if you add one, set it under Settings → Pages. The base path then becomes `/`, which the workflow handles automatically.

## Quản lý nội dung / Content management

Dashboard: `https://petrushoang3404.github.io/vadanha-website/admin/` (local: `http://localhost:5173/admin/`). It is [Sveltia CMS](https://sveltiacms.app) configured in `public/admin/config.yml`: it edits the JSON files above and commits to `main`; the existing deploy workflow then publishes the change (about 1–2 minutes).

- **Nội dung trang**: all copy, Vietnamese and English side by side (switch locale at the top right of the editor).
- **Dự án (ảnh & màu sắc)**: project name, category, screenshot (optional; falls back to the drawn mockup) and colors.
- **Nâng cao**: SEO title/description, menu labels and accessibility text.
- To undo a change, revert the commit on GitHub (every save is one commit).
- Adding a brand-new project needs a developer: add a `work.projects.<slug>` block in `src/locales/*/work.json` and a matching entry in `projects.json`.

**One-time setup (owner)**

1. Deploy [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) to Cloudflare Workers (free) and register the GitHub App it asks for (follow that repo's README; the callback URL points to the Worker).
2. Uncomment and set `backend.base_url` in `public/admin/config.yml` to the Worker URL.
3. Invite each editor as a collaborator with **Write** access on GitHub. They sign in with "Sign in with GitHub"; no Git knowledge needed.
4. Quick start without a Worker: an editor can use "Sign in with Token" with a fine-grained personal access token (Contents: read & write).

Local editing without any auth: run `npm run dev`, open `/admin/` and choose "Work with Local Repository" (Chromium browsers).
