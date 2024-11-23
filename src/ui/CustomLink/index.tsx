import { FC } from 'react'
import { Link, useMatch } from 'react-router-dom'

interface CustomLinkProps {
  to: string
  text?: string
  icon?: React.ReactNode
  isNavLink?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
  customStyles: {
    link: string
    activeLink?: string
    linkIcon?: string
    linkText?: string
  }
  props?: any
}

const CustomLink: FC<CustomLinkProps> = ({ 
  to, 
  text, 
  icon, 
  isNavLink = false,
  target,
  customStyles, 
  ...props 
}) => {
  const match = useMatch({ path: to })

  const setActiveClass = isNavLink && match
    ? `${customStyles.link} ${customStyles.activeLink}`
    : customStyles.link

  return (
    <Link
      to={to}
      className={setActiveClass}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {icon && <div className={customStyles.linkIcon}>{icon}</div>}
      {text && <div className={customStyles.linkText}>{text}</div>}
    </Link>
  )
}

export { CustomLink }