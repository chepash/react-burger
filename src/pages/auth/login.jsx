import { Navigate, useNavigate } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import {
  SET_REDIRECT_PATH,
  UPDATE_LOGIN_FORM_STATE,
  loginFormSubmit,
} from '../../services/actions/login-actions'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { email, password } = useSelector((store) => store.loginState.form)
  const redirectPath = useSelector((store) => store.loginState.redirectPath)
  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)

  const onChange = (e) => {
    dispatch({
      type: UPDATE_LOGIN_FORM_STATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginFormSubmit(email, password, navigate)).then(() => {
      navigate(redirectPath || '/', { replace: true })
      dispatch({ type: SET_REDIRECT_PATH, payload: '' })
    })
  }

  if (isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={cn('text text_type_main-medium', 'mb-6')}>Вход</h1>
        <ul className={styles.list}>
          <li className={cn(styles.list__item)}>
            <Input
              type={'email'}
              placeholder={'E-mail'}
              onChange={onChange}
              value={email}
              name={'email'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
            />
          </li>
          <li className={cn(styles.list__item)}>
            <PasswordInput
              onChange={onChange}
              value={password}
              name={'password'}
            />
          </li>
        </ul>

        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!email && !password}
        >
          Войти
        </Button>

        <div className={cn(styles.link__wrapper, 'mt-20')}>
          <p
            className={cn(
              styles.text,
              'mp-4',
              'text text_type_main-default text_color_inactive'
            )}
          >
            Вы — новый пользователь?
          </p>
          <Link
            to={'/register'}
            className={cn(styles.link, 'text text_type_main-default')}
          >
            Зарегистрироваться
          </Link>
        </div>
        <div className={cn(styles.link__wrapper, 'mt-4')}>
          <p
            className={cn(
              styles.text,
              'text text_type_main-default text_color_inactive'
            )}
          >
            Забыли пароль?
          </p>
          <Link
            to={'/forgot-password'}
            className={cn(styles.link, 'text text_type_main-default')}
          >
            Восстановить пароль
          </Link>
        </div>
      </form>
    </main>
  )
}

export default Login
