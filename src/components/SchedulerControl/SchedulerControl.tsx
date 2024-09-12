import styles from './scheduler-control.module.scss'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector, useAuth } from '@/app/hooks'
import {
  setSchedulerMetaData,
  useGetSubjectsKeysQuery, 
  useGetSubjectByKeyQuery, 
  useGetNearestPaidLessonQuery,
} from '@/app/store'
import { SubjectsOptions, CalendarControl } from './'

const SchedulerControl = () => {
  const dispatch = useAppDispatch()
  const { user } = useAuth()
  // const currentDate = new Date()
  const currentDate = new Date('2024-08-14T13:00:00Z') // for demonstration
  const { 
    selectedYear, 
    selectedMonth, 
    selectedSubjectKey,
  } = useAppSelector((state) => state.scheduler.schedulerMetaData)

  const { data: subjectsOptions = [] } = useGetSubjectsKeysQuery()
  const { data: selectedSubject } = useGetSubjectByKeyQuery(selectedSubjectKey)
  const { data: nearestPaidLesson } = useGetNearestPaidLessonQuery({
    subjectKey: selectedSubjectKey,
    user: user,
    fromDate: currentDate.toISOString(),
  })

  useEffect(() => {
    dispatch(setSchedulerMetaData({
      selectedYear: selectedYear ?? currentDate.getFullYear(),
      selectedMonth: selectedMonth ?? currentDate.getMonth(),
      selectedSubjectKey: selectedSubjectKey || 'test_subject',
    }))
  }, [dispatch, selectedYear, selectedMonth, selectedSubjectKey, currentDate])

  const handleYearChange = (newYear: number) => {
    dispatch(setSchedulerMetaData({ selectedYear: newYear }))
  }

  const handleMonthChange = (newMonth: number) => {
    dispatch(setSchedulerMetaData({ selectedMonth: newMonth }))
  }

  const handleSubjectChange = (newSubjectKey: string | string[]) => {
    if (typeof newSubjectKey === 'string')
      dispatch(setSchedulerMetaData({ selectedSubjectKey: newSubjectKey }))
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
          selectedYear={selectedYear ?? currentDate.getFullYear()}
          setYear={handleYearChange}
          selectedMonth={selectedMonth ?? currentDate.getMonth()}
          setMonth={handleMonthChange}
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