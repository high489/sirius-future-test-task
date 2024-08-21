import styles from './lesson-card.module.scss'
import { FC } from 'react'

import PaidIcon from './assets/paid-icon.svg?react'

interface LessonCardProps {
  lessonStartDate: string | Date
  lessonEndDate: string | Date
  subjectName: string
  isCurrentCourse: boolean
  isPurchasedCourse: boolean
  isPaid: boolean
  isCanceled: boolean
  isFirstLesson: boolean
}

const LessonCard: FC<LessonCardProps> = ({
  subjectName,
  lessonStartDate,
  lessonEndDate,
  isCurrentCourse,
  isPurchasedCourse,
  isPaid,
  isCanceled,
  isFirstLesson,
}) => {
  const startTime = new Date(lessonStartDate).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })
  const endTime = new Date(lessonEndDate).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })

  const classNames = [
    isCurrentCourse && styles['current-course'],
    isFirstLesson && styles['first-lesson'],
    isPaid && !isCurrentCourse && styles['paid-border'],
    isPaid && !isPurchasedCourse && styles['not-purchased'],
    isCanceled && styles['canceled'],
  ].filter(Boolean).join(' ')

  return (
    <div className={`${styles['lesson-card-wrapper']}`}>
      <div className={`${styles['lesson-card']} ${classNames}`}>
        <div className={`${styles['lesson-time']}`}>{`${startTime}-${endTime}`}</div>
        <div className={`${styles['subject-name']}`}>{subjectName}</div>
        {isPaid && (
          <div className={`${styles['paid-icon']}`}>
            <PaidIcon />
          </div>
        )}
      </div>
    </div>
  )
}

export { LessonCard }