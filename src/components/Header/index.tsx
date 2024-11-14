import styles from './header.module.scss'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@app/hooks'
import { transliterationRuEn } from '@app/utils'

import { HeaderControls } from './HeaderControls'

const Header = () => {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const tPath = 'components.header'
  const { user } = useAuth()
  const username = transliterationRuEn(user?.name || '', currentLanguage)

  return (
    <>
      <div className={`${styles['header-content']}`}>
        <h1 className={`${styles['header-greeting']}`}>
          {location.pathname === '/' && (<>{ t(`${tPath}.greeting`) }, <span>{username}</span>!</>)}
        </h1>
        <HeaderControls />
      </div>
      <div className={`${styles['header-bg']}`}></div>
      <div className={`${styles['header-bg-bottom']}`}></div>
    </>
  )
}

export { Header }