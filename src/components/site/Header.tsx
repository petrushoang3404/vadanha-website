import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { nav } from '@/data/content'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'

export function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Logo />
        <nav aria-label={t('header.primary')} className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded text-sm font-medium whitespace-nowrap text-foreground/80 underline-offset-8 transition-colors hover:text-foreground hover:underline">
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a href="#contact" className={buttonVariants({ size: 'lg', className: 'h-10 max-sm:hidden' })}>
            {t('common.startProject')}
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="outline" size="icon-lg" className="size-10 lg:hidden" aria-label={t('header.openMenu')} />}>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background p-6">
              <SheetHeader className="p-0">
                <SheetTitle className="font-display text-3xl font-normal">Vadanha</SheetTitle>
                <SheetDescription className="sr-only">{t('header.siteNav')}</SheetDescription>
              </SheetHeader>
              <nav aria-label={t('header.mobile')} className="flex flex-col">
                {nav.map((item) => (
                  <a key={item.href} href={item.href} onClick={close} className="border-b py-4 font-display text-3xl">
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </nav>
              <a href="#contact" onClick={close} className={buttonVariants({ size: 'lg', className: 'mt-4' })}>
                {t('common.startProject')}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
