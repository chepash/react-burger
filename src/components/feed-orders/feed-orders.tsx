import cn from 'classnames'
import { FC } from 'react'
import styles from './feed-orders.module.scss'
import OrderCard from '../order-card/order-card'
import { useSelector } from '../../services/types/store'
import IngredientCard from '../burger-ingredients/ingredient-card/ingredient-card'

const FeedOrders: FC = () => {
  const feedOrders = useSelector((store) => store.feedState.response.orders)

  return (
    <section aria-label="Перечень последних выполненых заказов">
      <div className={cn(styles.section__content)}>
        <div className={cn(styles.section__content_scrollable)}>
          <ul className={cn(styles.list)}>
            {feedOrders.map(
              (order) =>
                order.status === 'done' && (
                  <OrderCard key={order._id} order={order} />
                )
            )}

            {/* // {ingredients.map((item) => (
          //   <IngredientCard key={item._id} ingredient={item} />
          // ))}
            // <li>
            //   <OrderCard />
            // </li>
            // <li>
            //   <OrderCard />
            // </li>
            // <li>
            //   <OrderCard />
            // </li>
            // <li>
            //   <OrderCard />
            // </li>
            // <li>
            //   <OrderCard />
            // </li> */}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeedOrders
