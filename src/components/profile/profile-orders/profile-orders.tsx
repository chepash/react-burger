import cn from 'classnames'
import { FC, useEffect } from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import {
  wsUserFeedConnect,
  wsUserFeedDisconnect,
} from '../../../services/actions/ws-user-feed-actions'
import { useDispatch, useSelector } from '../../../services/types/store'
import { wsBaseUrl } from '../../../utils/constants'
import OrderCard from '../../order-card/order-card'
import styles from './profile-orders.module.scss'

const ProfileOrders: FC = () => {
  const dispatch = useDispatch()
  const isUserOrderDetailsPage = useMatch('/profile/orders/:id')

  const accessToken = localStorage.getItem('accessToken')
  const orderHistory = useSelector((store) => store.userFeedState.orders)

  useEffect(() => {
    dispatch(wsUserFeedConnect(`${wsBaseUrl}?token=${accessToken}`))

    return () => {
      dispatch(wsUserFeedDisconnect())
    }
  }, [])

  if (isUserOrderDetailsPage) {
    return <Outlet />
  } else {
    return (
      <section aria-label="История заказов" className={cn(styles.section)}>
        <div className={cn(styles.section_scrollable)}>
          <ul className={cn(styles.list)}>
            {orderHistory.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

export default ProfileOrders
