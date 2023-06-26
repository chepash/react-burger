import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.scss'
import cn from 'classnames'
import { burgerIngredientPropType } from '../../../utils/prop-types'
import { useState } from 'react'
import IngredientDetails from '../../modal/ingredient-details/ingredient-details'

// @ts-ignore
const IngredientCard = ({ ingredient }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <li className={styles.card} onClick={handleOpenModal}>
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
      {isModalOpen && (
        <IngredientDetails ingredient={ingredient} onClose={handleCloseModal} />
      )}
    </>
  )
}

IngredientCard.propTypes = {
  ingredient: burgerIngredientPropType,
}

export default IngredientCard
