import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { categories, projects, type Category } from '@/data/content'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SiteMockup } from './SiteMockup'

export function Work() {
  const { t } = useTranslation()
  const [active, setActive] = useState<'all' | Category>('all')
  const visible = projects.filter((p) => active === 'all' || p.category === active)

  return (
    <section id="work" aria-labelledby="work-heading" className="section-y bg-sand/60">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading eyebrow={t('work.eyebrow')} title={<span id="work-heading">{t('work.title')}</span>}>
              {t('work.intro')}
            </SectionHeading>
          </Reveal>
          <div role="group" aria-label={t('work.filter')} className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                onClick={() => setActive(c)}
                className={cn(
                  'h-10 rounded-full border px-4 text-sm font-medium transition-colors',
                  active === c ? 'border-brand bg-brand text-brand-foreground' : 'border-input hover:bg-foreground/5',
                )}
              >
                {t(`work.categories.${c}`)}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-x-10 lg:gap-x-14">
          {visible.map((p, i) => (
            <li key={p.slug} className={cn(i % 2 === 1 && 'md:mt-20')}>
              <Reveal>
                <article className="group">
                  <div className="overflow-hidden rounded-2xl bg-foreground/5 p-4 sm:p-6">
                    <SiteMockup project={p} className="aspect-[4/3] w-full transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.015] motion-reduce:transition-none" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="text-h3">{p.name}</h3>
                    <span className="shrink-0 rounded-full border border-input px-3 py-1 text-xs font-medium">{t(`work.categories.${p.category}`)}</span>
                  </div>
                  <p className="mt-2 max-w-md text-muted-foreground">{t(`work.projects.${p.slug}.summary`)}</p>
                  <p className="mt-3 text-sm text-foreground/70">{(t(`work.projects.${p.slug}.scope`, { returnObjects: true }) as string[]).join(' · ')}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
