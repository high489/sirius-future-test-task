import styles from './calendar-day.module.scss'
import { ILesson } from '@/app/models'
import { FC } from 'react'

import { LessonCard } from '../LessonCard'

interface CalendarDayProps {
  day: number
  isToday: boolean
  isCurrentMonth: boolean
  mainStyle?: string
  subjectDataForDay?: {
    subjectName: string
    isCurrentCourse: boolean
    isPurchasedCourse: boolean
    lessons: ILesson[]
  }
}

const CalendarDay: FC<CalendarDayProps> = ({
  day, isToday, isCurrentMonth, subjectDataForDay, mainStyle,
}) => {
  return (
    <>
      <div 
        className={`
          ${mainStyle}
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
        <div className={styles.lessons}>
          {subjectDataForDay?.lessons.map(({ 
            id, courseId, lessonStartDate, lessonEndDate, isPaid, isCanceled,
          }) => (
            <LessonCard
              key={`${courseId}-${id}`}
              lessonStartDate={lessonStartDate}
              lessonEndDate={lessonEndDate}
              subjectName={subjectDataForDay.subjectName}
              isCurrentCourse={subjectDataForDay.isCurrentCourse}
              isPurchasedCourse={subjectDataForDay.isPurchasedCourse}
              isPaid={isPaid}
              isCanceled={isCanceled}
              isFirstLesson={id === 1}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export { CalendarDay }