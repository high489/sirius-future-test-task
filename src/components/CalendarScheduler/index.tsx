import styles from './calendar-scheduler.module.scss'

import { CalendarSchedulerGrid, CalendarSchedulerOptions } from '@/components'

const CalendarScheduler = () => {
  return (
    <>
      <div className={`${styles['calendar-scheduler']}`}>
        <CalendarSchedulerOptions />
        <CalendarSchedulerGrid />
      </div>
    </>
  )
}

export { CalendarScheduler }