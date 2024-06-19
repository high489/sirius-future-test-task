import styles from './login.module.scss'

import SiriusLogo from '@app/assets/images/Logomark_1_.svg?react'
import { LoginControl } from '@/components'

const Login = () => {
  return (
    <>
      <div className={`${styles.login} container`}>
        <div className={`${styles['login-content']}`}>
          <SiriusLogo className={`${styles['login-logo']}`} />
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

export { Login }