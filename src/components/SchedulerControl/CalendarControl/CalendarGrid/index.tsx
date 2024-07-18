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
        {daysOfWeek.map(day => (
          <div key={day} className={`${styles['grid-cell-header']}`}>{day}</div>
        ))}
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
    </>
  )
}

export { CalendarGrid }