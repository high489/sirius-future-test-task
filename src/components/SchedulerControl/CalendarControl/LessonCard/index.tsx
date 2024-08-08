import styles from './lesson-card.module.scss'
import { FC } from 'react'

interface LessonCardProps {
  subjectName: string
  lessonStartDate: string | Date
  lessonEndDate: string | Date
  isCurrentCourse: boolean
}

const LessonCard: FC<LessonCardProps> = ({
  subjectName, lessonStartDate, lessonEndDate, isCurrentCourse,
}) => {
  const startTime = new Date(lessonStartDate).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })
  const endTime = new Date(lessonEndDate).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })

  return (
    <div className={`${styles['lesson-card']} ${isCurrentCourse ? styles['current-course'] : ''}`}>
      <div className={`${styles['lesson-time']}`}>{`${startTime}-${endTime}`}</div>
      <div className={`${styles['subject-name']}`}>{subjectName}</div>
    </div>
  )
}

export { LessonCard }