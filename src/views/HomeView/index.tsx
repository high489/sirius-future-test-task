import styles from './home-view.module.scss'

import { 
  AdBanner,
  UpcomingLesson,
  Homework,
  InstructorsReports,
  LessonsBalance,
  NearestLessons,
} from '@/components' 

const HomeView = () => {
  return (
    <>
      <div className={styles['home-view']}>
        <div className={`${styles['block']} ${styles['block1']}`}>{<AdBanner />}</div>
        <div className={`${styles['block']} ${styles['block2']}`}>{<UpcomingLesson />}</div>
        <div className={`${styles['block']} ${styles['block3']}`}>{<Homework />}</div>
        <div className={`${styles['block']} ${styles['block4']}`}>{<InstructorsReports />}</div>
        <div className={`${styles['block']} ${styles['block5']}`}>{<LessonsBalance />}</div>
        <div className={`${styles['block']} ${styles['block6']}`}>{<NearestLessons />}</div>
      </div>
    </>
  )
}

export { HomeView }