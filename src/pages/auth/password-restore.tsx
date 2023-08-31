import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updatePwdRestoreFormStateAction } from '../../services/actions/password-restore-actions'
import { getPasswordRestoreFormData } from '../../services/selectors/password-restore-selectors'
import { passwordRestoreFormSubmitThunk } from '../../services/thunks/password-restore-form-submit-thunk'
import { useDispatch, useSelector } from '../../services/types/store'
import styles from './auth.module.scss'

const PasswordRestore: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { email } = useSelector(getPasswordRestoreFormData)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePwdRestoreFormStateAction(e.target.name, e.target.value))
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(passwordRestoreFormSubmitThunk(email, navigate))
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
            size={'default'}
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
