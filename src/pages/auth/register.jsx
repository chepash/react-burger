import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import styles from './auth.module.scss'
import { REGISTER_FORM } from '../../utils/constants'
import { UPDATE_FORM_STATE } from '../../services/actions/forms'
import { useDispatch, useSelector } from 'react-redux'

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { name, email, password } = useSelector(
    (store) => store.formsState.registerForm
  )

  const onChange = (e) => {
    dispatch({
      type: UPDATE_FORM_STATE,
      payload: {
        form: REGISTER_FORM,
        field: e.target.name,
        value: e.target.value,
      },
    })
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} action="">
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
              // ref={inputRef}
              // onIconClick={onIconClick}
              errorText={'Ошибка'}
              size={'default'}
              // extraClass="ml-1"
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
              // ref={inputRef}
              // onIconClick={onIconClick}
              errorText={'Ошибка'}
              size={'default'}
              // extraClass="ml-1"
            />
          </li>
          <li className={cn(styles.list__item)}>
            <PasswordInput
              onChange={onChange}
              value={password}
              name={'password'}
              // extraClass="mb-2"
            />
          </li>
        </ul>

        <Button htmlType="button" type="primary" size="medium">
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
