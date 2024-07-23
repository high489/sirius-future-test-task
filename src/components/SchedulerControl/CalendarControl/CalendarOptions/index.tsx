import styles from './calendar-options.module.scss'
import { FC } from 'react'

import ArrowIcon from './assets/arrow-icon.svg?react'
import QuestionsIcon from './assets/questions-icon.svg?react'

interface CalendaroptionsProps {
  currentMonth: number
  setCurrentMonth: (newValue: number) => void
  currentYear: number
  setCurrentYear: (newValue: number) => void
}

const CalendarOptions: FC<CalendaroptionsProps> = ({
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear
}) => {
  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const handleToday = () => {
    const today = new Date()
    setCurrentMonth(today.getMonth())
    setCurrentYear(today.getFullYear())
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
          ${new Date(currentYear, currentMonth)
            .toLocaleString('ru-RU', { month: 'long' })
            .split('')
            .map((l, i) => i === 0 ? l.toUpperCase() : l )
            .join('')}
          ${currentYear}
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
          Сегодня
        </button>
        <div className={`${styles.questions}`}>
          <QuestionsIcon />
        </div>
      </div>
    </div>
    </>
  )
}

export { CalendarOptions }