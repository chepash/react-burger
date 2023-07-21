import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import ProfileNav from '../../components/profile-nav/profile-nav'
import { UPDATE_PROFILE_FORM_STATE } from '../../services/actions/profile-actions'
import styles from './profile.module.scss'

function Profile() {
  const dispatch = useDispatch()

  const { name, email, password } = useSelector(
    (store) => store.profileState.form
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

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const isButtonsVisible = true

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
                type={'password'}
                placeholder={'Пароль'}
                onChange={onChange}
                value={password}
                name={'password'}
                error={false}
                // ref={inputRef}
                // onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                // extraClass="ml-1"
                icon={'EditIcon'}
              />
            </li>
          </ul>
          {isButtonsVisible && (
            <div className={styles.buttons}>
              <button className={cn(styles.button, 'mr-6')}>Отменить</button>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </section>
    </main>
  )
}

export default Profile
