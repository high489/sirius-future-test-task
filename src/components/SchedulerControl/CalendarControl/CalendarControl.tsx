import styles from './calendar-control.module.scss'
import { ISubject } from '@/app/models'
import { FC, useState } from 'react'

import { CalendarOptions, CalendarGrid } from './'

interface CalendarControlProps {
  startOfWeek: 'sunday' | 'monday'
  subject?: ISubject
}

const CalendarControl: FC<CalendarControlProps> = ({ startOfWeek, subject }) => {
  // const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())
  // const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())
  // const today = new Date()
  const [currentMonth, setCurrentMonth] = useState<number>(7)
  const [currentYear, setCurrentYear] = useState<number>(2024)
  const today = new Date('2024-08-15T00:00:00Z')

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
          daysOfWeek={daysOfWeek}
          currentMonthArray={currentMonthArray}
          previousMonthArray={previousMonthArray}
          nextMonthArray={nextMonthArray}
          today={today}
          subject={subject}
        />
      </div>
    </>
  )
}

export { CalendarControl }