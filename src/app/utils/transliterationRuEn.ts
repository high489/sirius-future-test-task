import { transliterate } from 'transliteration'

const transliterationRuEn = (input: string, currentLanguage: string): string => {
  if (/[а-яА-ЯёЁ]/.test(input) && currentLanguage === 'en') {
    return transliterate(input)
  }
  return input
}

export { transliterationRuEn }