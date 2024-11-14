import styles from './available-users-list.module.scss'
import { FC } from 'react'
import { IUser } from '@/app/models'
import { useTranslation } from 'react-i18next'
import { transliterationRuEn } from '@app/utils'

interface AvailableUsersListProps {
  currentUser: IUser | null
  persistentUsers?: { user: IUser }[] | null
  changeUser?: (newUser: IUser) => void
}

const AvailableUsersList: FC<AvailableUsersListProps> = ({
  currentUser, persistentUsers, changeUser
}) => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const tPath = 'components.users-control.available-users-list'
  const currentUserName = transliterationRuEn(currentUser?.name || '', currentLanguage)
  return (
    <>
      <div className={`${styles['available-users-list']}`}>
        <div className={`${styles['user-item']} ${styles['current-user']}`}>
          <div className={`${styles['user-icon']}`}>
            <img className={`${styles['user-icon-img']}`} src={currentUser?.avatar} alt={currentUserName} />
          </div>
          <div className={`${styles['current-user-info']}`}>
            <div className={`${styles['current-user-name']}`}>{currentUserName}</div>
            <label>{ t(`${tPath}.current-user`) }</label>
          </div>
        </div>
        {
          persistentUsers && 
          persistentUsers
            .filter(({ user }) => user.id !== currentUser?.id)
            .map(({ user }) => {
              let username = transliterationRuEn(user?.name || '', currentLanguage)
              return (
                <div
                  key={user.id}
                  className={`${styles['user-item']}`}
                  onClick={() => changeUser && changeUser(user)}
                >
                  <div className={`${styles['user-icon']}`}>
                    <img className={`${styles['user-icon-img']}`} src={user?.avatar} alt={username} />
                  </div>
                  <div className={`${styles['user-name']} ${styles['persistent-user-name']}`}>{username}</div>
                </div>
              )
            })
        }
      </div>
    </>
  )
}

export { AvailableUsersList }