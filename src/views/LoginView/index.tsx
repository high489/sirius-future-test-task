import styles from './login-view.module.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import SiriusLogo from '@app/assets/images/Logomark_1_.svg?react'
import { LoginControl, LanguageSelector } from '@/components'
import { ModalWindow } from '@/ui'

const LoginView = () => {
  const { t } = useTranslation()
  const tPath = 'views.login-view'
  const [showUsersInfo, setShowUsersInfo] = useState(true)
  return (
    <>
      <div className={`${styles.login} container`}>
        <ModalWindow
          showModal={showUsersInfo}
          setShowModal={setShowUsersInfo}
          mainStyle={styles['users-info']}
        >
          <p>User 1: mike123@mail.com / mike123+</p>
          <p>User 2: anna321@mail.com / anna321+</p>
        </ModalWindow>

        <div className={`${styles['login-content']}`}>
          <SiriusLogo
            className={`${styles['login-logo']}`}
            onClick={() => setShowUsersInfo(!showUsersInfo)}
          />
          <h1 className={`${styles['login-title']}`}>{ t(`${tPath}.title`) }</h1>
          <LoginControl />
        </div>

        <div className={`${styles['login-language-selector-wrapper']}`}>
          <LanguageSelector />
        </div>
      </div>
    </>
  )
}

export { LoginView }