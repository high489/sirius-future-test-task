import styles from './scheduler-control.module.scss'
import { useEffect, useState } from 'react'

import { useGetSubjectsKeysQuery, useGetSubjectByKeyQuery } from '@/app/store'
import { SubjectsOptions, CalendarControl } from './'

const SchedulerControl = () => {
  const [ selectedSubjectKey, setSelectedSubject ] = useState<string>('')
  const { data: subjectsOptions = [] } = useGetSubjectsKeysQuery()
  const { data: selectedSubject } = useGetSubjectByKeyQuery(selectedSubjectKey)

  useEffect(() => {
    setSelectedSubject('test_subject')
  }, [])

  const handleSubjectChange = (value: string | string[]) => {
    if (typeof value === 'string') setSelectedSubject(value)
  }

  return (
    <>
      <div className={`${styles['scheduler-control']}`}>
        <SubjectsOptions
          selectedSubject={selectedSubjectKey}
          setSelectedSubject={handleSubjectChange}
          subjectsOptions={subjectsOptions}
        />
        <CalendarControl 
          startOfWeek='monday'
          subject={selectedSubject}
        />
      </div>
    </>
  )
}

export { SchedulerControl }