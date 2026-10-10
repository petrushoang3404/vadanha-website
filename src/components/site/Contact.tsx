import { useState, type FormEvent } from 'react'
import { ArrowUpRightIcon, MailIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { agency } from '@/data/content'
import { Reveal } from './Reveal'

export function Contact() {
  const { t } = useTranslation()
  const projectTypes = t('contact.types', { returnObjects: true }) as string[]
  const [sent, setSent] = useState(false)

  // No backend: the form composes an email in the visitor's mail app.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `${t('contact.name')}: ${f.get('name')}`,
      `${t('contact.mailCompany')}: ${f.get('company') || '-'}`,
      `${t('contact.type')}: ${f.get('type')}`,
      '',
      `${f.get('message')}`,
    ].join('\n')
    window.location.href = `mailto:${agency.email}?subject=${encodeURIComponent(t('contact.subject', { name: f.get('name') }))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="container-site pb-6 md:pb-10">
      <Reveal className="grid gap-12 rounded-3xl bg-signal p-6 text-signal-foreground sm:p-10 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:p-16">
        <div>
          <p className="mb-5 text-sm font-medium tracking-wide uppercase">{t('contact.eyebrow')}</p>
          <h2 id="contact-heading" className="text-h2">{t('contact.title')}</h2>
          <p className="mt-6 max-w-md text-lead">
            {t('contact.intro')}
          </p>
          <a href={`mailto:${agency.email}`} className="mt-8 inline-flex items-center gap-2 rounded font-medium underline underline-offset-4">
            <MailIcon className="size-5" aria-hidden="true" /> {agency.email}
          </a>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl bg-surface p-6 text-foreground sm:grid-cols-2 sm:p-8">
          <div className="grid gap-2">
            <Label htmlFor="name">{t('contact.name')}</Label>
            <Input id="name" name="name" required autoComplete="name" className="h-11 bg-background" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">{t('contact.company')}</Label>
            <Input id="company" name="company" autoComplete="organization" className="h-11 bg-background" />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <Label htmlFor="type">{t('contact.type')}</Label>
            <select
              id="type"
              name="type"
              defaultValue={projectTypes[0]}
              className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <Label htmlFor="message">{t('contact.message')}</Label>
            <Textarea id="message" name="message" required rows={5} placeholder={t('contact.placeholder')} className="bg-background" />
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2">
            <Button type="submit" size="lg" className="w-full sm:w-fit">
              {t('common.requestProposal')} <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
            <p role="status" className="text-sm text-muted-foreground">
              {sent ? t('contact.sent') : t('contact.hint')}
            </p>
          </div>
        </form>
      </Reveal>
    </section>
  )
}
