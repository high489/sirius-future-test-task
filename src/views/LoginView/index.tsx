import styles from './login-view.module.scss'
import { useState } from 'react'

import SiriusLogo from '@app/assets/images/Logomark_1_.svg?react'
import { LoginControl } from '@/components'
import { ModalWindow } from '@/ui'

const LoginView = () => {
  const [showUsersInfo, setShowUsersInfo] = useState(true)
  return (
    <>
      <div className={`${styles.login} container`}>
        <ModalWindow
          showModal={showUsersInfo}
          setShowModal={setShowUsersInfo}
          mainStyle={styles['users-info']}
        >
          <p>User 1: mike123@mail.com / mike123</p>
          <p>User 2: anna321@mail.com / anna321</p>
        </ModalWindow>

        <div className={`${styles['login-content']}`}>
          <SiriusLogo
            className={`${styles['login-logo']}`}
            onClick={() => setShowUsersInfo(!showUsersInfo)}
          />
          <h1 className={`${styles['login-title']}`}>Вход в Sirius Future</h1>
          <LoginControl />
        </div>

        <div className={`${styles['login-language-selector']}`}>
          <div className={`${styles['login-lang-ru']}`}>RU</div>
          <div className={`${styles['login-lang-en']}`}>EN</div>
        </div>
      </div>
    </>
  )
}

export { LoginView }