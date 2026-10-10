import { ArrowUpRightIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Service = { title: string; body: string; tags: string[] }

export function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as Service[]
  return (
    <section id="services" aria-labelledby="services-heading" className="section-y container-site">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={t('services.eyebrow')} title={<span id="services-heading">{t('services.title')}</span>}>
            {t('services.intro')}
          </SectionHeading>
          <a href="#contact" className="mt-8 inline-flex items-center gap-1.5 rounded font-medium underline underline-offset-4 hover:text-brand">
            {t('services.help')} <ArrowUpRightIcon className="size-4 shrink-0" aria-hidden="true" />
          </a>
        </Reveal>
        <ol className="border-t">
          {items.map((s, i) => (
            <li key={s.title} className="group border-b">
              <Reveal className="grid gap-x-6 gap-y-3 py-8 transition-colors group-hover:bg-sand/50 sm:grid-cols-[3rem_1fr] sm:px-3">
                <span className="font-display text-2xl text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-h3">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-muted-foreground">{s.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={t('services.includes', { service: s.title })}>
                    {s.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-input px-3 py-1 text-xs font-medium">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
