import styles from './calendar-options.module.scss'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ArrowIcon from './assets/arrow-icon.svg?react'
import QuestionsIcon from './assets/questions-icon.svg?react'

interface CalendaroptionsProps {
  selectedYear: number
  setYear: (newValue: number) => void
  selectedMonth: number
  setMonth: (newValue: number) => void
  currentDate: Date
}

const CalendarOptions: FC<CalendaroptionsProps> = ({
  selectedYear,
  setYear,
  selectedMonth,
  setMonth,
  currentDate,
}) => {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.language
  const tPath = 'components.scheduler-control.calendar-control.calendar-options'

  const locales: { [key: string]: string } = {
    en: 'en-US',
    ru: 'ru-RU',
  }

  const getLocale = (language: string): string => locales[language] || 'en-US'

  const handlePreviousMonth = () => {
    if (selectedMonth === 0) {
      setMonth(11)
      setYear(selectedYear - 1)
    } else {
      setMonth(selectedMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setMonth(0)
      setYear(selectedYear + 1)
    } else {
      setMonth(selectedMonth + 1)
    }
  }

  const handleToday = () => {
    setMonth(currentDate.getMonth())
    setYear(currentDate.getFullYear())
  }

  return (
    <>
    <div className={`${styles['calendar-options']}`}>
      <div className={`${styles['month-selector']}`}>
        <div 
          className={`${styles.arrow}`}
          onClick={handlePreviousMonth}
        >
          <ArrowIcon />
        </div>
        <span
          className={styles['month-year']}
        >{`
          ${new Date(selectedYear, selectedMonth)
            .toLocaleString(getLocale(currentLanguage), { month: 'long' })
            .split('')
            .map((l, i) => i === 0 ? l.toUpperCase() : l )
            .join('')}
          ${selectedYear}
        `}</span>
        <div 
          className={`${styles.arrow} ${styles.next}`}
          onClick={handleNextMonth}
        >
          <ArrowIcon />
        </div>
      </div>

      <div className={`${styles['other-options']}`}>
        <button 
          className={`${styles['today-button']}`}
          onClick={handleToday}
        >
          { t(`${tPath}.today-btn-text`) }
        </button>
        <div 
          className={`${styles.questions}`}
          onClick={() => navigate('/calendar-legend')}
        >
          <QuestionsIcon />
        </div>
      </div>
    </div>
    </>
  )
}

export { CalendarOptions }