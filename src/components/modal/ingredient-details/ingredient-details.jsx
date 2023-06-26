import cn from 'classnames'
import styles from './ingredient-details.module.scss'

import Modal from '../modal'

// @ts-ignore
function IngredientDetails({ ingredient, onClose }) {
  return (
    <Modal header="Детали ингредиента" onClose={onClose}>
      <img
        className={cn(styles.img)}
        alt={ingredient.name}
        src={ingredient.image_large}
      />
      <figcaption
        className={cn(
          styles.img__caption,
          'mt-4',
          'text text_type_main-medium'
        )}
      >
        {ingredient.name}
      </figcaption>

      <ul className={cn(styles.list, 'text_color_inactive', 'mt-8', 'mb-15')}>
        <li className={cn(styles.list__item)}>
          <p className={cn('text text_type_main-small')}>Калории, ккал</p>
          <p className={cn('text text_type_digits-default')}>
            {ingredient.calories}
          </p>
        </li>
        <li className={cn(styles.list__item)}>
          <p className={cn('text text_type_main-small')}>Белки, г</p>
          <p className={cn('text text_type_digits-default')}>
            {ingredient.proteins}
          </p>
        </li>
        <li className={cn(styles.list__item)}>
          <p className={cn('text text_type_main-small')}>Жиры, г</p>
          <p className={cn('text text_type_digits-default')}>
            {ingredient.fat}
          </p>
        </li>
        <li className={cn(styles.list__item)}>
          <p className={cn('text text_type_main-small')}>Углеводы, г</p>
          <p className={cn('text text_type_digits-default')}>
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </Modal>
  )
}

export default IngredientDetails
