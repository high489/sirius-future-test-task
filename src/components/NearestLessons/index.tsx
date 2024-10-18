import styles from './nearest-lessons.module.scss'
import { FC } from 'react'

interface NearestLessonsProps {}

const NearestLessons: FC<NearestLessonsProps> = () => {
  return (
    <>
      <div className={styles['nearest-lessons']}>Nearest Lessons</div>
    </>
  )
}

export { NearestLessons }