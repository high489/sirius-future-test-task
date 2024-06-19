import styles from './form-input-password.module.scss'
import { FC, useState } from 'react'

import { FormInput } from '@/ui'
import ShowPassword from './assets/show_password_icon.svg?react'

interface FormInputPasswordProps {
  name: string
  placeholder: string
  value: string
  setValue: (newValue: string) => void
}

const FormInputPassword: FC<FormInputPasswordProps> = ({
  name, placeholder, value, setValue
}) => {
  const [ showPassword, setShowPassword ] = useState(false)
  
  return (
    <>
      <div className={`${styles['form-input-password']}`}>
        <FormInput
          type={showPassword ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          value={value}
          setValue={setValue}
        />
        <ShowPassword
          className={`${styles['show-password']}`}
          onClick={() => setShowPassword(!showPassword)}
          style={{ opacity: !value.length ? 1 : showPassword ? 0.5 : 1 }}
        />
      </div>
    </>
  )
}

export { FormInputPassword }