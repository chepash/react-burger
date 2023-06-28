import styles from './ingredients-category.module.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { burgerIngredientPropType } from '../../../utils/prop-types'
import IngredientCard from '../ingredient-card/ingredient-card'

const IngredientsCategory = ({
  title,
  ingredients,
  categoryId,
  onIngredientClick,
}) => {
  return (
    <div className={styles.category}>
      <h3
        id={categoryId}
        className={cn('text text_type_main-medium', 'pt-10 mb-6')}
      >
        {title}
      </h3>
      <ul className={cn(styles.category__list)}>
        {ingredients.map((item) => (
          <IngredientCard
            key={item._id}
            ingredient={item}
            onIngredientClick={onIngredientClick}
          />
        ))}
      </ul>
    </div>
  )
}

IngredientsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(burgerIngredientPropType).isRequired,
  categoryId: PropTypes.string.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
}

export default IngredientsCategory
