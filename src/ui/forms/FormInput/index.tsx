import styles from './form-input.module.scss'
import { FC } from 'react'

interface FormInputProps {
  type: string
  name: string
  placeholder: string
  value: string
  setValue: (newValue: string) => void
}

const FormInput: FC<FormInputProps> = ({ type, name, placeholder, value, setValue }) => {
  return (
    <>
      <input
        className={`${styles['form-input']}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
          setValue(e.target.value)}
      />
    </>
  )
}

export { FormInput }