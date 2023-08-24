import cn from 'classnames'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setCurrentIngredientAction } from '../../../services/actions/modal-actions'
import { TIngredient } from '../../../utils/types'
import styles from './ingredient-details.module.scss'

const IngredientDetails: FC = () => {
  const currentIngredient: TIngredient = useSelector(
    // @ts-ignore
    (store) => store.modalState.currentIngredient
  )
  const { id } = useParams()
  const dispatch = useDispatch()
  const ingredients: TIngredient[] = useSelector(
    // @ts-ignore
    (store) => store.ingredientsState.ingredients
  )

  useEffect(() => {
    if (id) {
      const currentIngredient = ingredients.find((item) => item._id === id)
      if (currentIngredient) {
        dispatch(setCurrentIngredientAction(currentIngredient))
      }
    }
  }, [dispatch, id, ingredients])

  return (
    currentIngredient && (
      <>
        <img
          className={cn(styles.img)}
          alt={currentIngredient.name}
          src={currentIngredient.image_large}
        />
        <figcaption
          className={cn(
            styles.img__caption,
            'mt-4',
            'text text_type_main-medium'
          )}
        >
          {currentIngredient.name}
        </figcaption>

        <ul className={cn(styles.list, 'text_color_inactive', 'mt-8', 'mb-15')}>
          <li className={cn(styles.list__item)}>
            <p className={cn('text text_type_main-small')}>Калории, ккал</p>
            <p className={cn('text text_type_digits-default')}>
              {currentIngredient.calories}
            </p>
          </li>
          <li className={cn(styles.list__item)}>
            <p className={cn('text text_type_main-small')}>Белки, г</p>
            <p className={cn('text text_type_digits-default')}>
              {currentIngredient.proteins}
            </p>
          </li>
          <li className={cn(styles.list__item)}>
            <p className={cn('text text_type_main-small')}>Жиры, г</p>
            <p className={cn('text text_type_digits-default')}>
              {currentIngredient.fat}
            </p>
          </li>
          <li className={cn(styles.list__item)}>
            <p className={cn('text text_type_main-small')}>Углеводы, г</p>
            <p className={cn('text text_type_digits-default')}>
              {currentIngredient.carbohydrates}
            </p>
          </li>
        </ul>
      </>
    )
  )
}

export default IngredientDetails
