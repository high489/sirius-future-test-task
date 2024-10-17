import styles from './homework.module.scss'
import { FC } from 'react'

interface HomeworkProps {}

const Homework: FC<HomeworkProps> = () => {
  return (
    <>
      <div className={styles['homework']}>Homework</div>
    </>
  )
}

export { Homework }