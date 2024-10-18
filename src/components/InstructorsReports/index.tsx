import styles from './instructors-reports.module.scss'
import { FC } from 'react'

interface InstructorsReportsProps {}

const InstructorsReports: FC<InstructorsReportsProps> = () => {
  return (
    <>
      <div className={styles['instructors-reports']}>Instructors Reports</div>
    </>
  )
}

export { InstructorsReports }