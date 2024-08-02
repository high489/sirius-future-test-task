import styles from './calendar-day.module.scss'
import { ILesson } from '@/app/models'
import { FC } from 'react'

import { LessonCard } from '../LessonCard'

interface CalendarDayProps {
  day: number
  isToday: boolean
  isCurrentMonth: boolean
  lessons?: ILesson[]
  subjectName?: string
  mainStyle?: string
}

const CalendarDay: FC<CalendarDayProps> = ({
  day, isToday, isCurrentMonth, lessons, subjectName = '', mainStyle,
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
          {lessons?.map(({ id, courseId, lessonStartDate, lessonEndDate }) => (
            <LessonCard
              key={`${courseId}-${id}`}
              subjectName={subjectName}
              lessonStartDate={lessonStartDate}
              lessonEndDate={lessonEndDate}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export { CalendarDay }