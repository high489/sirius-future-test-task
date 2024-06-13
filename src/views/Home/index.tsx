//import styles from './home.module.scss'
import { useGetUsersQuery } from '@app/store'

const Home = () => {
  const { data: users, isLoading } = useGetUsersQuery()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <h1>Home</h1>

      <ul>
        {users && users.map(({id, name}: any) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
      
    </>
  )
}

export { Home }