import styles from './form-input.module.scss'
import { FC } from 'react'

interface FormInputProps {
  type: string
  name: string
  placeholder: string
  value: string
  setValue: (newValue: string) => void
  id?: string
  autoComplete?: string
}

const FormInput: FC<FormInputProps> = ({ 
  type, name, placeholder, value, setValue, id, autoComplete,
}) => {
  return (
    <>
      <input
        className={`${styles['form-input']}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
        autoComplete={autoComplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
          setValue(e.target.value)}
      />
    </>
  )
}

export { FormInput }