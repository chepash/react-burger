import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingridient-card.module.scss';
import cn from 'classnames';
import { burgerIngridientPropType } from '../../../utils/prop-types';

// @ts-ignore
const IngridientCard = ({ ingridient }) => {
  return (
    <li className={styles.card}>
      <img
        className={cn(styles.card__img, 'mr-4 ml-4')}
        alt={ingridient.name}
        src={ingridient.image}></img>
      <div className={styles.card__footer}>
        <p className={cn(styles.card__price, 'text text_type_main-default', 'mt-1 mb-1')}>
          {ingridient.price} <CurrencyIcon type='primary' />
        </p>
        <p className={cn(styles.card__name, 'text text_type_main-default')}>{ingridient.name}</p>
      </div>
    </li>
  );
};

IngridientCard.propTypes = {
  ingridient: burgerIngridientPropType,
};

export default IngridientCard;
