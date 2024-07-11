import styles from './change-current-user-control.module.scss'
import { FC } from 'react'
import { IUser } from '@/app/models'

interface AvailableUsersControl {
  currentUser: IUser | null
  persistentUsers?: IUser[] | null
  changeUser?: (newUser: IUser) => void
}

const AvailableUsersControl: FC<AvailableUsersControl> = ({
  currentUser, persistentUsers, changeUser
}) => {
  return (
    <>
      <div className={`${styles['available-users']}`}>
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
          persistentUsers.filter((user: IUser) => user.id !== currentUser?.id)
          .map((user: IUser) => (
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

export { AvailableUsersControl }