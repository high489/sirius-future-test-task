//import styles from './header.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/app/hooks'

const Header = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      <h1>Welcome {user}</h1>
      <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Sign Out</button>
    </>
  )
}

export { Header }