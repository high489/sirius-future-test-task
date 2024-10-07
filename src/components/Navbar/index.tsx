import styles from './navbar.module.scss'
import { FC } from 'react'

import { routes } from '@app/router'
import { CustomLink } from '@/ui'

const Navbar: FC = () => {
  const navRoutes = routes
    .filter(route => route.icon && route.text)
    .map(({ path, icon, text }) => ({ path, icon, text })) 
  return (
    <>
      <nav className={styles.navbar}>
        {navRoutes
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