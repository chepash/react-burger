import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateRegisterFormStateAction } from '../../services/actions/register-actions'
import { registerFormSubmitThunk } from '../../services/thunks/register-form-submit-thunk'
import { useDispatch, useSelector } from '../../services/types/store'
import styles from './auth.module.scss'

const Register: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { name, email, password } = useSelector(
    (store) => store.registerState.form
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateRegisterFormStateAction(e.target.name, e.target.value))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(registerFormSubmitThunk(name, email, password, navigate))
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={cn('text text_type_main-medium', 'mb-6')}>
          Регистрация
        </h1>
        <ul className={styles.list}>
          <li className={cn(styles.list__item)}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={onChange}
              value={name}
              name={'name'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
            />
          </li>
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
          disabled={!name && !email && !password}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Зарегистрироваться
        </Button>

        <div className={cn(styles.link__wrapper, 'mt-20')}>
          <p
            className={cn(
              styles.text,
              'mp-4',
              'text text_type_main-default text_color_inactive'
            )}
          >
            Уже зарегистрированы?
          </p>
          <Link
            to={'/login'}
            className={cn(styles.link, 'text text_type_main-default')}
          >
            Войти
          </Link>
        </div>
      </form>
    </main>
  )
}

export default Register
