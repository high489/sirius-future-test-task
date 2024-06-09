import styles from './sidebar.module.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const setActiveClass = ({ isActive }:any) => isActive ? `${styles['active-nav-link']}` : ''
  
  return (
    <>
      <aside>
        <NavLink to="/" className={setActiveClass}>Home</NavLink>
        <NavLink to="/schedule" className={setActiveClass}>Schedule</NavLink>
        <NavLink to="/payment" className={setActiveClass}>Payment</NavLink>
      </aside>
    </>
  )
}

export { Sidebar }