import { useState } from 'react'
import cn from 'classnames'
import styles from './burger-ingredients.module.scss'
import IngredientsNavbar from './ingredients-navbar/ingredients-navbar'
import PropTypes from 'prop-types'
import IngredientsCategory from './ingredients-category/ingredients-category'
import { burgerIngredientPropType } from '../../utils/prop-types'
import Modal from '../modal/modal'
import IngredientDetails from './ingredient-details/ingredient-details'

const BurgerIngredients = ({ ingredients }) => {
  const [currentTab, setCurrentTab] = useState('bun')
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (currentIngredient) => {
    setSelectedIngredient(currentIngredient)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const buns = ingredients.filter((item) => item.type === 'bun')

  const main = ingredients.filter((item) => item.type === 'main')

  const sauce = ingredients.filter((item) => item.type === 'sauce')

  const scrollTo = (categoryId) => {
    const section = document.getElementById(categoryId)

    if (section !== null) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleCategoryClick = (categoryId) => {
    setCurrentTab(categoryId)
    scrollTo(categoryId)
  }

  return (
    <>
      <section className={styles.section} aria-label="Ингридиенты">
        <h1 className={cn('text text_type_main-large', 'mt-10 mb-5')}>
          Соберите бургер
        </h1>
        <IngredientsNavbar
          currentTab={currentTab}
          handleCategoryClick={handleCategoryClick}
        />
        <div className={cn(styles.section__content)}>
          <div className={cn(styles.section__content_scrollable)}>
            <IngredientsCategory
              title="Булки"
              ingredients={buns}
              categoryId="bun"
              onIngredientClick={handleOpenModal}
            />
            <IngredientsCategory
              title="Соусы"
              ingredients={sauce}
              categoryId="sauce"
              onIngredientClick={handleOpenModal}
            />
            <IngredientsCategory
              title="Начинки"
              ingredients={main}
              categoryId="main"
              onIngredientClick={handleOpenModal}
            />
          </div>
        </div>
      </section>{' '}
      {isModalOpen && (
        <Modal header="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
    </>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(burgerIngredientPropType).isRequired,
}

export default BurgerIngredients
