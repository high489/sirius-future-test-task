import styles from './scheduler-control.module.scss'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector, useAuth, useDate } from '@/app/hooks'
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
  const currentDate = useDate()
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

  // need to refactor
  // const loadSchedulerMetaData = useCallback(() => {
  //   if (persistentUser) {
  //     const year = persistentUser.metaData.schedulerMetaData.selectedYear
  //     const month = persistentUser.metaData.schedulerMetaData.selectedMonth
  //     const selectedSubject = persistentUser.metaData.schedulerMetaData.selectedSubjectKey
  //     dispatch(setSchedulerMetaData({
  //       selectedYear: year ?? currentDate.getFullYear(),
  //       selectedMonth: month ?? currentDate.getMonth(),
  //       selectedSubjectKey: selectedSubject || 'test_subject',
  //     }))
  //   } else {
  //     dispatch(setSchedulerMetaData({
  //       selectedYear: selectedYear ?? currentDate.getFullYear(),
  //       selectedMonth: selectedMonth ?? currentDate.getMonth(),
  //       selectedSubjectKey: selectedSubjectKey || 'test_subject',
  //     }))
  //   }
  // }, [persistentUser, selectedYear, selectedMonth, selectedSubjectKey, currentDate, dispatch])

  // const saveSchedulerMetaDataOfPersistentUser = useCallback(() => {
  //   if (persistentUser && user) {
  //     dispatch(updatePersistentUserMetaDataById({
  //       userId: user.id,
  //       metaData: {
  //         schedulerMetaData: {
  //           selectedYear,
  //           selectedMonth,
  //           selectedSubjectKey,
  //         },
  //       },
  //     }))
  //   }
  // }, [persistentUser, user, selectedYear, selectedMonth, selectedSubjectKey, dispatch])

  // useEffect(() => {
  //   loadSchedulerMetaData()
  // }, [])

  // useEffect(() => {
  //   loadSchedulerMetaData()
  //   return () => {
  //     saveSchedulerMetaDataOfPersistentUser()
  //   }
  // }, [user])

  // useEffect(() => {
  //   return () => {
  //     saveSchedulerMetaDataOfPersistentUser()
  //   }
  // }, [])

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