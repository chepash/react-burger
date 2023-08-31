import cn from 'classnames'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { getIngredients } from '../../services/selectors/ingredients-selectors'
import { TIngredientsCategory } from '../../services/types/data'
import { useSelector } from '../../services/types/store'
import styles from './burger-ingredients.module.scss'
import IngredientsCategory from './ingredients-category/ingredients-category'
import IngredientsNavbar from './ingredients-navbar/ingredients-navbar'

const BurgerIngredients: FC = () => {
  const ingredients = useSelector(getIngredients)

  const [currentTab, setCurrentTab] = useState<TIngredientsCategory>('bun')

  const rootRef = useRef<HTMLDivElement | null>(null)
  const bunRef = useRef<HTMLHeadingElement | null>(null)
  const sauceRef = useRef<HTMLHeadingElement | null>(null)
  const mainRef = useRef<HTMLHeadingElement | null>(null)

  const updateCurrentTab = () => {
    const rootRect = rootRef?.current?.getBoundingClientRect()
    const bunRect = bunRef?.current?.getBoundingClientRect()
    const sauceRect = sauceRef?.current?.getBoundingClientRect()
    const mainRect = mainRef?.current?.getBoundingClientRect()

    if (rootRect && bunRect && sauceRect && mainRect) {
      const bunDistance = Math.abs(rootRect.top - bunRect.top)
      const sauceDistance = Math.abs(rootRect.top - sauceRect.top)
      const mainDistance = Math.abs(rootRect.top - mainRect.top)

      if (bunDistance <= sauceDistance && bunDistance <= mainDistance) {
        setCurrentTab('bun')
      } else if (
        sauceDistance <= bunDistance &&
        sauceDistance <= mainDistance
      ) {
        setCurrentTab('sauce')
      } else {
        setCurrentTab('main')
      }
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

  const scrollTo = (categoryId: TIngredientsCategory) => {
    const section = document.getElementById(categoryId)

    if (section !== null) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleCategoryClick = (categoryId: TIngredientsCategory) => {
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
      </section>
    </>
  )
}

export default BurgerIngredients
