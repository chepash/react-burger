import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import styles from './auth.module.scss'
import { useRef, useState } from 'react'
import * as api from '../../utils/api'

function PasswordRestore() {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const onButtonClick = (e) => {
    e.preventDefault()
    api
      .sendPasswordRecoveryEmail(value)
      .then((res) => {
        if (res.success) {
          navigate('/reset-password', { replace: true })
        }
      })
      .catch(console.log)
  }

  return (
    <main className={cn(styles.main, 'pl-5 pr-5')}>
      <form className={styles.form} action="submit">
        <h1 className={cn('text text_type_main-medium', 'mb-6')}>
          Восстановление пароля
        </h1>

        <div className={cn(styles.list__item)}>
          <Input
            type={'email'}
            placeholder={'Укажите E-mail'}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            name={'email'}
            // error={true}
            // ref={inputRef}
            // errorText={'Ошибка'}
            size={'default'}
            // extraClass="ml-1"
          />
        </div>

        <Button
          htmlType="button"
          type="primary"
          size="medium"
          disabled={!value}
          onClick={onButtonClick}
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
