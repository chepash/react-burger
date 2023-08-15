import cn from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './not-found.module.scss'

const NotFound: FC = () => {
  return (
    <main className={cn(styles.main, 'pl-5 pr-5', 'mt-30')}>
      <h1 className={'text text_type_main-large'}>Упс! Ошибка 404</h1>
      <br />
      <p className={'text text_type_main-medium'}>
        Запрашиваемая странница не найдена
      </p>
      <br />
      <br />
      <p className={'text text_type_main-default'}>
        Проверьте адрес или перейдите на{' '}
        <Link to="/" className={styles.link}>
          главную страницу
        </Link>
      </p>
    </main>
  )
}

export default NotFound
