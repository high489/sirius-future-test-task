import styles from './custom-link.module.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface CustomLinkProps {
  children: string
  to: string
  props?: any
}

const CustomLink: FC<CustomLinkProps> = ({ children, to, ...props }) => {
  return (
    <Link
      to={to}
      className={`${styles['custom-link']}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export { CustomLink }