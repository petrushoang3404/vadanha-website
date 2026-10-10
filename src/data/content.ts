// Structural, language-independent data. All user-facing text lives in src/locales/*.json.
export const agency = {
  name: 'Vadanha',
  email: 'hello@vadanha.com',
}

export const nav = [
  { key: 'services', href: '#services' },
  { key: 'work', href: '#work' },
  { key: 'whyUs', href: '#why-us' },
  { key: 'process', href: '#process' },
  { key: 'faq', href: '#faq' },
] as const

export type Category = 'ecommerce' | 'corporate' | 'redesign' | 'saas'

export const categories: ('all' | Category)[] = ['all', 'ecommerce', 'corporate', 'redesign', 'saas']

export type Theme = {
  bg: string
  fg: string
  accent: string
  accentFg: string
  tile: string
  serif?: boolean
}

export type Project = {
  slug: string
  name: string
  category: Category
  layout: 'split' | 'products' | 'centered' | 'dashboard' | 'editorial'
  theme: Theme
}

// Illustrative concept projects with fictional brands. Replace with real case studies as they ship.
export const projects: Project[] = [
  {
    slug: 'slow-hours',
    name: 'Slow Hours Coffee',
    category: 'ecommerce',
    layout: 'products',
    theme: { bg: '#f3e6d3', fg: '#2b1a10', accent: '#c2562b', accentFg: '#fff', tile: '#e6cfae', serif: true },
  },
  {
    slug: 'harlow-reed',
    name: 'Harlow & Reed',
    category: 'corporate',
    layout: 'editorial',
    theme: { bg: '#0f1b2d', fg: '#f2efe8', accent: '#c9a862', accentFg: '#0f1b2d', tile: '#1d2c44', serif: true },
  },
  {
    slug: 'atlas-freight',
    name: 'Atlas Freight',
    category: 'redesign',
    layout: 'split',
    theme: { bg: '#eef2f5', fg: '#0b2239', accent: '#ff6a2b', accentFg: '#0b2239', tile: '#d3dde6' },
  },
  {
    slug: 'linden-dental',
    name: 'Linden Dental',
    category: 'corporate',
    layout: 'centered',
    theme: { bg: '#eaf4f0', fg: '#123b34', accent: '#2e9e83', accentFg: '#06251f', tile: '#cfe6dd', serif: true },
  },
  {
    slug: 'tallyo',
    name: 'Tallyo',
    category: 'saas',
    layout: 'dashboard',
    theme: { bg: '#14141a', fg: '#ffffff', accent: '#7c8cff', accentFg: '#0c0c14', tile: '#23232d' },
  },
  {
    slug: 'fieldhouse',
    name: 'Fieldhouse Outfitters',
    category: 'ecommerce',
    layout: 'products',
    theme: { bg: '#e8ecdf', fg: '#1d2a17', accent: '#3f6b2a', accentFg: '#fff', tile: '#d3dbc3' },
  },
]
