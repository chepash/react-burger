import cn from 'classnames'
import { FC, useEffect } from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import {
  wsUserHistoryConnect,
  wsUserHistoryDisconnect,
} from '../../../services/actions/ws-user-history-actions'
import { getUserOrdersHistory } from '../../../services/selectors/ws-user-history-selectors'
import { useDispatch, useSelector } from '../../../services/types/store'
import {
  ROUTE_PROFILE_ORDER_DETAILS,
  wsBaseUrl,
} from '../../../utils/constants'
import OrderCard from '../../order-card/order-card'
import styles from './profile-orders.module.scss'

const ProfileOrders: FC = () => {
  const dispatch = useDispatch()
  const isUserOrderDetailsPage = useMatch(ROUTE_PROFILE_ORDER_DETAILS)

  const accessToken = localStorage.getItem('accessToken')
  let userOrdersHistory = useSelector(getUserOrdersHistory)

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
            {userOrdersHistory
              .map((order) => <OrderCard key={order._id} order={order} />)
              .reverse()}
          </ul>
        </div>
      </section>
    )
  }
}

export default ProfileOrders
