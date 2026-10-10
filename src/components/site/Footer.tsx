import { useTranslation } from 'react-i18next'
import { agency, nav } from '@/data/content'
import { Logo } from './Logo'

const year = new Date().getFullYear()

export function Footer() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true }) as { title: string }[]
  return (
    <footer className="mt-6 md:mt-10">
      <div className="on-brand pt-16 pb-8 md:pt-24">
        <div className="container-site grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="[&_a]:text-brand-foreground [&_svg_rect]:fill-signal [&_svg_path]:stroke-brand">
              <Logo />
            </div>
            <p className="mt-5 max-w-xs text-brand-foreground/75">{t('footer.tagline')}</p>
          </div>
          <FooterList title={t('footer.explore')} items={nav.map((n) => ({ label: t(`nav.${n.key}`), href: n.href }))} />
          <FooterList title={t('footer.services')} items={services.slice(0, 5).map((s) => ({ label: s.title, href: '#services' }))} />
          <FooterList title={t('footer.contact')} items={[{ label: agency.email, href: `mailto:${agency.email}` }, { label: t('common.requestProposal'), href: '#contact' }]} />
        </div>
        <div className="container-site mt-16">
          <div className="flex flex-col gap-2 border-t pt-6 text-sm text-brand-foreground/70 sm:flex-row sm:justify-between">
            <p>{t('footer.rights', { year })}</p>
            <p>{t('footer.concepts')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-sans text-sm font-medium tracking-wide text-signal uppercase">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="rounded break-words text-brand-foreground/85 underline-offset-4 hover:text-brand-foreground hover:underline">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
