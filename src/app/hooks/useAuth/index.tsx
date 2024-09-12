import { IUser } from '@app/models/IUser'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { signIn, signOut, changeUser } from '@app/store'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const { user, isAuthenticated } = useAppSelector((state) => state.auth)

  const persistentUsers = useAppSelector((state) => state.persistentUsers.persistentUsers)
  const persistentUser = persistentUsers.find((pu) => pu.user.id === user?.id) || null
  const isPersistent = persistentUser !== null

  const login = (user: IUser) => dispatch(signIn(user))
  const logout = () => dispatch(signOut())
  const changeCurrentUser = (user: IUser) => dispatch(changeUser(user))

  return {
    user,
    isAuthenticated,
    persistentUser,
    isPersistent,
    login,
    logout,
    changeCurrentUser,
  }
}

export { useAuth }