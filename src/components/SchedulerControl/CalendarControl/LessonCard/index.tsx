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
}

const LessonCard: FC<LessonCardProps> = ({
  subjectName, lessonStartDate, lessonEndDate, isCurrentCourse, isPurchasedCourse, isPaid, isCanceled,
}) => {
  const startTime = new Date(lessonStartDate).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })
  const endTime = new Date(lessonEndDate).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })

  const classNames = [
    styles['lesson-card'],
    isCurrentCourse && styles['current-course'],
    isPaid && !isCurrentCourse && styles['paid'],
    isCanceled && styles['canceled'],
    isPaid && !isPurchasedCourse && styles['not-purchased'],
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      <div className={`${styles['lesson-time']}`}>{`${startTime}-${endTime}`}</div>
      <div className={`${styles['subject-name']}`}>{subjectName}</div>
      {isPaid && (
        <div className={`${styles['paid-icon']}`}>
          <PaidIcon />
        </div>
      )}
    </div>
  )
}

export { LessonCard }