import styles from './available-users-list.module.scss'
import { FC } from 'react'
import { IUser } from '@/app/models'

interface AvailableUsersListProps {
  currentUser: IUser | null
  persistentUsers?: { user: IUser }[] | null
  changeUser?: (newUser: IUser) => void
}

const AvailableUsersList: FC<AvailableUsersListProps> = ({
  currentUser, persistentUsers, changeUser
}) => {
  return (
    <>
      <div className={`${styles['available-users-list']}`}>
        <div className={`${styles['user-item']} ${styles['current-user']}`}>
          <div className={`${styles['user-icon']}`}>
            <img className={`${styles['user-icon-img']}`} src={currentUser?.avatar} alt={currentUser?.name} />
          </div>
          <div className={`${styles['current-user-info']}`}>
            <div className={`${styles['user-name']}`}>{currentUser?.name}</div>
            <label>Это вы</label>
          </div>
        </div>
        {
          persistentUsers && 
          persistentUsers
            .filter(({ user }) => user.id !== currentUser?.id)
            .map(({ user }) => (
              <div
                key={user.id}
                className={`${styles['user-item']}`}
                onClick={() => changeUser && changeUser(user)}
              >
                <div className={`${styles['user-icon']}`}>
                  <img className={`${styles['user-icon-img']}`} src={user?.avatar} alt={user?.name} />
                </div>
                <div className={`${styles['user-name']} ${styles['persistent-user-name']}`}>{user?.name}</div>
              </div>
            ))
        }
      </div>
    </>
  )
}

export { AvailableUsersList }