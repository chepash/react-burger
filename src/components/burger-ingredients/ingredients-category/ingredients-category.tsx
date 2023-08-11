import cn from 'classnames'
import { forwardRef } from 'react'
import { TIngredient, TIngredientsCategory } from '../../../utils/types'
import IngredientCard from '../ingredient-card/ingredient-card'
import styles from './ingredients-category.module.scss'

type TIngredientsCategoryProps = {
  title: string
  ingredients: TIngredient[]
  categoryId: TIngredientsCategory
}

const IngredientsCategory = forwardRef<
  HTMLHeadingElement,
  TIngredientsCategoryProps
>(({ title, ingredients, categoryId }, ref) => {
  return (
    <div className={styles.category}>
      <h3
        ref={ref}
        id={categoryId}
        className={cn('text text_type_main-medium', 'pt-10 mb-6')}
      >
        {title}
      </h3>
      <ul className={cn(styles.category__list)}>
        {ingredients.map((item) => (
          <IngredientCard key={item._id} ingredient={item} />
        ))}
      </ul>
    </div>
  )
})

export default IngredientsCategory
