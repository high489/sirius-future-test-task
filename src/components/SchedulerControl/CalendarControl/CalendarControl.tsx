import styles from './calendar-control.module.scss'
import { FC } from 'react'
import { ILesson, ISubject, IUser } from '@/app/models'

import { CalendarOptions, CalendarGrid } from './'

interface CalendarControlProps {
  startOfWeek: 'sunday' | 'monday'
  currentYear: number
  setCurrentYear: (newValue: number) => void
  currentMonth: number
  setCurrentMonth: (newValue: number) => void
  currentDate: Date
  user?: IUser
  subject?: ISubject
  nearestPaidLesson?: ILesson
}

const CalendarControl: FC<CalendarControlProps> = ({
  startOfWeek,
  currentYear,
  setCurrentYear,
  currentMonth,
  setCurrentMonth,
  currentDate,
  user,
  subject,
  nearestPaidLesson,
}) => {
  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate()
  const firstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay()
    return startOfWeek === 'sunday' ? day : (day === 0 ? 6 : day - 1)
  }
  
  const daysOfWeek = startOfWeek === 'sunday' 
      ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] 
      : ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const currentMonthTotalDays = daysInMonth(currentMonth, currentYear)
  const currentMonthStartDay = firstDayOfMonth(currentMonth, currentYear)
  const currentMonthArray = Array.from({ length: currentMonthTotalDays }, (_, i) => i + 1)

  const totalDaysInPreviousMonth = daysInMonth(
    currentMonth === 0 ? 11 : currentMonth - 1,
    currentMonth === 0 ? currentYear - 1 : currentYear
  )

  const previousMonthArray = Array.from(
    { length: currentMonthStartDay },
    (_, i) => totalDaysInPreviousMonth - currentMonthStartDay + i + 1
  )
  const nextMonthArray = Array.from(
    { length: (7 - ((currentMonthStartDay + currentMonthTotalDays) % 7)) % 7 },
    (_, i) => i + 1
  )
  
  return (
    <>
      <div className={`${styles['calendar-control']}`}>
        <CalendarOptions
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
        />
        <CalendarGrid
          currentMonth={currentMonth}
          currentYear={currentYear}
          currentDate={currentDate}
          daysOfWeek={daysOfWeek}
          currentMonthArray={currentMonthArray}
          previousMonthArray={previousMonthArray}
          nextMonthArray={nextMonthArray}
          user={user}
          subject={subject}
          nearestPaidLesson={nearestPaidLesson}
        />
      </div>
    </>
  )
}

export { CalendarControl }