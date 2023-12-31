import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, SyntheticEvent, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {
  clearPwdResetStateAction,
  updatePwdResetFormStateAction,
} from '../../services/actions/password-reset-actions'
import { clearPwdRestoreStateAction } from '../../services/actions/password-restore-actions'
import { getPasswordResetFormData } from '../../services/selectors/password-reset-selectors'
import { getIsEmailSent } from '../../services/selectors/password-restore-selectors'
import { passwordResetFormSubmitThunk } from '../../services/thunks/password-reset-form-submit-thunk'
import { useDispatch, useSelector } from '../../services/types/store'
import { ROUTE_HOME, ROUTE_LOGIN, passwordPattern } from '../../utils/constants'
import styles from './auth.module.scss'

const PasswordReset: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const { token, password } = useSelector(getPasswordResetFormData)

  const isEmailSent = useSelector(getIsEmailSent)

  const onPasswordIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePwdResetFormStateAction(e.target.name, e.target.value))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(passwordResetFormSubmitThunk({ token, password }, navigate))
  }

  const isPasswordValid = (password: string) => {
    if (password === '') {
      return true
    }

    return passwordPattern.test(password)
  }

  if (!isEmailSent) {
    return <Navigate to={ROUTE_HOME} replace />
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={cn('text text_type_main-medium', 'mb-6')}>
          Восстановление пароля
        </h1>
        <ul className={styles.list}>
          <li className={cn(styles.list__item)}>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder={'Пароль'}
              onChange={onChange}
              onIconClick={password ? onPasswordIconClick : undefined}
              value={password}
              name={'password'}
              error={!isPasswordValid(password)}
              errorText={
                'Минимум 8 символов. Хотя бы одна заглавная буква, одна строчная букву и одна цифра.'
              }
              size={'default'}
              icon={
                !password
                  ? 'EditIcon'
                  : isPasswordVisible
                  ? 'HideIcon'
                  : 'ShowIcon'
              }
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
            to={ROUTE_LOGIN}
            onClick={() => {
              dispatch(clearPwdResetStateAction())
              dispatch(clearPwdRestoreStateAction())
            }}
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
