import projectsData from '@/content/projects.json'

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

export type Project = {
  slug: string
  name: string
  category: Category
  /** Screenshot uploaded from the CMS (path under public/). */
  image: string
}

// Illustrative concept projects with fictional brands (edited from the CMS at /admin).
export const projects = projectsData.projects as Project[]
