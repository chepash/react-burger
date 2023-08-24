import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { useDrag } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  setCurrentIngredientAction,
  setIsIngredientModalOpenAction,
} from '../../../services/actions/modal-actions'
import { TIngredient, TIngredientWithUUID } from '../../../utils/types'
import styles from './ingredient-card.module.scss'

type TIngredientCardProps = {
  ingredient: TIngredient
}

const IngredientCard: FC<TIngredientCardProps> = ({ ingredient }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )

  const onClick = () => {
    dispatch(setCurrentIngredientAction(ingredient))
    dispatch(setIsIngredientModalOpenAction(true))
    navigate(`/ingredients/${ingredient._id}`, {
      state: { backgroundLocation: location },
    })
  }

  const [, dragTargetRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  })

  let amount

  if (ingredient.type === 'bun') {
    amount = ingredient._id === constructorBun._id ? 2 : 0
  } else {
    // @ts-ignore
    // Убрать после типизации хранилища
    amount = (constructorIngredients as TIngredientWithUUID[]).filter(
      (item) => item.ingredient._id === ingredient._id
    ).length
  }

  return (
    <li className={styles.card} onClick={onClick} ref={dragTargetRef}>
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

export default IngredientCard
