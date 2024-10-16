import styles from './custom-select.module.scss'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import ArrowIcon from './assets/arrow-icon.svg?react'

type CustomSelectOption = {
  key: string
  name: string
}

interface CustomSelectProps {
  options: CustomSelectOption[]
  onChange: (value: string | string[]) => void
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  required?: boolean
  value?: string | string[]
  name?: string
  id?: string
  className?: string
  style?: React.CSSProperties
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  multiple = false,
  required = false,
  value,
  name,
  id,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<CustomSelectOption[]>([])
  const customSelectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (customSelectRef.current && 
        !customSelectRef.current.contains(event.target as Node)) 
        setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (value) {
      const selected = options.filter(option => {
        return (
          Array.isArray(value) 
          ? value.includes(option.key)
          : option.key === value)
      })
      setSelectedOptions(selected)
    }
  }, [value, options])

  const handleOptionClick = (option: CustomSelectOption) => {
    if (multiple) {
      const isSelected = selectedOptions.some(selectedOption => selectedOption.key === option.key)
      const newSelectedOptions = isSelected
        ? selectedOptions.filter(selectedOption => selectedOption.key !== option.key)
        : [...selectedOptions, option]
      setSelectedOptions(newSelectedOptions)
      onChange(newSelectedOptions.map(selectedOption => selectedOption.key))
    } else {
      setSelectedOptions([option])
      onChange(option.key)
      setIsOpen(false)
    }
  }

  // handler for default select
  const _handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, option => option.value)
    if (multiple) {
      const newSelectedOptions = options.filter(option => selectedValues.includes(option.key))
      setSelectedOptions(newSelectedOptions)
      onChange(selectedValues)
    } else {
      const selectedOption = options.find(option => option.key === selectedValues[0])
      if (selectedOption) {
        setSelectedOptions([selectedOption])
        onChange(selectedOption.key)
        setIsOpen(false)
      }
    }
  }

  return (
    <>
      <div
        ref={customSelectRef}
        className={`${styles['custom-select-wrapper']} ${className}`}
        style={style}
      >
        <div
          className={`${styles['custom-select']} ${disabled ? styles['disabled'] : ''}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          tabIndex={disabled ? -1 : 0}
        >
          {selectedOptions.length > 0 
          ? selectedOptions.map(option => option.name).join(', ') 
          : placeholder}
          <div className={styles.arrow} style={{ transform: isOpen ? 'rotate(180deg)' : ''}}>
            <ArrowIcon />
          </div>
        </div>
        {isOpen && (
          <ul className={`${styles['options-list']}`}>
            {options.map((option) => (
              <li
                key={option.key} 
                className={styles.option}
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
        {/* default select which dublicates custom select actions */}
        <select
          name={name}
          id={id}
          multiple={multiple}
          required={required}
          value={multiple ? selectedOptions.map(option => option.key) : selectedOptions[0]?.key || ''}
          onChange={_handleSelectChange}
          style={{ display: 'none' }}
        >
          {options.map(option => (
            <option key={option.key} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}


export { CustomSelect }