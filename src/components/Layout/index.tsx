import styles from './layout.module.scss'

import { Header, Sidebar } from '@/components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.content}>
          <aside className={styles.aside}>
            <Sidebar />
          </aside>
          <div className={`${styles['main-container']}`}>
            <header className={styles.header}>
              <Header />
            </header>
            <main className={styles.main}>
              <Outlet />
            </main>
          </div>
        </div>
        <footer className={styles.footer}>Footer</footer>
      </div>
    </>
  )
}

export { Layout }