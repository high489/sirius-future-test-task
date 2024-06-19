import styles from './form-input-checkbox.module.scss'
import { FC } from 'react'

import { CustomCheckbox, CheckboxProps } from '@/ui/CustomCheckbox'

const FormInputCheckbox: FC<CheckboxProps> = ({ id, value }) => {
  return (
    <>
      <div className={`${styles['form-input-checkbox']}`}>
        <CustomCheckbox id={id}/>
        <label htmlFor={id}>{value}</label>
      </div>
    </>
  )
}

export { FormInputCheckbox }