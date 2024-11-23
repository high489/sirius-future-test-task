import styles from './lessons-legend.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { LessonCard } from '../CalendarControl'

interface LessonsLegendProps {}

const LessonsLegend: FC<LessonsLegendProps> = () => {
  const { t } = useTranslation()
  const tPath = 'components.scheduler-control.lessons-legend'
  return (
    <>
      <div className={styles['lessons-legend']}>
        <div className={styles['lesson']}>
          <div className={styles['card']}>
            <LessonCard
              subjectName={ t(`${tPath}.subject-name`) }
              lessonStartDate='2024-08-14T13:00:00Z'
              lessonEndDate='2024-08-14T14:00:00Z'
              isCurrentCourse={true}
              isPurchasedCourse={true}
              isPaid={false}
              isCanceled={false}
              isFirstLesson={false}
              isNearestLesson={false}
            />
          </div>
          <div className={styles['description']}>{ t(`${tPath}.green-lesson`) }</div>
        </div>
        <div className={styles['lesson']}>
          <div className={styles['card']}>
            <LessonCard
              subjectName={ t(`${tPath}.subject-name`) }
              lessonStartDate='2024-08-14T13:00:00Z'
              lessonEndDate='2024-08-14T14:00:00Z'
              isCurrentCourse={false}
              isPurchasedCourse={true}
              isPaid={false}
              isCanceled={false}
              isFirstLesson={false}
              isNearestLesson={false}
            />
          </div>
          <div className={styles['description']}>{ t(`${tPath}.white-lesson`) }</div>
        </div>
        <div className={styles['lesson']}>
          <div className={styles['card']}>
            <LessonCard
              subjectName={ t(`${tPath}.subject-name`) }
              lessonStartDate='2024-08-14T13:00:00Z'
              lessonEndDate='2024-08-14T14:00:00Z'
              isCurrentCourse={true}
              isPurchasedCourse={true}
              isPaid={false}
              isCanceled={false}
              isFirstLesson={true}
              isNearestLesson={false}
            />
          </div>
          <div className={styles['description']}>{ t(`${tPath}.purple-lesson`) }</div>
        </div>
        <div className={styles['lesson']}>
          <div className={styles['card']}>
            <LessonCard
              subjectName={ t(`${tPath}.subject-name`) }
              lessonStartDate='2024-08-14T13:00:00Z'
              lessonEndDate='2024-08-14T14:00:00Z'
              isCurrentCourse={true}
              isPurchasedCourse={true}
              isPaid={false}
              isCanceled={true}
              isFirstLesson={false}
              isNearestLesson={false}
            />
          </div>
          <div className={styles['description']}>{ t(`${tPath}.gray-lesson`) }</div>
        </div>
        <div className={styles['lesson']}>
          <div className={styles['card']}>
            <LessonCard
              subjectName={ t(`${tPath}.subject-name`) }
              lessonStartDate='2024-08-14T13:00:00Z'
              lessonEndDate='2024-08-14T14:00:00Z'
              isCurrentCourse={false}
              isPurchasedCourse={true}
              isPaid={true}
              isCanceled={false}
              isFirstLesson={false}
              isNearestLesson={false}
            />
          </div>
          <div className={styles['description']}>{ t(`${tPath}.red-lesson`) }</div>
        </div>
        <div className={styles['lesson']} style={{ margin: '0' }}>
          <div className={styles['card']}>
            <LessonCard
              subjectName={ t(`${tPath}.subject-name`) }
              lessonStartDate='2024-08-14T13:00:00Z'
              lessonEndDate='2024-08-14T14:00:00Z'
              isCurrentCourse={false}
              isPurchasedCourse={true}
              isPaid={false}
              isCanceled={false}
              isFirstLesson={false}
              isNearestLesson={true}
            />
          </div>
          <div className={styles['description']}>{ t(`${tPath}.border-lesson`) }</div>
        </div>
      </div>
    </>
  )
}

export { LessonsLegend }