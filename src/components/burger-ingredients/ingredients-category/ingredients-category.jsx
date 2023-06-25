import styles from './ingredients-category.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { burgerIngredientPropType } from '../../../utils/prop-types';
import IngredientCard from '../ingredient-card/ingredient-card';

// @ts-ignore
const IngredientsCategory = ({ title, ingredients, categoryId }) => {
  return (
    <div className={styles.category}>
      <h3 id={categoryId} className={cn('text text_type_main-medium', 'pt-10 mb-6')}>
        {title}
      </h3>
      <ul className={cn(styles.category__list)}>
        {ingredients.map(
          (
            // @ts-ignore
            item
          ) => (
            // @ts-ignore
            <IngredientCard key={item._id} ingredient={item} />
          )
        )}
      </ul>
    </div>
  );
};

IngredientsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(burgerIngredientPropType),
  categoryId: PropTypes.string.isRequired,
};

export default IngredientsCategory;
