import cn from 'classnames'
import { FC, useEffect } from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import {
  wsUserHistoryConnect,
  wsUserHistoryDisconnect,
} from '../../../services/actions/ws-user-history-actions'
import { getUserOrdersHistory } from '../../../services/selectors/ws-user-history-selectors'
import { useDispatch, useSelector } from '../../../services/types/store'
import { wsBaseUrl } from '../../../utils/constants'
import OrderCard from '../../order-card/order-card'
import styles from './profile-orders.module.scss'

const ProfileOrders: FC = () => {
  const dispatch = useDispatch()
  const isUserOrderDetailsPage = useMatch('/profile/orders/:id')

  const accessToken = localStorage.getItem('accessToken')
  const userOrdersHistory = useSelector(getUserOrdersHistory)

  useEffect(() => {
    dispatch(wsUserHistoryConnect(`${wsBaseUrl}?token=${accessToken}`))

    return () => {
      dispatch(wsUserHistoryDisconnect())
    }
  }, [])

  if (isUserOrderDetailsPage) {
    return <Outlet />
  } else {
    return (
      <section aria-label="История заказов" className={cn(styles.section)}>
        <div className={cn(styles.section_scrollable)}>
          <ul className={cn(styles.list)}>
            {userOrdersHistory.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

export default ProfileOrders
