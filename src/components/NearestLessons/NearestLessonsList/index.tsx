import styles from './nearest-lessons-list.module.scss'
import { ILesson } from '@app/models'
import { FC, Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { transliterationRuEn } from '@app/utils'

import InstructorIcon from '@app/assets/icons/instructor-icon.svg?react'
import { CustomToggle, StandardButton } from '@/ui'

interface NearestLessonsListItem extends ILesson {
  subjectKey: string
  subjectName: { [key: string]: string }
  instructor: string
}

interface NearestLessonsListProps {
  nearestPaidLessons: NearestLessonsListItem[] | null
}

const NearestLessonsList: FC<NearestLessonsListProps> = ({ nearestPaidLessons }) => {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()
  const tPath = 'components.nearest-lessons.list'
  const currentLanguage = i18n.language
  const locales: { [key: string]: string } = {
    en: 'en-US',
    ru: 'ru-RU',
  }
  const getLocale = (language: string): string => locales[language] || 'en-US'

  // local state for demonstration of CustomToggle work
  const [toggleItems, setToggleItems] = useState<Record<number, { value: boolean; mode: 'standard' | 'disabled' | 'alwaysOn' | 'alwaysOff' }>>({
    0: { value: false, mode: 'standard' },
    1: { value: true, mode: 'alwaysOn' },
    2: { value: true, mode: 'disabled' },
  })

  // handle for changing CustomToggle
  const handleToggleChange = (index: number) => {
    setToggleItems((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        value: !prevState[index].value,
      },
    }))
  }
  
  return (
    <>
      <div className={styles['nearest-lessons-list']}>
        <div className={styles['list']}>
          {nearestPaidLessons?.map((lesson, index) => {
            // after decomposition for 'ru-RU' datePart1 is day, datePart2 is month (1 мая)
            // after decomposition for 'en-US' datePart1 is month, datePart2 is day (May 1)
            const [ datePart1, datePart2 ] = new Date(lesson.lessonStartDate)
              // the month name ending in Russian is correct:
              .toLocaleString(getLocale(currentLanguage), { day: 'numeric', month: 'long' })
              .split(' ')
            const lessonStartDay = getLocale(currentLanguage) === 'ru-RU' ? datePart1 : datePart2
            const lessonStartMonth = getLocale(currentLanguage) === 'ru-RU' ? datePart2 : datePart1
            
            return (
              <Fragment key={index}>
                <div className={styles['list-item']}>
                  <div className={styles['date-subject-wrapper']}>
                    <div className={styles['date']}>
                      <div className={styles['day']}>{lessonStartDay.toLowerCase()}</div>
                      <div className={styles['month']}>{lessonStartMonth}</div>
                    </div>
                    <div className={styles['subject']}>{lesson.subjectName[currentLanguage]}</div>
                  </div>
  
                  <div className={styles['time-instructor-wrapper']}>
                    <div className={styles['time']}>
                      <span className={styles['start-time']}>
                        {new Date(lesson.lessonStartDate).toLocaleTimeString(
                          getLocale(currentLanguage), 
                          { timeZone: 'UTC', hour12: false, hour: '2-digit', minute: '2-digit' }
                        )}
                      </span>
                      -
                      <span className={styles['end-time']}>
                        {new Date(lesson.lessonEndDate).toLocaleTimeString(
                          getLocale(currentLanguage), 
                          { timeZone: 'UTC', hour12: false, hour: '2-digit', minute: '2-digit' }
                        )}
                      </span>
                    </div>
                    <div className={styles['instructor']}>
                      <div className={styles['icon']}>{<InstructorIcon />}</div>
                      <div className={styles['full-name']}>
                        {transliterationRuEn(lesson.instructor, currentLanguage)}
                      </div>
                    </div>
                  </div>
  
                  <div className={styles['toggle']}>
                    {
                      <CustomToggle
                        toggleOnText={ t(`${tPath}.toggle-on-text`) }
                        toggleOffText={ t(`${tPath}.toggle-off-text`) }
                        value={toggleItems[index]?.value}
                        onChange={() => handleToggleChange(index)}
                        mode={toggleItems[index]?.mode}
                      />
                    }
                  </div>
                </div>
                {((nearestPaidLessons.length-1) !== index) && (
                  <div className={styles['separator']}></div>
                )}
              </Fragment>
            )
          })}
        </div>
        <StandardButton
          buttonText={ t(`${tPath}.btn-text`) }
          onClick={() => navigate('/schedule')}
          width='344px'
          height='40px'
          padding='10px 40px'
        />
      </div>
    </>
  )
}

export { NearestLessonsList }