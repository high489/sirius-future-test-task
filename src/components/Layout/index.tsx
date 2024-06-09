import styles from './layout.module.scss'

import { Header, Sidebar } from '@/components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}

export { Layout }