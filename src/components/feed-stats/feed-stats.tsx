import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { getFeedState } from '../../services/selectors/ws-feed-selectors'
import { useSelector } from '../../services/types/store'
import styles from './feed-stats.module.scss'

const FeedStats: FC = () => {
  const { orders, total, totalToday } = useSelector(getFeedState)
  const [pendingOrderNumbers, setPendingOrderNumbers] = useState<number[]>([])
  const [recentDoneOrderNumbers, setRecentDoneOrderNumbers] = useState<
    number[]
  >([])

  useEffect(() => {
    const pendingNumbers: number[] = []
    const doneNumbers: number[] = []

    for (const order of orders) {
      if (order.status === 'pending') {
        pendingNumbers.push(order.number)
      } else if (order.status === 'done') {
        doneNumbers.push(order.number)
      }
    }

    setPendingOrderNumbers(pendingNumbers)
    setRecentDoneOrderNumbers(doneNumbers)
  }, [orders])

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
