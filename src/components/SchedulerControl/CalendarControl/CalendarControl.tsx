import styles from './calendar-control.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ILesson, ISubject, IUser } from '@/app/models'

import { CalendarOptions, CalendarGrid } from './'

interface CalendarControlProps {
  startOfWeek: 'sunday' | 'monday'
  selectedYear: number
  setYear: (newValue: number) => void
  selectedMonth: number
  setMonth: (newValue: number) => void
  currentDate: Date
  user?: IUser
  subject?: ISubject
  nearestPaidLesson?: ILesson
}

const CalendarControl: FC<CalendarControlProps> = ({
  startOfWeek,
  selectedYear,
  setYear,
  selectedMonth,
  setMonth,
  currentDate,
  user,
  subject,
  nearestPaidLesson,
}) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const daysOfWeekLocales: { [key: string]: { [key: string]: string[] } } = {
    en: {
      sunday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monday: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    ru: {
      sunday: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      monday: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    },
  };
  
  const getDaysOfWeek = (startOfWeek: 'sunday' | 'monday', language: string): string[] => {
    const daysForLanguage = daysOfWeekLocales[language] || daysOfWeekLocales['en']
    return daysForLanguage[startOfWeek] || daysForLanguage['monday']
  }

  const daysOfWeek = getDaysOfWeek('monday', currentLanguage)
  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate()
  const firstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay()
    return startOfWeek === 'sunday' ? day : (day === 0 ? 6 : day - 1)
  }
  
  const selectedMonthTotalDays = daysInMonth(selectedMonth, selectedYear)
  const selectedMonthStartDay = firstDayOfMonth(selectedMonth, selectedYear)
  const selectedMonthArray = Array.from({ length: selectedMonthTotalDays }, (_, i) => i + 1)

  const totalDaysInPreviousMonth = daysInMonth(
    selectedMonth === 0 ? 11 : selectedMonth - 1,
    selectedMonth === 0 ? selectedYear - 1 : selectedYear
  )

  const previousMonthArray = Array.from(
    { length: selectedMonthStartDay },
    (_, i) => totalDaysInPreviousMonth - selectedMonthStartDay + i + 1
  )
  const nextMonthArray = Array.from(
    { length: (7 - ((selectedMonthStartDay + selectedMonthTotalDays) % 7)) % 7 },
    (_, i) => i + 1
  )
  
  return (
    <>
      <div className={`${styles['calendar-control']}`}>
        <CalendarOptions
          selectedYear={selectedYear}
          setYear={setYear}
          selectedMonth={selectedMonth}
          setMonth={setMonth}
          currentDate={currentDate}
        />
        <CalendarGrid
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          currentDate={currentDate}
          daysOfWeek={daysOfWeek}
          selectedMonthArray={selectedMonthArray}
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