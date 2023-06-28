import cn from 'classnames'
import PropTypes from 'prop-types'
import okLogo from '../../../images/done.svg'

function OrderDetails({ orderNumber }) {
  return (
    <>
      <h2 className={cn('text', 'text_type_digits-large', 'mt-30', 'mb-8')}>
        {orderNumber}
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

OrderDetails.propTypes = {
  orderNumber: PropTypes.string.isRequired,
}

export default OrderDetails
