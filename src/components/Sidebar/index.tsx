import styles from './sidebar.module.scss'
import { FC } from 'react'

import Logo from '@app/assets/images/logo.svg?react'
import { Navbar, SidebarReferral } from '@/components'
import { routes } from '@app/router'

const Sidebar: FC = () => {
  const navRoutes = routes
    .filter(route => route.icon && route.text)
    .map(({ path, icon, text }) => ({ path, icon, text })) 
  return (
    <>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <Navbar routes={navRoutes} />
        <SidebarReferral />
      </div>
    </>
  )
}

export { Sidebar }