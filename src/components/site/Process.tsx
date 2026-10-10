import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Step = { title: string; time: string; body: string; output: string }

export function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as Step[]
  return (
    <section id="process" aria-labelledby="process-heading" className="section-y container-site">
      <Reveal>
        <SectionHeading eyebrow={t('process.eyebrow')} title={<span id="process-heading">{t('process.title')}</span>}>
          {t('process.intro')}
        </SectionHeading>
      </Reveal>
      <ol className="mt-16 grid gap-0 md:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="relative border-l pb-10 pl-6 md:border-t md:border-l-0 md:pt-8 md:pr-6 md:pb-0 md:pl-0">
            <Reveal delay={i * 80}>
              <span aria-hidden="true" className="absolute top-0 -left-[7px] size-3.5 rounded-full border-2 border-brand bg-background md:-top-[7px] md:left-0" />
              <p className="font-display text-5xl text-brand">{i + 1}</p>
              <h3 className="mt-4 font-sans text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{s.time}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{s.body}</p>
              <p className="mt-4 inline-block rounded-2xl bg-signal px-3 py-1 text-xs font-medium text-signal-foreground">{s.output}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
