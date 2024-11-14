import styles from './upcoming-lesson.module.scss'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAuth, useDate } from '@/app/hooks'
import { useGetNearestPaidLessonsQuery } from '@/app/store'

import { CountdownTimer } from '@/components'
import { DashedBorderButton } from '@/ui'

interface UpcomingLessonProps {}

const UpcomingLesson: FC<UpcomingLessonProps> = () => {
  const { t } = useTranslation()
  const tPath = 'components.upcoming-lesson'
  const navigate = useNavigate()
  const handleNavigate = () => navigate('/schedule')

  const startDate = useDate()
  const { user } = useAuth()
  const [ endDate, setEndDate ] = useState<Date | null>(null)
  const { data: nearestPaidLessons, refetch } = useGetNearestPaidLessonsQuery({
    subjectKey: 'test_subject', // for demonstration
    user: user,
    fromDate: startDate.toISOString(),
  })

  useEffect(() => {
    if (user) refetch()
  }, [user, refetch])

  useEffect(() => {
    if (nearestPaidLessons && nearestPaidLessons.length > 0) {
      setEndDate(new Date(nearestPaidLessons[0].lessonStartDate))
    }
  }, [nearestPaidLessons])

  return (
    <div className={styles['upcoming-lesson']}>
      <h5 className={styles['upcoming-lesson-title']}>
        { t(`${tPath}.title`) }
      </h5>

      <CountdownTimer
        startDate={startDate}
        endDate={endDate || startDate}
        styles={{
          countdownTimer: styles['countdown-timer'],
          timerBlock: styles['timer-block'],
          days: styles['days'],
          hours: styles['hours'],
          minutes: styles['minutes'],
          seconds: styles['seconds'],
          number: styles['number'],
          digit: styles['digit'],
          text: styles['text'],
        }}
        timerWordsLength={{
          daysWordLength: 1,
          hoursWordLength: 1,
          minutesWordLength: 3,
          secondsWordLength: 3,
        }}
      />

      <DashedBorderButton
        buttonText={ t(`${tPath}.btn-text`) }
        onClick={handleNavigate}
        width='220px'
        height='48px'
        padding='10px 70px'
        backgroundColor='transparent'
        borderRadius='30px'
        roundedCornersSVG='24px'
        color='var(--dark)'
        fontSize='16px'
        fontWeight='400'
        lineHeight='135%'
        stroke='var(--dark)'
        strokeWidth='2px'
        strokeDasharray='8, 5'
      />
    </div>
  )
}

export { UpcomingLesson }