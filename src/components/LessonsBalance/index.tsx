import styles from './lessons-balance.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth, useDate } from '@/app/hooks'
import { useGetLessonsBalanceQuery } from '@/app/store'

import { LessonsBalanceList } from './LessonsBalanceList'

interface LessonsBalanceProps {}

const LessonsBalance: FC<LessonsBalanceProps> = () => {
  const { t, i18n } = useTranslation()
  const tPath = 'components.lessons-balance'
  const currentLanguage = i18n.language
  const { user } = useAuth()
  const currentDate = useDate()

  const { data: lessonsBalance = [] } = useGetLessonsBalanceQuery({
    user,
    fromDate: currentDate.toISOString(),
    currentLanguage,
  })

  return (
    <div className={styles['lessons-balance']}>
      <h2 className={styles['title']}>{ t(`${tPath}.title`) }</h2>
      <LessonsBalanceList lessonsBalance={lessonsBalance}/>
    </div>
  )
}

export { LessonsBalance }