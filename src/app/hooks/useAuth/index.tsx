import { IUser } from '@app/models/IUser'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { signIn, signOut, changeUser } from '@app/store'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  const login = (user: IUser) => dispatch(signIn(user))
  const logout = () => dispatch(signOut())
  const changeCurrentUser = (user: IUser) => dispatch(changeUser(user))

  return { user, isAuthenticated, login, logout, changeCurrentUser }
}

export { useAuth }