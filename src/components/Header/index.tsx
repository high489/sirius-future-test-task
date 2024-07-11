import styles from './header.module.scss'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@app/hooks'

import { HeaderControls } from '@/components'

const Header = () => {
  const location = useLocation()
  const { user } = useAuth()

  return (
    <>
      <div className={`${styles['header-content']}`}>
        <h1 className={`${styles['header-greeting']}`}>
          {location.pathname === '/' && (<>Добро пожаловать, <span>{user?.name}</span>!</>)}
        </h1>
        <HeaderControls />
      </div>
      <div className={`${styles['header-bg']}`}></div>
      <div className={`${styles['header-bg-bottom']}`}></div>
    </>
  )
}

export { Header }