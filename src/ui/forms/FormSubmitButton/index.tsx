import styles from './form-submit-button.module.scss'
import { FC } from 'react'

interface FormSubmitButtonProps {
  value: string
}

const FormSubmitButton: FC<FormSubmitButtonProps> = ({ value }) => {
  return (
    <>
      <button 
        type="submit"
        className={`${styles['form-submit-button']}`}
      >
        {value}
      </button>
    </>
  )
}

export { FormSubmitButton }