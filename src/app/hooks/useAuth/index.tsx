import { IUser } from '@app/models/IUser'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { signIn, signOut } from '@app/store'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  const login = (user: IUser) => dispatch(signIn(user))
  const logout = () => dispatch(signOut())

  return { user, isAuthenticated, login, logout }
}

export { useAuth }