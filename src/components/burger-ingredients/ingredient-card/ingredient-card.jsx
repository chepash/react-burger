import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useDrag } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  SET_CURRENT_INGREDIENT,
  SET_IS_INGREDIENT_MODAL_OPEN,
} from '../../../services/actions/modal-actions'
import { burgerIngredientPropType } from '../../../utils/prop-types'
import styles from './ingredient-card.module.scss'

const IngredientCard = ({ ingredient }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { constructorIngredients, constructorBun } = useSelector(
    (store) => store.constructorState
  )

  const onClick = () => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient })
    dispatch({ type: SET_IS_INGREDIENT_MODAL_OPEN, payload: true })
    navigate(`/ingredients/${ingredient._id}`, {
      state: { backgroundLocation: location },
    })
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
