import { useTranslation } from 'react-i18next'
import { Contact } from '@/components/site/Contact'
import { Faq } from '@/components/site/Faq'
import { Footer } from '@/components/site/Footer'
import { Header } from '@/components/site/Header'
import { Hero } from '@/components/site/Hero'
import { Process } from '@/components/site/Process'
import { Services } from '@/components/site/Services'
import { TrustStrip } from '@/components/site/TrustStrip'
import { Work } from '@/components/site/Work'
import { WhyUs } from '@/components/site/WhyUs'

export default function App() {
  const { t } = useTranslation()
  return (
    <>
      <a href="#main" className="sr-only z-50 rounded-full bg-signal px-4 py-2 font-medium text-signal-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        {t('common.skip')}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Work />
        <WhyUs />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
