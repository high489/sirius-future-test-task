import styles from './standard-button.module.scss'
import { FC } from 'react'

interface StandardButtonProps {
  buttonText: string
  onClick?: () => void
  width?: string
  height?: string
  padding?: string
}

const StandardButton: FC<StandardButtonProps> = ({
  buttonText, onClick, width, height, padding,
}) => {
  return (
    <>
      <button 
        className={styles['standard-button']}
        style={{ width, height, padding }}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  )
}

export { StandardButton }