import styles from './nearest-lessons.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth, useDate } from '@/app/hooks'
import { useGetNearestPaidLessonsQuery } from '@/app/store'

import { NearestLessonsList } from './NearestLessonsList'

interface NearestLessonsProps {}

const NearestLessons: FC<NearestLessonsProps> = () => {
  const { t } = useTranslation()
  const tPath = 'components.nearest-lessons'
  const { user } = useAuth()
  const currentDate = useDate()
  const { data: nearestPaidLessons = [] } = useGetNearestPaidLessonsQuery({
    user: user,
    fromDate: currentDate.toISOString(),
    numberOfLessons: 3,
  })
  
  return (
    <>
      <div className={styles['nearest-lessons']}>
        <h2 className={styles['title']}>{ t(`${tPath}.title`) }</h2>
        <NearestLessonsList nearestPaidLessons={nearestPaidLessons}/>
      </div>
    </>
  )
}

export { NearestLessons }