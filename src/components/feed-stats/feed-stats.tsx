import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from '../../services/types/store'
import styles from './feed-stats.module.scss'

const FeedStats: FC = () => {
  const { orders, total, totalToday } = useSelector(
    (store) => store.feedState.response
  )

  const pendingOrderNumbers: number[] = []
  for (const order of orders) {
    if (order.status === 'pending') {
      pendingOrderNumbers.push(order.number)
    }
    if (pendingOrderNumbers.length >= 10) {
      break
    }
  }

  const recentDoneOrderNumbers: number[] = []

  for (const order of orders) {
    if (order.status === 'done') {
      const now = new Date()
      const updatedAtDate = new Date(order.updatedAt)
      const timeDiff = now.getTime() - updatedAtDate.getTime()

      // 900000 ms = 15 minutes
      if (timeDiff <= 900000) {
        recentDoneOrderNumbers.push(order.number)
      }
    }

    if (recentDoneOrderNumbers.length >= 10) {
      break
    }
  }

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
              {recentDoneOrderNumbers.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
          </div>
          <div className={cn(styles.orders__ongoing)}>
            <p className={cn('text text_type_main-medium', 'mb-6')}>
              В работе:
            </p>
            <ul className={cn(styles.list, 'text text_type_digits-default')}>
              {pendingOrderNumbers.map((number) => (
                <li key={number}>{number}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className={cn('text text_type_main-medium', 'mt-15')}>
          Выполнено за все время:
        </p>
        <p className={cn('text text_type_digits-large')}>{total}</p>
        <p className={cn('text text_type_main-medium', 'mt-15')}>
          Выполнено за сегодня:
        </p>
        <p className={cn('text text_type_digits-large')}>{totalToday}</p>
      </div>
    </section>
  )
}

export default FeedStats
