import styles from './sidebar.module.scss'
import { FC } from 'react'

import Logo from '@app/assets/images/logo.svg?react'
import { Navbar, SidebarReferral } from '@/components'

const Sidebar: FC = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <Navbar />
        <SidebarReferral />
      </div>
    </>
  )
}

export { Sidebar }