import styles from './sidebar.module.scss'
import { FC } from 'react'

import Logo from '@app/assets/images/logo.svg?react'
import { Navbar, Referral } from '@/components'
import { routes } from '@app/router'
import { useTranslation } from 'react-i18next'

const Sidebar: FC = () => {
  const { i18n } = useTranslation()
  const navRoutes = routes
    .filter(({ path, icon, text }) => path && icon && text)
    .map(({ path, icon, text }) => ({
      path,
      icon,
      text: text && text[i18n.language] ? text[i18n.language] : ''
    }))
  return (
    <>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <Navbar routes={navRoutes} />
        <Referral />
      </div>
    </>
  )
}

export { Sidebar }