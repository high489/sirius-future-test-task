import styles from './calendar-grid.module.scss'
import { FC } from 'react'

import { CalendarDay } from '../'

interface CalendarGridProps {
  currentMonth: number
  currentYear: number
  daysOfWeek: string[]
  currentMonthArray: number[]
  previousMonthArray: number[]
  nextMonthArray: number[]
  today: Date
}

const CalendarGrid: FC<CalendarGridProps> = ({
  currentMonth,
  currentYear,
  daysOfWeek,
  currentMonthArray,
  previousMonthArray,
  nextMonthArray,
  today,
}) => {
  return (
    <>
    <div className={`${styles['calendar-grid']}`}>
      <div className={`${styles['header-grid']}`}>
        {daysOfWeek.map(day => (
          <div key={day} className={`${styles['week-day-header']}`}>{day}</div>
        ))}
      </div>
      <div className={`${styles['days-grid']}`}>
        {previousMonthArray.map(day => (
          <CalendarDay key={`prev-${day}`} day={day} isToday={false} isCurrentMonth={false} />
        ))}
        {currentMonthArray.map(monthDay => (
          <CalendarDay 
            key={monthDay} 
            day={monthDay} 
            isToday={today.getDate() === monthDay && 
              today.getMonth() === currentMonth && 
              today.getFullYear() === currentYear}
            isCurrentMonth={true}
            className={`${styles['grid-cell']}`} 
          />
        ))}
        {nextMonthArray.map(day => (
          <CalendarDay key={`next-${day}`} day={day} isToday={false} isCurrentMonth={false} />
        ))}
      </div>
    </div>  
    </>
  )
}

export { CalendarGrid }