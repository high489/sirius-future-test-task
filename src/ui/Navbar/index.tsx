import styles from './navbar.module.scss'
import { FC, ReactNode } from 'react'

import { CustomLink } from '@/ui'

type NavRouteItem = {
  path: string
  icon: ReactNode
  text: string
}

interface NavbarProps {
  routes: NavRouteItem[]
}

const Navbar: FC<NavbarProps> = ({ routes }) => {
  return (
    <>
      <nav className={styles.navbar}>
        {routes
          .map(({ path, icon, text}, i) => (
            <CustomLink
              key={i}
              to={path}
              icon={icon}
              text={text}
              isNavLink={true}
              customStyles={{
                link: styles['nav-link'],
                activeLink: styles['active-nav-link'],
                linkIcon: styles['nav-link-icon'],
                linkText: styles['nav-link-text'],
              }}
            />
          ))
        }
      </nav>
    </>
  )
}

export { Navbar }