import styles from './calendar-options.module.scss'
import { FC } from 'react'

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
      <button onClick={handlePreviousMonth}>Previous</button>
      <span>{`
        ${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}
        ${currentYear}
      `}</span>
      <button onClick={handleNextMonth}>Next</button>
      <button onClick={handleToday}>Today</button>
    </div>
    </>
  )
}

export { CalendarOptions }