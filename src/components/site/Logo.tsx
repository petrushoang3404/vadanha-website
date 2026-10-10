import { useTranslation } from 'react-i18next'

export function Logo({ className }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <a href="#top" aria-label={t('header.home')} className={`inline-flex items-center gap-2 rounded-full ${className ?? ''}`}>
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--brand)" />
        <path d="M8 10.5 16 23l8-12.5" fill="none" stroke="var(--signal)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-[1.7rem] leading-none tracking-tight">Vadanha</span>
    </a>
  )
}
