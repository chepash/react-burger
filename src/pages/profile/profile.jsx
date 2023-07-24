import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileNav from '../../components/profile-nav/profile-nav'
import {
  UPDATE_PROFILE_FORM_STATE,
  profileFormSubmit,
} from '../../services/actions/profile-actions'
import { passwordPattern } from '../../utils/constants'
import styles from './profile.module.scss'

function Profile() {
  const dispatch = useDispatch()

  const {
    name: inputNameValue,
    email: inputEmailValue,
    password: inputPasswordValue,
  } = useSelector((store) => store.profileState.form)

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

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
  const onPasswordIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      profileFormSubmit(
        {
          name: inputNameValue,
          email: inputEmailValue,
          password: inputPasswordValue,
        },
        userName,
        userEmail
      )
    )
  }

  const handleCancel = () => {
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

  const isPasswordValid = (password) => {
    if (password === '') {
      return true
    }
    return passwordPattern.test(password)
  }

  const isButtonsVisible =
    inputNameValue !== userName ||
    inputEmailValue !== userEmail ||
    inputPasswordValue

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
                value={inputNameValue}
                name={'name'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                icon={'EditIcon'}
              />
            </li>
            <li className={cn(styles.list__item)}>
              <Input
                type={'email'}
                placeholder={'Логин'}
                onChange={onChange}
                value={inputEmailValue}
                name={'email'}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
                icon={'EditIcon'}
              />
            </li>
            <li className={cn(styles.list__item)}>
              <Input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder={'Пароль'}
                onChange={onChange}
                onIconClick={
                  inputPasswordValue ? onPasswordIconClick : undefined
                }
                value={inputPasswordValue}
                name={'password'}
                error={!isPasswordValid(inputPasswordValue)}
                errorText={
                  'Минимум 8 символов. Хотя бы одна заглавная буква, одна строчная букву и одна цифра.'
                }
                size={'default'}
                icon={
                  !inputPasswordValue
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
              disabled={
                !isButtonsVisible || !isPasswordValid(inputPasswordValue)
              }
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
