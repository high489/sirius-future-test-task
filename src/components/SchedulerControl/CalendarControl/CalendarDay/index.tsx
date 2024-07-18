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
    <div className={`
        ${className}
        ${styles['calendar-day']}
        ${isToday ? styles.today : ''} 
        ${!isCurrentMonth ? styles['not-current-month'] : ''}
      `}>
      <span className="day-number">{day}</span>
    </div>
    </>
  )
}

export { CalendarDay }