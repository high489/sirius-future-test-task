import styles from './language-selector.module.scss'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageSelectorProps {

}

const LanguageSelector: FC<LanguageSelectorProps> = () => {
  const [activeLanguage, setActiveLanguage] = useState('en')
  const { i18n } = useTranslation()

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <div className={`${styles['language-selector']}`}>
      <div
        className={`${styles['language-option']} ${activeLanguage === 'en' ? styles['active'] : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </div>
      <div
        className={`${styles['language-option']} ${activeLanguage === 'ru' ? styles['active'] : ''}`}
        onClick={() => handleLanguageChange('ru')}
      >
        RU
      </div>
    </div>
  )
}

export { LanguageSelector }