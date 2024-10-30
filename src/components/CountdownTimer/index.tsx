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
  timerElementsSizes: {
    numberWidth?: number
    daysWordLength?: number
    hoursWordLength?: number
    minutesWordLength?: number
    secondsWordLength?: number
  }
}

const CountdownTimer: FC<CountdownTimerProps> = ({ 
  startDate, endDate, styles, timerElementsSizes,
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

  const calculateNumberWidth = (number: number): React.CSSProperties => {
    const numDigits = number.toString().length
    const baseWidth = timerElementsSizes.numberWidth
    const width = (baseWidth ?? 20) * numDigits

    return {
      width: width ? `${width}px` : '',
    }
  }

  const renderTimeBlocks = () => {
    const { days, hours, minutes, seconds } = displayTime
    const { daysWordLength, hoursWordLength, minutesWordLength, secondsWordLength } = timerElementsSizes

    if ('days' in displayTime) {
      return (
        <>
          <div className={`${styles['timerBlock']} ${styles['days']}`}>
            <div
              className={styles['number']}
              style={calculateNumberWidth(days ?? 0)}
            >
              {days}
            </div>
            <span className={styles['text']}>
              {getLocalizedUnit('days', days ?? 0, currentLanguage, daysWordLength)}
            </span>
          </div>
          <div className={`${styles['timerBlock']} ${styles['hours']}`}>
            <div
              className={styles['number']}
              style={calculateNumberWidth(hours)}
            >
              {hours}
            </div>
            <span className={styles['text']}>
              {getLocalizedUnit('hours', hours, currentLanguage, hoursWordLength)}
            </span>
          </div>
          <div className={`${styles['timerBlock']} ${styles['minutes']}`}>
            <div
              className={styles['number']}
              style={calculateNumberWidth(minutes)}
            >
              {minutes}
            </div>
            <span className={styles['text']}>
              {getLocalizedUnit('minutes', minutes, currentLanguage, minutesWordLength)}
            </span>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={`${styles['timerBlock']} ${styles['hours']}`}>
            <div
              className={styles['number']}
              style={calculateNumberWidth(hours)}
            >
              {hours}
            </div>
            <span className={styles['text']}>
              {getLocalizedUnit('hours', hours, currentLanguage, hoursWordLength)}
            </span>
          </div>
          <div className={`${styles['timerBlock']} ${styles['minutes']}`}>
            <div
              className={styles['number']}
              style={calculateNumberWidth(minutes)}
            >
              {minutes}
            </div>
            <span className={styles['text']}>
              {getLocalizedUnit('minutes', minutes, currentLanguage, minutesWordLength)}
            </span>
          </div>
          <div className={`${styles['timerBlock']} ${styles['seconds']}`}>
            <div
              className={styles['number']}
              style={calculateNumberWidth(seconds ?? 0)}
            >
              {seconds}
            </div>
            <span className={styles['text']}>
              {getLocalizedUnit('seconds', seconds ?? 0, currentLanguage, secondsWordLength)}
            </span>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className={styles['countdownTimer']}>
        {renderTimeBlocks()}
      </div>
    </>
  )
}

export { CountdownTimer }