import { useTranslation } from 'react-i18next'
import { transliterate } from 'transliteration'

const useTransliterationRuEn = (input: string) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  return /[а-яА-ЯёЁ]/.test(input) && currentLanguage === 'en' 
    ? transliterate(input) 
    : input
}

export { useTransliterationRuEn }