import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as api from '../../utils/api'
import styles from './auth.module.scss'

import { SET_IS_ERROR_MODAL_OPEN } from '../../services/actions/modal-actions'
import {
  UPDATE_PWD_RESET_FORM_STATE,
  passwordResetFormSubmit,
} from '../../services/actions/password-reset-actions'

function PasswordReset() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { token, password } = useSelector(
    (store) => store.passwordResetState.form
  )

  const onChange = (e) => {
    dispatch({
      type: UPDATE_PWD_RESET_FORM_STATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(passwordResetFormSubmit({ token, password }, navigate))
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={cn('text text_type_main-medium', 'mb-6')}>
          Восстановление пароля
        </h1>
        <ul className={styles.list}>
          <li className={cn(styles.list__item)}>
            <PasswordInput
              placeholder={'Введите новый пароль'}
              onChange={onChange}
              value={password}
              name={'password'}
            />
          </li>

          <li className={cn(styles.list__item)}>
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              onChange={onChange}
              value={token}
              name={'token'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
            />
          </li>
        </ul>

        <Button
          disabled={!token || !password}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Сохранить
        </Button>

        <div className={cn(styles.link__wrapper, 'mt-20')}>
          <p
            className={cn(
              styles.text,
              'mp-4',
              'text text_type_main-default text_color_inactive'
            )}
          >
            Вспомнили пароль?
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

export default PasswordReset
