import styles from './scheduler-control.module.scss'
import { useState } from 'react'

// import { useGetSubjectsKeysQuery, useGetSubjectByKeyQuery } from '@/app/store'
import { useGetSubjectsKeysQuery } from '@/app/store'
import { SubjectsOptions, CalendarControl } from './'

const SchedulerControl = () => {
  const [ selectedSubjectKey, setSelectedSubject ] = useState<string>('')
  const { data: subjectsOptions = [] } = useGetSubjectsKeysQuery()
  // const { data: selectedSubject } = useGetSubjectByKeyQuery(selectedSubjectKey)

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
        />
        {/* {selectedSubject && selectedSubject.name}
        {selectedSubject && selectedSubject.coursesList.map(course => {
          return (
            <div>
              <div>курс: {course.id}</div>
              <div>преподаватель: {course.instructor}</div>
              <div>дата начала: {course.startDate.toString()}</div>
              <div>дата окончания: {course.endDate.toString()}</div>
            </div>
          )
        })} */}
      </div>
    </>
  )
}

export { SchedulerControl }