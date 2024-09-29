import styles from './login-control.module.scss'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery, addPersistentUser } from '@app/store'
import { useAppDispatch, useAuth } from '@app/hooks'

import { FormInput, FormInputPassword, FormInputCheckbox, FormSubmitButton, CustomLink } from '@/ui'

const LoginControl: FC = () => {
  const { data: users } = useGetUsersQuery()
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const { t } = useTranslation()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isUserRemembered, setIsUserRemembered ] = useState(false)
  const { login } = useAuth()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const user = users?.find(u => u.email === email && u.password === password)

    if (user) {
      if (isUserRemembered) {
        dispatch(addPersistentUser({user}))
      }
      login(user)
      navigate('/', { replace: true })
    } else {
      alert(t('content.login-view.faild-login-alert'))
    }
  }

  return (
    <>
      <div className={`${styles['login-control']}`}>
        <form 
          className={`${styles['login-form']}`}
          onSubmit={handleSubmit}
        >
          <div className={`${styles['login-form-data']}`}>
            <div className={`${styles['login-form-data-item']}`}>
              <FormInput 
                type='text'
                name='email'
                placeholder={ t('content.login-view.e-mail') }
                value={email}
                setValue={setEmail}
                id='email'
                autoComplete='email'
              />
            </div>
            <div className={`${styles['login-form-data-item']}`}>
              <FormInputPassword
                name='password'
                placeholder={ t('content.login-view.password') }
                value={password}
                setValue={setPassword}
                id='password'
                autoComplete='current-password'
              />
            </div>
          </div>
          <FormInputCheckbox 
            id='remember-me' 
            value={ t('content.login-view.remember-me') } 
            checked={isUserRemembered}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
              setIsUserRemembered(event.target.checked)}
          />
          <FormSubmitButton value={ t('content.login-view.sign-in-btn-text') } />  
        </form>

        <div className={`${styles['login-additional-options']}`}>
          <div className={`${styles['login-signin-options']}`}>
            <CustomLink to='/login'>{ t('content.login-view.forget-pass-btn-text') }</CustomLink>
            <CustomLink to='/login'>{ t('content.login-view.sign-in-instructor-btn-text') }</CustomLink>
          </div>

          <div className={`${styles['login-signup-options']}`}>
            <label className={`${styles['login-signup-label']}`}>
              { t('content.login-view.no-account-label') }
            </label>
            <CustomLink to='/login'>{ t('content.login-view.sign-up-btn-text') }</CustomLink>
          </div>
        </div>
      </div>
    </>
  )
}

export { LoginControl }