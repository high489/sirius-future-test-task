import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/app/hooks'

interface RequiredAuthProps {
  children?: any,
}

const RequiredAuth = ({children}: RequiredAuthProps) => {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to='/login' state={{from: location}}/>
  }

  return children
}

export { RequiredAuth }