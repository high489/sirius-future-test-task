import styles from './lessons-balance.module.scss'
import { FC } from 'react'

interface LessonsBalanceProps {}

const LessonsBalance: FC<LessonsBalanceProps> = () => {
  return (
    <>
      <div className={styles['lessons-balance']}>LessonsBalance</div>
    </>
  )
}

export { LessonsBalance }