import styles from './calendar-day.module.scss'
import { FC } from 'react'

interface CalendarDayProps {
  day: number
  isToday: boolean
  isCurrentMonth: boolean
  className?: string
}

const CalendarDay: FC<CalendarDayProps> = ({ day, isToday, isCurrentMonth, className }) => {
  return (
    <>
      <div 
        className={`
          ${className}
          ${styles['calendar-day']}
        `}
      >
        <div className={
          isToday
          ? styles.today
          : !isCurrentMonth
            ? styles['not-current-month']
            : styles['day-number']
        }>
          {day}
        </div>
        <div className={styles.lessons}></div>
      </div>
    </>
  )
}

export { CalendarDay }