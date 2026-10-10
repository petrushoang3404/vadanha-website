import { Trans, useTranslation } from 'react-i18next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Faq() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as { q: string; a: string }[]
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-y container-site">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow={t('faq.eyebrow')} title={<span id="faq-heading">{t('faq.title')}</span>}>
            <Trans i18nKey="faq.intro" components={{ a: <a href="#contact" className="font-medium text-foreground underline underline-offset-4" /> }} />
          </SectionHeading>
        </Reveal>
        <Reveal>
          <Accordion className="border-t">
            {items.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="gap-4 py-6 font-sans text-lg font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="max-w-xl pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
