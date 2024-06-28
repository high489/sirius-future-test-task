import styles from './form-input-checkbox.module.scss'
import { FC } from 'react'

import { CustomCheckbox, CheckboxProps } from '@/ui/CustomCheckbox'

const FormInputCheckbox: FC<CheckboxProps> = ({
  id, value, name, checked, disabled, onChange
}) => {
  return (
    <>
      <div className={`${styles['form-input-checkbox']}`}>
        <CustomCheckbox 
          id={id}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          style={{ textDecorationLine: disabled ? 'line-through' : 'none' }}
        >
          {value}
        </label>
      </div>
    </>
  )
}

export { FormInputCheckbox }