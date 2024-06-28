import styles from './header-user-control.module.scss'
import { FC, useState } from 'react'
import { useAppSelector, useAuth } from '@app/hooks'

import ArrowDown from '@app/assets/images/arrow-down.svg?react'
import ModalWindowTriangle from '@app/assets/images/triangle.svg?react'
import { ModalWindow } from '@/ui'
import { AvailableUsersControl } from '@/components'
import LogoutIcon from '@app/assets/images/logout-icon.svg?react'

const HeaderUserControl: FC = () => {
  const { user: currentUser, logout, changeCurrentUser } = useAuth()
  const persistentUsers = useAppSelector((state) => state.persistentUsers.users)
  const [ showUserOptionsModal, setShowUserOptionsModal ] = useState<boolean>(false)

  return (
    <>
      <div
        className={`${styles['header-user-control']}`}
        onClick={() => setShowUserOptionsModal(!showUserOptionsModal)}
      >
        <div className={`${styles['user-icon']}`}>
          <img className={`${styles['user-icon-img']}`} src={currentUser?.avatar} alt={currentUser?.name} />
        </div>
        
        <div className={`${styles['arrow-down']}`}><ArrowDown /></div>

        {showUserOptionsModal && (<ModalWindowTriangle className={styles.triangle} />)}
        <ModalWindow
          className={`${styles['user-options']}`}
          showModal={showUserOptionsModal}
          setShowModal={setShowUserOptionsModal}
        >
          <h4 className={`${styles['user-options-title']}`}>Смена пользователя</h4>
          <AvailableUsersControl 
            currentUser={currentUser}
            persistentUsers={persistentUsers}
            changeUser={changeCurrentUser}
          />
          <div className={styles.separator}></div>
          <button
            className={`${styles['logout-button']}`}
            onClick={() => logout()}
          >
            <span>Выход</span>
            <LogoutIcon />
          </button>
        </ModalWindow>
      </div>
    </>
  )
}

export { HeaderUserControl }