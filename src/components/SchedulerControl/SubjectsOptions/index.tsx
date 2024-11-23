import styles from './subjects-options.module.scss'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Option } from '@/app/models'

import { CustomSelect } from '@/ui'

interface SubjectsOptionsProps {
  selectedSubject: string | string[]
  setSelectedSubject: (newValue: string | string[]) => void
  subjectsOptions: Option[]
}

const SubjectsOptions: FC<SubjectsOptionsProps> = ({
  selectedSubject, setSelectedSubject, subjectsOptions,
}) => {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.language
  const tPath = 'components.scheduler-control.subject-options'

  const prepareOptionsByLanguage = (options: Option[]) => {
    return options.map(option => ({
      key: option.key,
      name: option.name[currentLanguage] || option.name['en'] || ''
    }))
  }
  
  return (
    <>
      <div className={`${styles['subjects-options']}`}>
        <CustomSelect
          options={prepareOptionsByLanguage(subjectsOptions)}
          onChange={setSelectedSubject}
          className={styles['subjects-selector']}
          placeholder='Выбрать предмет'
          value={selectedSubject}
        />
        <button
          className={styles['change-schedule-button']}
          onClick={() => navigate('/change-schedule')}
        >
          { t(`${tPath}.change-schedule-btn-text`) }
        </button>
      </div>
    </>
  )
}

export { SubjectsOptions }