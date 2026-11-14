export { cn } from "cn"

/** Resolve a path under public/ (e.g. "/uploads/a.webp") against the Vite base, so it works on GitHub Pages sub-paths. */
export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}
