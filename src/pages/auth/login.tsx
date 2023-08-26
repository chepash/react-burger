import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  loginFormSubmitThunk,
  updateLoginFormStateAction,
} from '../../services/actions/login-actions'
import { useDispatch, useSelector } from '../../services/types/hooks'
import styles from './auth.module.scss'

const Login: FC = () => {
  const dispatch = useDispatch()

  const { email, password } = useSelector((store) => store.loginState.form)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateLoginFormStateAction(e.target.name, e.target.value))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(loginFormSubmitThunk(email, password))
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
