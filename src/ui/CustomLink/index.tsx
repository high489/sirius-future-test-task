import styles from './custom-link.module.scss'
import { Link } from 'react-router-dom'

const CustomLink = ({children, to, ...props}: any) => {
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