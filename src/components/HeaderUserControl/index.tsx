import styles from './header-user-control.module.scss'
import { FC, useRef, useState } from 'react'
import { useAppSelector, useAuth } from '@app/hooks'

import ArrowDown from '@app/assets/images/arrow-down.svg?react'
import ModalWindowTriangle from '@app/assets/icons/modal-window-triangle.svg?react'
import { ModalWindow } from '@/ui'
import { AvailableUsersControl } from '@/components'
import LogoutIcon from '@app/assets/icons/logout-icon.svg?react'

const HeaderUserControl: FC = () => {
  const { user: currentUser, logout, changeCurrentUser } = useAuth()
  const persistentUsers = useAppSelector((state) => state.persistentUsers.users)
  const [ showUserOptionsModal, setShowUserOptionsModal ] = useState<boolean>(false)
  const headerUserControlRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div
        className={`${styles['header-user-control']}`}
        onClick={() => setShowUserOptionsModal(!showUserOptionsModal)}
        ref={headerUserControlRef}
      >
        <div className={`${styles['user-icon']}`}>
          <img className={`${styles['user-icon-img']}`} src={currentUser?.avatar} alt={currentUser?.name} />
        </div>
        
        <div
          className={`${styles['arrow-down']}`}
          style={{ transform: showUserOptionsModal ? 'rotate(180deg)' : ''}}
        >
          <ArrowDown />
        </div>

        {showUserOptionsModal && (<ModalWindowTriangle className={styles.triangle} />)}
        <ModalWindow
          showModal={showUserOptionsModal}
          setShowModal={setShowUserOptionsModal}
          className={`${styles['user-options']}`}
          callerElementRef={headerUserControlRef}
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