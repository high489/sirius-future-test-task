import styles from './scheduler-control.module.scss'
import { useEffect, useState } from 'react'

import { useAuth } from '@/app/hooks'
import { useGetSubjectsKeysQuery, useGetSubjectByKeyQuery, useGetNearestPaidLessonQuery } from '@/app/store'
import { SubjectsOptions, CalendarControl } from './'

const SchedulerControl = () => {
  // const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())
  // const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())
  // const currentDate = new Date()
  const [currentMonth, setCurrentMonth] = useState<number>(7)
  const [currentYear, setCurrentYear] = useState<number>(2024)
  const currentDate = new Date('2024-08-14T13:00:00Z')
  const { user } = useAuth()
  const [ selectedSubjectKey, setSelectedSubject ] = useState<string>('')
  const { data: subjectsOptions = [] } = useGetSubjectsKeysQuery()
  const { data: selectedSubject } = useGetSubjectByKeyQuery(selectedSubjectKey)
  const { data: nearestPaidLesson } = useGetNearestPaidLessonQuery({
    subjectKey: selectedSubjectKey,
    user: user,
    fromDate: currentDate,
  })

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
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentDate={currentDate}
          user={user || undefined}
          subject={selectedSubject}
          nearestPaidLesson={nearestPaidLesson || undefined}
        />
      </div>
    </>
  )
}

export { SchedulerControl }