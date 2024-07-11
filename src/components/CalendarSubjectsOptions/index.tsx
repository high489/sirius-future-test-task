import styles from './calendar-subjects-options.module.scss'
import { FC } from 'react'
import { Option } from '@/app/models'

import { CustomSelect } from '@/ui'

interface CalendarSubjectsOptionsProps {
  selectedSubject: string | string[]
  setSelectedSubject: (newValue: string | string[]) => void
  subjectsOptions: Option[]
}

const CalendarSubjectsOptions: FC<CalendarSubjectsOptionsProps> = ({
  selectedSubject, setSelectedSubject, subjectsOptions,
}) => {
  return (
    <>
      <div className={`${styles['calendar-subjects-options']}`}>
        <CustomSelect
          options={subjectsOptions}
          onChange={setSelectedSubject}
          className={styles['subjects-selector']}
          placeholder='Выбрать предмет'
          value={selectedSubject}
        />
        <button className={styles['change-schedule-button']}>Изменить расписание</button>
      </div>
    </>
  )
}

export { CalendarSubjectsOptions }