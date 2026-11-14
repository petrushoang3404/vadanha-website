import { ArrowDownRightIcon, ArrowUpRightIcon } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
import { buttonVariants } from '@/components/ui/button'
import { projects } from '@/data/content'
import { assetUrl } from '@/lib/utils'

const showcase = [projects[0], projects[1], projects[4]]
// Images are 4:3. Frames shorter than that crop the bottom, so the tops stagger and every screenshot bleeds off the panel's bottom edge
const aspects = ['aspect-[4/2.7]', 'aspect-[4/2.9]', 'aspect-[4/2.4]']

export function Hero() {
  const { t } = useTranslation()
  return (
    <section id="top" className="pt-14 md:pt-20">
      <div className="container-site">
        <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground uppercase">{t('hero.eyebrow')}</p>
        <h1 className="text-display max-w-[16ch]">
          <Trans i18nKey="hero.title" components={{ em: <em className="italic" /> }} />
        </h1>
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lead text-muted-foreground">
            {t('hero.body')}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className={buttonVariants({ size: 'lg' })}>
              {t('common.requestProposal')} <ArrowUpRightIcon data-icon="inline-end" />
            </a>
            <a href="#work" className={buttonVariants({ size: 'lg', variant: 'outline' })}>
              {t('hero.seeWork')} <ArrowDownRightIcon data-icon="inline-end" />
            </a>
          </div>
        </div>
      </div>

      {/* Showcase band: mockups cropped by the panel edge */}
      <div className="container-site mt-14 md:mt-20">
        <div className="on-brand relative overflow-hidden rounded-3xl px-4 pt-5 sm:px-8 lg:px-14">
          <p className="text-xs text-brand-foreground/70">{t('hero.caption')}</p>
          <div className="mx-auto mt-6 grid max-w-[1100px] grid-cols-1 items-end gap-6 md:mt-10 md:grid-cols-3 lg:gap-10">
            {showcase.map((p, i) => (
              <div
                key={p.slug}
                className={['overflow-hidden rounded-t-xl shadow-[0_24px_60px_-28px_rgba(16,24,20,0.45)]', aspects[i], i > 0 && 'hidden md:block'].filter(Boolean).join(' ')}
              >
                <img
                  src={assetUrl(p.image)}
                  alt={t('work.mockupLabel', { name: p.name, category: t(`work.categories.${p.category}`) })}
                  className="size-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
