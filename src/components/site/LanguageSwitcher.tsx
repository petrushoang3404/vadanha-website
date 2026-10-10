import { useTranslation } from 'react-i18next'
import { languages } from '@/i18n'
import { cn } from '@/lib/utils'

const labels = { vi: 'Tiếng Việt', en: 'English' } as const

export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation()
  return (
    <div role="group" aria-label={t('header.language')} className={cn('inline-flex h-10 items-center rounded-full border border-input p-0.5', className)}>
      {languages.map((lng) => (
        <button
          key={lng}
          type="button"
          lang={lng}
          title={labels[lng]}
          aria-label={labels[lng]}
          aria-pressed={i18n.resolvedLanguage === lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={cn(
            'h-full min-w-10 rounded-full px-2.5 text-xs font-semibold uppercase transition-colors',
            i18n.resolvedLanguage === lng ? 'bg-brand text-brand-foreground' : 'text-foreground/70 hover:text-foreground',
          )}
        >
          {lng}
        </button>
      ))}
    </div>
  )
}
