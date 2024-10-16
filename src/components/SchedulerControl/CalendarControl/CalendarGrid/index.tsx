import styles from './calendar-grid.module.scss'
import { ILesson, ISubject, IUser } from '@/app/models'
import { FC } from 'react'

import { CalendarDay } from '../'
import { useTranslation } from 'react-i18next'

interface CalendarGridProps {
  selectedYear: number
  selectedMonth: number
  currentDate: Date
  daysOfWeek: string[]
  selectedMonthArray: number[]
  previousMonthArray: number[]
  nextMonthArray: number[]
  user?: IUser | null
  subject?: ISubject
  nearestPaidLesson?: ILesson
}

const CalendarGrid: FC<CalendarGridProps> = ({
  selectedYear,
  selectedMonth,
  currentDate,
  daysOfWeek,
  selectedMonthArray,
  previousMonthArray,
  nextMonthArray,
  user,
  subject,
  nearestPaidLesson,
}) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  const previousMonth = selectedMonth === 0 ? 11 : selectedMonth - 1
  const previousMonthYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear
  const nextMonth = selectedMonth === 11 ? 0 : selectedMonth + 1
  const nextMonthYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear
  
  const lessons = subject?.coursesList.flatMap((course) => course.lessonsList) || []

  const getSubjectDataForDay = (day: number, month: number, year: number) => {
    const calendarDayDate = new Date(year, month, day).setHours(0, 0, 0, 0);
    return {
      subjectName: subject?.name[currentLanguage] || '',
      isCurrentCourse: subject?.coursesList.some(({ courseStartDate, courseEndDate }) => {
        let startDate = new Date(courseStartDate).setHours(0, 0, 0, 0)
        let endDate = new Date(courseEndDate).setHours(0, 0, 0, 0)
        const isAfterStartDate = startDate < calendarDayDate && startDate < currentDate.setHours(0, 0, 0, 0)
        const isBeforeEndDate = endDate >= calendarDayDate && endDate >= currentDate.setHours(0, 0, 0, 0)
        return isAfterStartDate && isBeforeEndDate
      }) || false,
      isPurchasedCourse: subject?.coursesList.filter(({
        courseStartDate, courseEndDate, registeredUsers
      }) => {
        let startDate = new Date(courseStartDate).setHours(0, 0, 0, 0)
        let endDate = new Date(courseEndDate).setHours(0, 0, 0, 0)
        const isAfterStartDate = startDate < calendarDayDate
        const isBeforeEndDate = endDate >= calendarDayDate
        const isCurrentUserRegistered = registeredUsers?.some(({ email }) => email === user?.email)
        return isAfterStartDate && isBeforeEndDate && isCurrentUserRegistered
      }).length !== 0 || false,
      lessons: lessons?.filter(({ lessonStartDate }) => 
        new Date(lessonStartDate).setHours(0, 0, 0, 0) === calendarDayDate),
      nearestPaidLessonStartDate: nearestPaidLesson?.lessonStartDate
      ? new Date(nearestPaidLesson.lessonStartDate)
      : ''
    }
  }

  const handleIsToday = (day: number, month: number, year: number) => {
    return currentDate.getDate() === day && 
    currentDate.getMonth() === month && 
    currentDate.getFullYear() === year
  }

  return (
    <>
    <div className={`${styles['calendar-grid']}`}>
      <div className={`${styles['header-grid']}`}>
        {daysOfWeek.map(day => (
          <div key={day} className={`${styles['week-day-header']}`}>{day}</div>
        ))}
      </div>
      <div className={`${styles['days-grid']}`}>
        {previousMonthArray.map(monthDay => (
          <CalendarDay
            key={`prev-${monthDay}`}
            day={monthDay}
            isToday={handleIsToday(monthDay, previousMonth, previousMonthYear)}
            isCurrentMonth={false}
            subjectDataForDay={getSubjectDataForDay(monthDay, previousMonth, previousMonthYear)}
          />
        ))}
        {selectedMonthArray.map(monthDay => (
          <CalendarDay 
            key={monthDay} 
            day={monthDay} 
            isToday={handleIsToday(monthDay, selectedMonth, selectedYear)}
            isCurrentMonth={true}
            mainStyle={`${styles['grid-cell']}`} 
            subjectDataForDay={getSubjectDataForDay(monthDay, selectedMonth, selectedYear)}
          />
        ))}
        {nextMonthArray.map(monthDay => (
          <CalendarDay
            key={`next-${monthDay}`}
            day={monthDay}
            isToday={handleIsToday(monthDay, nextMonth, nextMonthYear)}
            isCurrentMonth={false}
            subjectDataForDay={getSubjectDataForDay(monthDay, nextMonth, nextMonthYear)}
          />
        ))}
      </div>
    </div>  
    </>
  )
}

export { CalendarGrid }