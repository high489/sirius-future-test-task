import styles from './main-layout.module.scss'

import { Header, Sidebar } from '@/components'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <div className={`container ${styles['main-layout']}`}>
        <div className={styles['content-area']}>
          <aside className={styles['aside']}>
            <Sidebar />
          </aside>
          <div className={styles['header-main-section']}>
            <header className={styles['header']}>
              <Header />
            </header>
            <main className={styles['main']}>
              <Outlet />
            </main>
          </div>
        </div>
        <footer className={styles['footer']}></footer>
      </div>
    </>
  )
}

export { MainLayout }