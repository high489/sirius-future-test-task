import styles from './custom-nav-link.module.scss'
import { FC } from 'react'
import { Link, useMatch } from 'react-router-dom';

interface CustomNavLinkProps {
  to: string
  icon: any
  text: string
  props?: any
}

const CustomNavLink: FC<CustomNavLinkProps> = ({ to, icon, text, ...props }) => {
  const match = useMatch({ path: to })

  const setActiveClass = match
    ? `${styles['active-nav-link']} ${styles['nav-link']}`
    : `${styles['nav-link']}`

  return (
    <Link
      className={setActiveClass}
      to={to}
      {...props}
    >
      {icon && <div className={styles['nav-link-icon']}>{icon}</div>}
      <div className={`${styles['nav-link-text']}`}>{text}</div>
    </Link>
  )
}

export { CustomNavLink }