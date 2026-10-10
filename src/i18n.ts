import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/locales/en.json'
import vi from '@/locales/vi.json'

export const languages = ['vi', 'en'] as const
export type Language = (typeof languages)[number]

const STORAGE_KEY = 'vadanha-lang'

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'vi' || saved === 'en') return saved
  } catch {
    // storage unavailable: fall back to the default
  }
  return 'vi'
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, vi: { translation: vi } },
  lng: initialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

// Keep the document language, title and description in sync with the active language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.title = i18n.t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.description'))
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // ignore
  }
})
i18n.emit('languageChanged', i18n.language)

export default i18n
