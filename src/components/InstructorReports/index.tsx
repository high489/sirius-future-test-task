import styles from './instructor-reports.module.scss'
import { FC } from 'react'

interface InstructorReportsProps {}

const InstructorReports: FC<InstructorReportsProps> = () => {
  return (
    <>
      <div className={styles['instructor-reports']}>InstructorReports</div>
    </>
  )
}

export { InstructorReports }