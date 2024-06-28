import styles from './custom-checkbox.module.scss'
import { FC } from 'react'

export interface CheckboxProps {
  id: string
  value?: string
  name?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox: FC<CheckboxProps> = ({ 
  id, value, name, checked, disabled, onChange
}) => {
  return (
    <>
      <label className={styles.checkbox}>
        <input
          type='checkbox'
          id={id}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className={styles.checkmark}></span>
      </label>
    </>
  )
}

export { CustomCheckbox }