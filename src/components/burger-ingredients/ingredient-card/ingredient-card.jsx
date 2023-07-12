import { useDispatch, useSelector } from 'react-redux'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.scss'
import cn from 'classnames'
import { burgerIngredientPropType } from '../../../utils/prop-types'
import { useDrag } from 'react-dnd'
import {
  SET_CURRENT_INGREDIENT,
  SET_IS_INGREDIENT_MODAL_OPEN,
} from '../../../services/actions/ingredients'
import { addIngredient } from '../../../services/actions/constructor'

const IngredientCard = ({ ingredient }) => {
  const dispatch = useDispatch()

  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )

  const onClick = () => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient })
    // dispatch({ type: SET_IS_INGREDIENT_MODAL_OPEN, payload: true })

    dispatch(addIngredient(ingredient))
  }

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  })

  let amount

  if (ingredient.type === 'bun') {
    amount = ingredient._id === constructorBun._id ? 2 : 0
  } else {
    amount = constructorIngredients.filter(
      (item) => item._id === ingredient._id
    ).length
  }

  return (
    <li className={styles.card} onClick={onClick} ref={dragRef}>
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
}

export default IngredientCard
