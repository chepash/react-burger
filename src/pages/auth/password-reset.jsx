import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import styles from './auth.module.scss'
import { useState } from 'react'
import * as api from '../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_FORM_STATE } from '../../services/actions/forms'
import { PASSWORD_RESET_FORM } from '../../utils/constants'

function PasswordReset() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { code, password } = useSelector(
    (store) => store.formsState.passwordResetForm
  )

  const onChange = (e) => {
    dispatch({
      type: UPDATE_FORM_STATE,
      payload: {
        form: PASSWORD_RESET_FORM,
        field: e.target.name,
        value: e.target.value,
      },
    })
  }

  const onButtonClick = (e) => {
    e.preventDefault()
    api
      .sendPasswordResetRequest(password, code)
      .then((res) => {
        if (res.success) {
          navigate('/', { replace: true })
        }
      })
      .catch((err) => {
        console.log(`Ошибка sendPasswordResetRequest: ${err}`)
      })
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} action="">
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
              // extraClass="mb-2"
            />
          </li>

          <li className={cn(styles.list__item)}>
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              onChange={onChange}
              value={code}
              name={'code'}
              error={false}
              // ref={inputRef}
              // onIconClick={onIconClick}
              errorText={'Ошибка'}
              size={'default'}
              // extraClass="ml-1"
            />
          </li>
        </ul>

        <Button
          disabled={!code || !password}
          onClick={onButtonClick}
          htmlType="button"
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
