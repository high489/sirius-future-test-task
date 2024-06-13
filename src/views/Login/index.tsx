//import styles from './login.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useGetUsersQuery } from '@app/store'
import { useAuth } from '@app/hooks'

const Login = () => {
  const navigate = useNavigate()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const { data: users } = useGetUsersQuery()
  const { login } = useAuth()

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const user = users?.find(u => u.username === username && u.password === password)

    if (user) {
      login(user)
      navigate('/', { replace: true })
    } else {
      alert('Invalid username or password')
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            placeholder='mike | anna'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            placeholder='mike123 | anna321'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export { Login }