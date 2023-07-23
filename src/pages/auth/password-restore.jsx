import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { SET_IS_ERROR_MODAL_OPEN } from '../../services/actions/modal-actions'
import {
  UPDATE_PWD_RESTORE_FORM_STATE,
  passwordRestoreFormSubmit,
} from '../../services/actions/password-restore-actions'
import * as api from '../../utils/api'
import styles from './auth.module.scss'

function PasswordRestore() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { email } = useSelector((store) => store.passwordRestoreState.form)

  const onChange = (e) => {
    dispatch({
      type: UPDATE_PWD_RESTORE_FORM_STATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(passwordRestoreFormSubmit(email, navigate))
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={cn('text text_type_main-medium', 'mb-6')}>
          Восстановление пароля
        </h1>

        <div className={cn(styles.list__item)}>
          <Input
            type={'email'}
            placeholder={'Укажите E-mail'}
            onChange={onChange}
            value={email}
            name={'email'}
            // error={true}
            // ref={inputRef}
            // errorText={'Ошибка'}
            size={'default'}
            // extraClass="ml-1"
          />
        </div>

        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!email}
        >
          Восстановить
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

export default PasswordRestore
