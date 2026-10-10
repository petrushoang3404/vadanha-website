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
