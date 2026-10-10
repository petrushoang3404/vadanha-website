import { AccessibilityIcon, ClockIcon, KeyRoundIcon, ReceiptTextIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'

const icons = [ReceiptTextIcon, ClockIcon, AccessibilityIcon, KeyRoundIcon]

// No client logos or metrics yet: these are commitments we make on every project.
export function TrustStrip() {
  const { t } = useTranslation()
  const items = t('trust.items', { returnObjects: true }) as { title: string; body: string }[]
  return (
    <section aria-labelledby="commitments-heading" className="container-site pt-16 md:pt-24">
      <Reveal>
        <h2 id="commitments-heading" className="mb-8 font-sans text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {t('trust.heading')}
        </h2>
        <ul className="grid gap-x-8 gap-y-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => {
            const Icon = icons[i]
            return (
              <li key={c.title} className="flex gap-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
