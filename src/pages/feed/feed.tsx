import cn from 'classnames'
import { FC } from 'react'
import styles from './feed.module.scss'
import FeedOrders from '../../components/feed-orders/feed-orders'
import FeedStats from '../../components/feed-stats/feed-stats'

const Feed: FC = () => {
  return (
    <main className={cn(styles.main, 'pl-5 pr-5 pt-10')}>
      <h1 className={cn(styles.header, 'text text_type_main-large')}>
        Лента заказов
      </h1>
      <FeedOrders />
      <FeedStats />
    </main>
  )
}

export default Feed
