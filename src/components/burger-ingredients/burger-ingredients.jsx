import { useContext, useMemo, useState } from 'react'
import cn from 'classnames'
import styles from './burger-ingredients.module.scss'
import IngredientsNavbar from './ingredients-navbar/ingredients-navbar'
import IngredientsCategory from './ingredients-category/ingredients-category'
import Modal from '../modal/modal'
import IngredientDetails from './ingredient-details/ingredient-details'

import { AppContext } from '../../services/appContext'

const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('bun')
  const [selectedIngredient, setSelectedIngredient] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { state } = useContext(AppContext)

  const handleOpenModal = (currentIngredient) => {
    setSelectedIngredient(currentIngredient)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const buns = useMemo(
    () => state.ingredients.filter((item) => item.type === 'bun'),
    [state.ingredients]
  )

  const main = useMemo(
    () => state.ingredients.filter((item) => item.type === 'main'),
    [state.ingredients]
  )

  const sauce = useMemo(
    () => state.ingredients.filter((item) => item.type === 'sauce'),
    [state.ingredients]
  )

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

export default BurgerIngredients
