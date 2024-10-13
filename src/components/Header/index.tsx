import styles from './header.module.scss'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth, useTransliterationRuEn } from '@app/hooks'

import { HeaderControls } from './HeaderControls'

const Header = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const { user } = useAuth()
  const username = useTransliterationRuEn(user?.name || '')

  return (
    <>
      <div className={`${styles['header-content']}`}>
        <h1 className={`${styles['header-greeting']}`}>
          {location.pathname === '/' && (<>{ t('header.greeting') }, <span>{username}</span>!</>)}
        </h1>
        <HeaderControls />
      </div>
      <div className={`${styles['header-bg']}`}></div>
      <div className={`${styles['header-bg-bottom']}`}></div>
    </>
  )
}

export { Header }