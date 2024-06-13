//import styles from './header.module.scss'
import { useAuth } from '@app/hooks'

const Header = () => {
  const { user, logout } = useAuth()

  return (
    <>
      <h1>Добро пожаловать, {user?.name}</h1>
      <button onClick={() => logout()}>
        Sign Out
      </button>
    </>
  )
}

export { Header }