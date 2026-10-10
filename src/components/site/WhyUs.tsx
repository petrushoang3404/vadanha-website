import { CheckIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function WhyUs() {
  const { t } = useTranslation()
  const items = t('why.items', { returnObjects: true }) as { title: string; body: string; benefit: string }[]
  const principles = t('why.principles', { returnObjects: true }) as string[]
  return (
    <section id="why-us" aria-labelledby="why-heading" className="on-brand section-y">
      <div className="container-site">
        <Reveal>
          <SectionHeading eyebrow={t('why.eyebrow')} title={<span id="why-heading">{t('why.title')}</span>} className="max-w-4xl" />
        </Reveal>
        <dl className="mt-16 grid gap-x-16 gap-y-12 border-t pt-12 md:grid-cols-2">
          {items.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 100}>
              <dt className="font-display text-h3">{d.title}</dt>
              <dd className="mt-3 max-w-md text-brand-foreground/80">
                {d.body}
                <span className="mt-4 flex items-center gap-2 text-sm font-medium text-signal">
                  <CheckIcon className="size-4 shrink-0" aria-hidden="true" /> {d.benefit}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <Reveal className="mt-16 rounded-2xl bg-brand-foreground/[0.07] p-8 md:p-10">
          <h3 className="font-sans text-sm font-medium tracking-wide text-signal uppercase">{t('why.principlesTitle')}</h3>
          <ul className="mt-5 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <li key={p} className="text-lg leading-snug">{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
