import cn from 'classnames'
import { FC } from 'react'
import okLogo from '../../../images/done.svg'

type TOrderDetailsProps = {
  orderNumber: number
}

const OrderStatusResponse: FC<TOrderDetailsProps> = ({ orderNumber }) => {
  return (
    <>
      <h2 className={cn('text', 'text_type_digits-large', 'mt-30', 'mb-8')}>
        {orderNumber.toString()}
      </h2>
      <p className={cn('text text_type_main-medium', 'mb-15')}>
        индетификатор заказа
      </p>
      <img className={cn('mb-15')} alt={'Заказ оформлен'} src={okLogo} />
      <p className={cn('text text_type_main-small', 'mb-2')}>
        Ваш заказ начали готовить
      </p>
      <p
        className={cn(
          'text',
          'text_type_main-small',
          'text_color_inactive',
          'mb-30'
        )}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

export default OrderStatusResponse
