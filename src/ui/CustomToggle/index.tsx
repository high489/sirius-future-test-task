import styles from './custom-toggle.module.scss'
import { FC } from 'react'

interface CustomToggleProps {
  toggleOnText: string
  toggleOffText: string
  value: boolean
  onChange: (value: boolean) => void
  mode?: 'standard' | 'disabled' | 'alwaysOn' | 'alwaysOff'
}

const CustomToggle: FC<CustomToggleProps> = ({
  toggleOnText, toggleOffText, value, onChange, mode = 'standard'
}) => {
  const handleOnChange = (newValue: boolean) => {
    if (newValue !== value) {
      onChange(newValue)
    }
  }

  switch (mode) {
    case 'standard':
      return (
        <div className={styles['custom-toggle']}>
          <button
            className={`${styles['button']} ${!value ? styles['active'] : ''}`}
            onClick={() => handleOnChange(false)}
          >
            {toggleOffText}
          </button>
          <button
            className={`${styles['button']} ${value ? styles['active'] : ''}`}
            onClick={() => handleOnChange(true)}
          >
            {toggleOnText}
          </button>
        </div>
      )

    case 'disabled':
      return (
        <div className={styles['custom-toggle']}>
          <button className={`${styles['button']} ${styles['disabled']}`} disabled>
            {toggleOffText}
          </button>
          <button className={`${styles['button']} ${styles['disabled']}`} disabled>
            {toggleOnText}
          </button>
        </div>
      )

    case 'alwaysOn':
      return (
        <div className={styles['custom-toggle']}>
          <button className={`${styles['button']} ${styles['disabled']}`} disabled>
            {toggleOffText}
          </button>
          <button className={`${styles['button']} ${styles['active']}`} disabled>
            {toggleOnText}
          </button>
        </div>
      )

    case 'alwaysOff':
      return (
        <div className={styles['custom-toggle']}>
          <button className={`${styles['button']} ${styles['active']}`} disabled>
            {toggleOffText}
          </button>
          <button className={`${styles['button']} ${styles['disabled']}`} disabled>
            {toggleOnText}
          </button>
        </div>
      )

    default:
      return null
  }
}

export { CustomToggle }