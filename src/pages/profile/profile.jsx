import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import ProfileNav from '../../components/profile-nav/profile-nav'
import { UPDATE_PROFILE_FORM_STATE } from '../../services/actions/profile-actions'
import styles from './profile.module.scss'
import { useEffect, useState } from 'react'

function Profile() {
  const dispatch = useDispatch()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const { name, email, password } = useSelector(
    (store) => store.profileState.form
  )

  const { name: userName, email: userEmail } = useSelector(
    (store) => store.userState.user
  )

  const onChange = (e) => {
    dispatch({
      type: UPDATE_PROFILE_FORM_STATE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    })
  }
  const onPasswordIconClick = (e) => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleCancel = (e) => {
    dispatch({
      type: UPDATE_PROFILE_FORM_STATE,
      payload: {
        field: 'name',
        value: userName,
      },
    })
    dispatch({
      type: UPDATE_PROFILE_FORM_STATE,
      payload: {
        field: 'email',
        value: userEmail,
      },
    })
    dispatch({
      type: UPDATE_PROFILE_FORM_STATE,
      payload: {
        field: 'password',
        value: '',
      },
    })
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

  const isPasswordValid = (password) => {
    if (password === '') {
      return true
    }
    return passwordPattern.test(password)
  }

  const isButtonsVisible = name !== userName || email !== userEmail || password

  return (
    <main className={cn(styles.main, 'pl-5 pr-5', 'mt-30')}>
      <section
        aria-label="Навигация по личному кабиенту"
        className={cn(styles.section)}
      >
        <ProfileNav />
        <p
          className={cn(
            'mt-20',
            'text',
            'text_type_main-default',
            'text_color_inactive'
          )}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </section>
      <section
        aria-label="Изменение персональных данных"
        className={cn(styles.section)}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
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
                icon={'EditIcon'}
              />
            </li>
            <li className={cn(styles.list__item)}>
              <Input
                type={'email'}
                placeholder={'Логин'}
                onChange={onChange}
                value={email}
                name={'email'}
                error={false}
                // ref={inputRef}
                // onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                // extraClass="ml-1"
                icon={'EditIcon'}
              />
            </li>
            <li className={cn(styles.list__item)}>
              <Input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder={'Пароль'}
                onChange={onChange}
                onIconClick={password ? onPasswordIconClick : undefined}
                value={password}
                name={'password'}
                error={!isPasswordValid(password)}
                // ref={inputRef}
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
          </ul>

          <div
            className={cn(styles.buttons, {
              [styles.buttons_visible]: isButtonsVisible,
            })}
          >
            <button
              type="button"
              onClick={handleCancel}
              className={cn(styles.button, 'mr-6', {
                [styles.button_clickable]: isButtonsVisible,
              })}
              disabled={!isButtonsVisible}
            >
              Отменить
            </button>
            <Button
              disabled={!isButtonsVisible || !isPasswordValid(password)}
              htmlType="submit"
              type="primary"
              size="medium"
            >
              Сохранить
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Profile
