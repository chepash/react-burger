import styles from './ingridients-category.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { burgerIngridientPropType } from '../../../utils/prop-types';
import IngridientCard from '../ingridient-card/ingridient-card';

// @ts-ignore
const IngridientsCategory = ({ title, ingridients }) => {
  return (
    <div className={styles.category}>
      <h3 className={cn('text text_type_main-medium', 'mt-10 mb-6')}>{title}</h3>
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
};

export default IngridientsCategory;
