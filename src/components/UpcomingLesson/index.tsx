import styles from './upcoming-lesson.module.scss'
import { FC } from 'react'

interface UpcomingLessonProps {}

const UpcomingLesson: FC<UpcomingLessonProps> = () => {
  return (
    <>
      <div className={styles['upcoming-lesson']}>Upcoming Lesson</div>
    </>
  )
}

export { UpcomingLesson }