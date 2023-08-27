import cn from 'classnames'
import { FC } from 'react'
import styles from './feed-stats.module.scss'

const FeedStats: FC = () => {
  return (
    <section aria-label="Статусы и общая статистика всех заказов">
      <div className={cn(styles.orders)}>
        <div className={cn(styles.orders__board)}>
          <div className={cn(styles.orders__ready)}>
            <p className={cn('text text_type_main-medium', 'mb-6')}>Готовы:</p>
            <ul
              className={cn(
                styles.list,
                styles.list_green,
                'text text_type_digits-default'
              )}
            >
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
            </ul>
          </div>
          <div className={cn(styles.orders__ongoing)}>
            <p className={cn('text text_type_main-medium', 'mb-6')}>
              В работе:
            </p>
            <ul className={cn(styles.list, 'text text_type_digits-default')}>
              <li>034888</li>
              <li>034888</li>
              <li>034888</li>
              <li>034888</li>
              <li>034888</li>
              <li>034888</li>
            </ul>
          </div>
        </div>

        <p className={cn('text text_type_main-medium', 'mt-15')}>
          Выполнено за все время:
        </p>
        <p className={cn('text text_type_digits-large')}>28 752</p>
        <p className={cn('text text_type_main-medium', 'mt-15')}>
          Выполнено за сегодня:
        </p>
        <p className={cn('text text_type_digits-large')}>138</p>
      </div>
    </section>
  )
}

export default FeedStats
