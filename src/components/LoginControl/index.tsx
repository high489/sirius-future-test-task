import styles from './login-control.module.scss'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from '@app/store'
import { useAppDispatch } from '@app/hooks'
import { rememberUser } from '@app/store'
import { useAuth } from '@app/hooks'

import { FormInput, FormInputPassword, FormInputCheckbox, FormSubmitButton, CustomLink } from '@/ui'

const LoginControl: FC = () => {
  const { data: users } = useGetUsersQuery()
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isUserRemembered, setIsUserRemembered ] = useState(false)
  const { login } = useAuth()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const user = users?.find(u => u.email === email && u.password === password)

    if (user) {
      if (isUserRemembered) {
        dispatch(rememberUser(user))
      }
      login(user)
      navigate('/', { replace: true })
    } else {
      alert('Invalid username or password')
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
                placeholder='E-mail'
                value={email}
                setValue={setEmail}
              />
            </div>
            <div className={`${styles['login-form-data-item']}`}>
              <FormInputPassword
                name='password'
                placeholder='Пароль'
                value={password}
                setValue={setPassword}
              />
            </div>
          </div>
          <FormInputCheckbox 
            id='remember-me' 
            value='Запомнить меня' 
            checked={isUserRemembered}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
              setIsUserRemembered(event.target.checked)}
          />
          <FormSubmitButton value='Войти' />  
        </form>

        <div className={`${styles['login-additional-options']}`}>
          <div className={`${styles['login-signin-options']}`}>
            <CustomLink to='/login'>Я забыл пароль</CustomLink>
            <CustomLink to='/login'>Войти как тренер</CustomLink>
          </div>

          <div className={`${styles['login-signup-options']}`}>
            <label className={`${styles['login-signup-label']}`}>Нет аккаунта?</label>
            <CustomLink to='/login'>Зарегистрироваться</CustomLink>
          </div>
        </div>
      </div>
    </>
  )
}

export { LoginControl }