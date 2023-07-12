import { useEffect, useMemo, useRef, useState } from 'react'
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

  const rootRef = useRef(null)

  const bunRef = useRef(null)
  const sauceRef = useRef(null)
  const mainRef = useRef(null)

  const updateCurrentTab = () => {
    const rootRect = rootRef?.current?.getBoundingClientRect()
    const bunRect = bunRef?.current?.getBoundingClientRect()
    const sauceRect = sauceRef?.current?.getBoundingClientRect()
    const mainRect = mainRef?.current?.getBoundingClientRect()

    const bunDistance = Math.abs(rootRect.top - bunRect.top)
    const sauceDistance = Math.abs(rootRect.top - sauceRect.top)
    const mainDistance = Math.abs(rootRect.top - mainRect.top)

    if (bunDistance <= sauceDistance && bunDistance <= mainDistance) {
      setCurrentTab('bun')
    } else if (sauceDistance <= bunDistance && sauceDistance <= mainDistance) {
      setCurrentTab('sauce')
    } else {
      setCurrentTab('main')
    }
  }

  useEffect(() => {
    const rootElement = rootRef?.current
    const handleScroll = () => {
      updateCurrentTab()
    }

    if (rootElement) {
      rootElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (rootElement) {
        rootElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [currentTab])

  const dispatch = useDispatch()

  const { ingredients, currentIngredient } = useSelector(
    // @ts-ignore
    (store) => store.ingredientsState
  )
  const { isIngredientModalOpen } = useSelector(
    // @ts-ignore
    (store) => store.modalState
  )

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
        <div ref={rootRef} className={cn(styles.section__content)}>
          <div className={cn(styles.section__content_scrollable)}>
            <IngredientsCategory
              ref={bunRef}
              title="Булки"
              ingredients={buns}
              categoryId="bun"
            />
            <IngredientsCategory
              ref={sauceRef}
              title="Соусы"
              ingredients={sauce}
              categoryId="sauce"
            />
            <IngredientsCategory
              ref={mainRef}
              title="Начинки"
              ingredients={main}
              categoryId="main"
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
