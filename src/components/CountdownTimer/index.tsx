import { FC, useEffect, useState } from 'react'
import { getLocalizedUnit } from './timeLocalization'
import { useTranslation } from 'react-i18next'

interface CountdownTimerProps {
  startDate: string | Date
  endDate: string | Date
  styles: {
    countdownTimer?: string
    timerBlock?: string
    days?: string
    hours?: string
    minutes?: string
    seconds?: string
    number?: string
    text?: string
  }
  timerWordsLength: {
    daysWordLength?: number
    hoursWordLength?: number
    minutesWordLength?: number
    secondsWordLength?: number
  }
}

const CountdownTimer: FC<CountdownTimerProps> = ({ 
  startDate, endDate, styles, timerWordsLength,
}) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  
  const calculateTimeToEnd = (timeRemaining: number) => {
    const total = Math.max(timeRemaining, 0)
    return {
      total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    }
  }

  const calculateInitialDisplayTime = () => {
    const initialTimeToEnd = new Date(endDate).getTime() - new Date(startDate).getTime()
    const initialFullTime = calculateTimeToEnd(initialTimeToEnd)
    return initialFullTime.days < 1
      ? { hours: initialFullTime.hours, minutes: initialFullTime.minutes, seconds: initialFullTime.seconds }
      : { days: initialFullTime.days, hours: initialFullTime.hours, minutes: initialFullTime.minutes }
  }

  const [, setFullTime] = useState(() =>
    calculateTimeToEnd(new Date(endDate).getTime() - new Date(startDate).getTime())
  )
  
  const [displayTime, setDisplayTime] = useState(calculateInitialDisplayTime)

  useEffect(() => {
    const newTimeToEnd = new Date(endDate).getTime() - new Date(startDate).getTime()
    setFullTime(calculateTimeToEnd(newTimeToEnd))
    setDisplayTime(calculateInitialDisplayTime())
  }, [endDate, startDate])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFullTime((prevTime) => {
        const newTotal = Math.max(prevTime.total - 1000, 0)
        const newFullTime = calculateTimeToEnd(newTotal)

        if (newFullTime.days < 1) {
          setDisplayTime({ 
            hours: newFullTime.hours,
            minutes: newFullTime.minutes,
            seconds: newFullTime.seconds,
          })
        } else {
          setDisplayTime({ 
            days: newFullTime.days, 
            hours: newFullTime.hours, 
            minutes: newFullTime.minutes,
          })
        }

        return newFullTime
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const renderTimeBlocks = () => {
    const { days, hours, minutes, seconds } = displayTime
    const { daysWordLength, hoursWordLength, minutesWordLength, secondsWordLength } = timerWordsLength

    if ('days' in displayTime) {
      return (
        <>
          <div className={`${styles['timerBlock']} ${styles['days']}`}>
            <div className={styles['number']}>{days}</div>
            <div className={styles['text']}>
              {getLocalizedUnit('days', days ?? 0, currentLanguage, daysWordLength)}
            </div>
          </div>
          <div className={`${styles['timerBlock']} ${styles['hours']}`}>
            <div className={styles['number']}>{hours}</div>
            <div className={styles['text']}>
              {getLocalizedUnit('hours', hours, currentLanguage, hoursWordLength)}
            </div>
          </div>
          <div className={`${styles['timerBlock']} ${styles['minutes']}`}>
            <div className={styles['number']}>{minutes}</div>
            <div className={styles['text']}>
              {getLocalizedUnit('minutes', minutes, currentLanguage, minutesWordLength)}
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={`${styles['timerBlock']} ${styles['hours']}`}>
            <div className={styles['number']}>{hours}</div>
            <div className={styles['text']}>
              {getLocalizedUnit('hours', hours, currentLanguage, hoursWordLength)}
            </div>
          </div>
          <div className={`${styles['timerBlock']} ${styles['minutes']}`}>
            <div className={styles['number']}>{minutes}</div>
            <div className={styles['text']}>
              {getLocalizedUnit('minutes', minutes, currentLanguage, minutesWordLength)}
            </div>
          </div>
          <div className={`${styles['timerBlock']} ${styles['seconds']}`}>
            <div className={styles['number']}>{seconds}</div>
            <div className={styles['text']}>
              {getLocalizedUnit('seconds', seconds ?? 0, currentLanguage, secondsWordLength)}
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className={styles['countdownTimer']}>
        {renderTimeBlocks()}
        {/* <div className={`${styles['timerBlock']} ${styles['days']}`}>
            <div className={styles['number']}>6</div>
            <div className={styles['text']}>
              д
            </div>
          </div>
          <div className={`${styles['timerBlock']} ${styles['hours']}`}>
            <div className={styles['number']}>12</div>
            <div className={styles['text']}>
              ч
            </div>
          </div>
          <div className={`${styles['timerBlock']} ${styles['minutes']}`}>
            <div className={styles['number']}>24</div>
            <div className={styles['text']}>
              мин
            </div>
          </div> */}
      </div>
    </>
  )
}

export { CountdownTimer }