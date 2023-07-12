import { useMemo, useState } from 'react'
import cn from 'classnames'
import styles from './burger-ingredients.module.scss'
import IngredientsNavbar from './ingredients-navbar/ingredients-navbar'
import IngredientsCategory from './ingredients-category/ingredients-category'
import Modal from '../modal/modal'
import IngredientDetails from './ingredient-details/ingredient-details'

import { useDispatch, useSelector } from 'react-redux'
import {
  SET_CURRENT_INGREDIENT,
  SET_IS_INGREDIENT_MODAL_OPEN,
} from '../../services/actions/ingredients'

const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState('bun')

  const dispatch = useDispatch()

  const { ingredients, currentIngredient } = useSelector(
    // @ts-ignore
    (store) => store.ingredientsState
  )
  const { isIngredientModalOpen } = useSelector(
    // @ts-ignore
    (store) => store.modalState
  )

  const handleOpenModal = (currentIngredient) => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: currentIngredient })
    // dispatch({ type: SET_IS_INGREDIENT_MODAL_OPEN, payload: true })
  }

  const handleCloseModal = () => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: {} })
    dispatch({ type: SET_IS_INGREDIENT_MODAL_OPEN, payload: false })
  }

  const buns = useMemo(
    () => ingredients.filter((item) => item.type === 'bun'),
    [ingredients]
  )

  const main = useMemo(
    () => ingredients.filter((item) => item.type === 'main'),
    [ingredients]
  )

  const sauce = useMemo(
    () => ingredients.filter((item) => item.type === 'sauce'),
    [ingredients]
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
      {isIngredientModalOpen && (
        <Modal header="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails
            // @ts-ignore
            ingredient={currentIngredient}
          />
        </Modal>
      )}
    </>
  )
}

export default BurgerIngredients
