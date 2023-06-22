import styles from './ingridients-category.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { burgerIngridientPropType } from '../../../utils/prop-types';
import IngridientCard from '../ingridient-card/ingridient-card';

// @ts-ignore
const IngridientsCategory = ({ title, ingridients, categoryId }) => {
  return (
    <div className={styles.category}>
      <h3 id={categoryId} className={cn('text text_type_main-medium', 'pt-10 mb-6')}>
        {title}
      </h3>
      <ul className={cn(styles.category__list)}>
        {ingridients.map(
          (
            // @ts-ignore
            item
          ) => (
            // @ts-ignore
            <IngridientCard key={item._id} ingridient={item} />
          )
        )}
      </ul>
    </div>
  );
};

IngridientsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  ingridients: PropTypes.arrayOf(burgerIngridientPropType),
  categoryId: PropTypes.string.isRequired,
};

export default IngridientsCategory;
