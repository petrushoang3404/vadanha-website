import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <p className="mb-5 flex items-center gap-3 text-sm font-medium tracking-wide text-muted-foreground uppercase">
        <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </p>
      <h2 className="text-h2">{title}</h2>
      {children && <p className="mt-6 max-w-xl text-lead text-muted-foreground">{children}</p>}
    </div>
  )
}
