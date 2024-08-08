import styles from './calendar-grid.module.scss'
import { ISubject } from '@/app/models'
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
  subject?: ISubject
}

const CalendarGrid: FC<CalendarGridProps> = ({
  currentMonth,
  currentYear,
  daysOfWeek,
  currentMonthArray,
  previousMonthArray,
  nextMonthArray,
  today,
  subject,
}) => {
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1
  const previousMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1
  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear
  
  const lessons = subject?.coursesList.flatMap((course) => course.lessonsList) || []

  const getSubjectDataForDay = (day: number, month: number, year: number) => {
    const calendarDayDate = new Date(year, month, day)
    return {
      subjectName: subject?.name || '',
      isCurrentCourse: subject?.coursesList.some(({ courseStartDate, courseEndDate }) => {
        let startDate = new Date(courseStartDate)
        let endDate = new Date(courseEndDate)
        const isWithinStartDate = startDate <= calendarDayDate && startDate <= today
        const isWithinEndDate = endDate >= calendarDayDate && endDate >= today
        return isWithinStartDate && isWithinEndDate
      }) || false,
      lessons: lessons?.filter(({ lessonStartDate }) =>
        new Date(lessonStartDate).getDate() === day &&
        new Date(lessonStartDate).getMonth() === month &&
        new Date(lessonStartDate).getFullYear() === year
      ),
    }
  }

  const handleIsToday = (day: number, month: number, year: number) => {
    return today.getDate() === day && 
    today.getMonth() === month && 
    today.getFullYear() === year
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
        {currentMonthArray.map(monthDay => (
          <CalendarDay 
            key={monthDay} 
            day={monthDay} 
            isToday={handleIsToday(monthDay, currentMonth, currentYear)}
            isCurrentMonth={true}
            mainStyle={`${styles['grid-cell']}`} 
            subjectDataForDay={getSubjectDataForDay(monthDay, currentMonth, currentYear)}
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