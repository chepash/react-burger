import React from 'react';
import cn from 'classnames';
import styles from './burger-ingredients.module.scss';
import IngridientsNavbar from './ingridients-navbar/ingridients-navbar';
import PropTypes from 'prop-types';
import IngridientsCategory from './ingridients-category/ingridients-category';
import { burgerIngridientPropType } from '../../utils/prop-types';

// @ts-ignore
const BurgerIngredients = ({ ingridients }) => {
  const [currentTab, setCurrentTab] = React.useState('one');

  // @ts-ignore
  const buns = ingridients.filter((item) => item.type === 'bun');
  // @ts-ignore
  const main = ingridients.filter((item) => item.type === 'main');
  // @ts-ignore
  const sauce = ingridients.filter((item) => item.type === 'sauce');

  return (
    <section className={styles.section} aria-label='Ингридиенты'>
      <h1 className={cn('text text_type_main-large', 'mt-10 mb-5')}>Соберите бургер</h1>
      <IngridientsNavbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className={cn(styles.section__content)}>
        <div className={cn(styles.section__content_scrollable)}>
          <IngridientsCategory title='Булки' ingridients={buns} />
          <IngridientsCategory title='Соусы' ingridients={sauce} />
          <IngridientsCategory title='Начинки' ingridients={main} />
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingridients: PropTypes.arrayOf(burgerIngridientPropType),
};

export default BurgerIngredients;
