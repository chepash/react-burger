import cn from 'classnames'
import { FC, useEffect } from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import FeedOrders from '../../components/feed-orders/feed-orders'
import FeedStats from '../../components/feed-stats/feed-stats'
import {
  wsFeedConnect,
  wsFeedDisconnect,
} from '../../services/actions/ws-feed-actions'
import { useDispatch } from '../../services/types/store'
import { ROUTE_FEED_ORDER_DETAILS, wsBaseUrl } from '../../utils/constants'
import styles from './feed.module.scss'

const Feed: FC = () => {
  const dispatch = useDispatch()
  const isFeedOrderDetailsPage = useMatch(ROUTE_FEED_ORDER_DETAILS)

  useEffect(() => {
    dispatch(wsFeedConnect(`${wsBaseUrl}/all`))

    return () => {
      dispatch(wsFeedDisconnect())
    }
  }, [])

  if (isFeedOrderDetailsPage) {
    return (
      <main className={cn(styles.order, 'pt-10')}>
        <Outlet />
      </main>
    )
  } else {
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
}

export default Feed
