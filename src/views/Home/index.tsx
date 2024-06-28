//import styles from './home.module.scss'
import { useAppSelector, useAuth } from '@app/hooks'

const Home = () => {
  const { user: currentUser } = useAuth()
  const users = useAppSelector((state) => state.persistentUsers.users)

  return (
    <>
      <h1>Home</h1>

      <ul>
        {users && users.filter((user: any) => user.id !== currentUser?.id).map(({id, name, email, avatar}: any) => (
          <li key={id}>
            <img src={avatar} alt={name} />
            {name}: {email}
          </li>
        ))}
      </ul>
      
    </>
  )
}

export { Home }