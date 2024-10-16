//import styles from './not-found-view.module.scss'

import { useAppSelector, useAuth } from "@/app/hooks"

const NotFoundView = () => {
  const { user: currentUser, isPersistent } = useAuth()
  const persistentUsers = useAppSelector((state) => state.persistentUsers.persistentUsers)

  return (
    <>
      <h1>NotFound</h1>
      <p>{isPersistent ? `${currentUser?.name} is persistent` : `${currentUser?.name} isn't persistent`}</p>
      <ul>
        {persistentUsers && persistentUsers
          .filter((persistentUser) => persistentUser.user.id !== currentUser?.id)
          .map(({ user: { id, name, email, avatar } }) => (
            <li key={id}>
              <img src={avatar} alt={name} />
              {name}: {email}
            </li>
          ))}
      </ul>
    </>
  )
}

export { NotFoundView }