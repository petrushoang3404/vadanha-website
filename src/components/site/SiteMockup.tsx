import { useTranslation } from 'react-i18next'
import type { Project, Theme } from '@/data/content'
import { cn } from '@/lib/utils'

/**
 * Stylised browser mockup of an illustrative site. Everything scales with the
 * container width (cqw units) so the same mockup works in the hero and in cards.
 */

function Bars({ t, widths }: { t: Theme; widths: number[] }) {
  return (
    <div className="flex flex-col gap-[1.1cqw]">
      {widths.map((w, i) => (
        <div key={i} className="h-[1.1cqw] rounded-full" style={{ width: `${w}%`, background: t.fg, opacity: 0.22 }} />
      ))}
    </div>
  )
}

function Pill({ t, label }: { t: Theme; label: string }) {
  return (
    <span
      className="inline-block rounded-full px-[3cqw] py-[1.4cqw] text-[2.4cqw] leading-none font-medium"
      style={{ background: t.accent, color: t.accentFg }}
    >
      {label}
    </span>
  )
}

function Heading({ t, children, size = 'text-[7.4cqw]' }: { t: Theme; children: string; size?: string }) {
  return (
    <p className={cn(size, 'leading-[1.05] tracking-tight', t.serif ? 'font-display' : 'font-sans font-semibold')}>
      {children}
    </p>
  )
}

function Body({ project }: { project: Project }) {
  const { t: tr } = useTranslation()
  const t = project.theme
  const headline = tr(`work.projects.${project.slug}.headline`)
  const cta = tr(`work.projects.${project.slug}.cta`)
  switch (project.layout) {
    case 'products':
      return (
        <div className="flex flex-1 flex-col gap-[3cqw] p-[4cqw]">
          <div className="flex items-end justify-between gap-[3cqw]">
            <div className="max-w-[60%]">
              <Heading t={t}>{headline}</Heading>
            </div>
            <Pill t={t} label={cta} />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-[2.5cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-[1.6cqw]">
                <div className="relative flex-1 overflow-hidden rounded-[1.6cqw]" style={{ background: t.tile }}>
                  <div
                    className="absolute bottom-[-12%] left-1/2 aspect-square w-[62%] -translate-x-1/2 rounded-full"
                    style={{ background: i === 1 ? t.accent : t.fg, opacity: i === 1 ? 1 : 0.85 }}
                  />
                </div>
                <Bars t={t} widths={[80, 45]} />
              </div>
            ))}
          </div>
        </div>
      )
    case 'editorial':
      return (
        <div className="flex flex-1 flex-col">
          <div className="relative flex flex-1 flex-col justify-end gap-[2.5cqw] p-[4cqw]" style={{ background: t.tile }}>
            <div
              className="absolute top-[8%] right-[6%] size-[22cqw] rounded-full border-[0.5cqw]"
              style={{ borderColor: t.accent }}
            />
            <div className="max-w-[72%]">
              <Heading t={t} size="text-[8.4cqw]">{headline}</Heading>
            </div>
            <div>
              <Pill t={t} label={cta} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[3cqw] p-[3.5cqw]">
            {[0, 1, 2].map((i) => (
              <Bars key={i} t={t} widths={[70, 90, 55]} />
            ))}
          </div>
        </div>
      )
    case 'split':
      return (
        <div className="grid flex-1 grid-cols-[1.15fr_1fr] gap-[3cqw] p-[4cqw]">
          <div className="flex flex-col justify-center gap-[3cqw]">
            <Heading t={t} size="text-[8cqw]">{headline}</Heading>
            <Bars t={t} widths={[90, 70]} />
            <div>
              <Pill t={t} label={cta} />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2cqw]" style={{ background: t.tile }}>
            <div className="absolute inset-x-[-10%] bottom-[18%] h-[10%] -rotate-12" style={{ background: t.fg, opacity: 0.8 }} />
            <div className="absolute inset-x-[-10%] bottom-[34%] h-[10%] -rotate-12" style={{ background: t.accent }} />
            <div className="absolute inset-x-[-10%] bottom-[50%] h-[10%] -rotate-12" style={{ background: t.fg, opacity: 0.35 }} />
          </div>
        </div>
      )
    case 'centered':
      return (
        <div className="flex flex-1 flex-col items-center justify-center gap-[3cqw] p-[4cqw] text-center">
          <div className="max-w-[78%]">
            <Heading t={t} size="text-[9cqw]">{headline}</Heading>
          </div>
          <div className="w-[52%]">
            <Bars t={t} widths={[100, 70]} />
          </div>
          <Pill t={t} label={cta} />
          <div className="mt-[1cqw] grid w-full grid-cols-3 gap-[2.5cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-[11cqw] rounded-[1.6cqw]" style={{ background: t.tile }} />
            ))}
          </div>
        </div>
      )
    case 'dashboard':
      return (
        <div className="grid flex-1 grid-cols-[22%_1fr] gap-[3cqw] p-[3.5cqw]">
          <div className="flex flex-col gap-[2cqw] rounded-[1.6cqw] p-[2cqw]" style={{ background: t.tile }}>
            {[80, 60, 70, 50].map((w, i) => (
              <div key={i} className="h-[1.6cqw] rounded-full" style={{ width: `${w}%`, background: i === 0 ? t.accent : t.fg, opacity: i === 0 ? 1 : 0.3 }} />
            ))}
          </div>
          <div className="flex flex-col gap-[3cqw]">
            <Heading t={t} size="text-[6.6cqw]">{headline}</Heading>
            <div className="flex flex-1 items-end gap-[1.8cqw] rounded-[1.6cqw] p-[2.5cqw]" style={{ background: t.tile }}>
              {[40, 62, 48, 78, 58, 92, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-[0.8cqw]" style={{ height: `${h}%`, background: i === 5 ? t.accent : t.fg, opacity: i === 5 ? 1 : 0.35 }} />
              ))}
            </div>
          </div>
        </div>
      )
  }
}

export function SiteMockup({ project, className }: { project: Project; className?: string }) {
  const { t: tr } = useTranslation()
  const t = project.theme
  return (
    <div
      role="img"
      aria-label={tr('work.mockupLabel', { name: project.name, category: tr(`work.categories.${project.category}`) })}
      className={cn('@container overflow-hidden rounded-xl border border-foreground/10 bg-surface shadow-[0_24px_60px_-28px_rgba(16,24,20,0.45)]', className)}
    >
      <div className="flex h-full flex-col" aria-hidden="true">
        {/* browser chrome */}
        <div className="flex items-center gap-[2cqw] border-b border-foreground/10 bg-[#ece8dc] px-[3cqw] py-[1.8cqw]">
          <span className="flex gap-[1cqw]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-[1.7cqw] rounded-full bg-foreground/20" />
            ))}
          </span>
          <span className="mx-auto flex h-[3.6cqw] w-[46%] items-center justify-center rounded-full bg-surface text-[2cqw] text-foreground/50">
            {project.slug}.example
          </span>
          <span className="w-[5cqw]" />
        </div>
        {/* page */}
        <div className="flex flex-1 flex-col" style={{ background: t.bg, color: t.fg }}>
          <div className="flex items-center justify-between px-[4cqw] pt-[3.2cqw]">
            <span className={cn('text-[3cqw] leading-none', t.serif ? 'font-display' : 'font-sans font-semibold')}>
              {project.name}
            </span>
            <span className="flex gap-[2cqw]">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-[1cqw] w-[5cqw] rounded-full" style={{ background: t.fg, opacity: 0.3 }} />
              ))}
            </span>
          </div>
          <Body project={project} />
        </div>
      </div>
    </div>
  )
}
