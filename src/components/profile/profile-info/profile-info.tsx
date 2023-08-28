import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, SyntheticEvent, useState } from 'react'
import {
  profileFormSubmitThunk,
  updateProfileFormStateAction,
} from '../../../services/actions/profile-actions'
import { useDispatch, useSelector } from '../../../services/types/store'
import { passwordPattern } from '../../../utils/constants'
import styles from './profile-info.module.scss'

const ProfileInfo: FC = () => {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateProfileFormStateAction(e.target.name, e.target.value))
  }

  const onPasswordIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const changedInputs = {
      name: inputNameValue,
      email: inputEmailValue,
      password: inputPasswordValue,
    }

    Object.keys(changedInputs).forEach((field) => {
      if (
        (field === 'name' && changedInputs[field] === userName) ||
        (field === 'email' && changedInputs[field] === userEmail) ||
        (field === 'password' && changedInputs[field] === '')
      ) {
        delete changedInputs[field]
      }
    })

    dispatch(profileFormSubmitThunk(changedInputs))
  }

  const handleCancel = () => {
    dispatch(updateProfileFormStateAction('name', userName))
    dispatch(updateProfileFormStateAction('email', userEmail))
    dispatch(updateProfileFormStateAction('password', ''))
  }

  const isPasswordValid = (password: string): boolean => {
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
              onIconClick={inputPasswordValue ? onPasswordIconClick : undefined}
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
            disabled={!isButtonsVisible || !isPasswordValid(inputPasswordValue)}
            htmlType="submit"
            type="primary"
            size="medium"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  )
}

export default ProfileInfo
