import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import { PropTypes } from 'prop-types'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.scss'
import cn from 'classnames'
import { burgerIngredientPropType } from '../../../utils/prop-types'
import { addIngredient } from '../../../services/actions/constructor'

const IngredientCard = ({ ingredient, onIngredientClick }) => {
  const dispatch = useDispatch()

  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )

  const onClick = () => {
    dispatch(addIngredient(ingredient))
    onIngredientClick(ingredient)
  }

  let amount

  if (ingredient.type === 'bun') {
    amount = ingredient._id === constructorBun._id ? 2 : 0
  } else {
    amount = constructorIngredients.filter(
      (item) => item._id === ingredient._id
    ).length
  }

  return (
    <li className={styles.card} onClick={onClick}>
      {amount > 0 && <Counter count={amount} size="default" extraClass="m-1" />}
      <img
        className={cn(styles.card__img, 'mr-4 ml-4')}
        alt={ingredient.name}
        src={ingredient.image}
      />
      <div className={styles.card__footer}>
        <p
          className={cn(
            styles.card__price,
            'text text_type_main-default',
            'mt-1 mb-1'
          )}
        >
          {ingredient.price} <CurrencyIcon type="primary" />
        </p>
        <p className={cn(styles.card__name, 'text text_type_main-default')}>
          {ingredient.name}
        </p>
      </div>
    </li>
  )
}

IngredientCard.propTypes = {
  ingredient: burgerIngredientPropType.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
}

export default IngredientCard
