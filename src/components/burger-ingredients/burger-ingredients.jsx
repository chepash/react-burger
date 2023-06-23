import React from 'react';
import cn from 'classnames';
import styles from './burger-ingredients.module.scss';
import IngridientsNavbar from './ingridients-navbar/ingridients-navbar';
import PropTypes from 'prop-types';
import IngridientsCategory from './ingridients-category/ingridients-category';
import { burgerIngridientPropType } from '../../utils/prop-types';

// @ts-ignore
const BurgerIngredients = ({ ingridients }) => {
  const [currentTab, setCurrentTab] = React.useState('bun');

  // @ts-ignore
  const buns = ingridients.filter((item) => item.type === 'bun');
  // @ts-ignore
  const main = ingridients.filter((item) => item.type === 'main');
  // @ts-ignore
  const sauce = ingridients.filter((item) => item.type === 'sauce');

  // @ts-ignore
  const scrollTo = (categoryId) => {
    const section = document.getElementById(categoryId);

    if (section !== null) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // @ts-ignore
  const handleCategoryClick = (categoryId) => {
    setCurrentTab(categoryId);
    scrollTo(categoryId);
  };

  return (
    <section className={styles.section} aria-label='Ингридиенты'>
      <h1 className={cn('text text_type_main-large', 'mt-10 mb-5')}>Соберите бургер</h1>
      <IngridientsNavbar currentTab={currentTab} handleCategoryClick={handleCategoryClick} />
      <div className={cn(styles.section__content)}>
        <div className={cn(styles.section__content_scrollable)}>
          <IngridientsCategory title='Булки' ingridients={buns} categoryId='bun' />
          <IngridientsCategory title='Соусы' ingridients={sauce} categoryId='sauce' />
          <IngridientsCategory title='Начинки' ingridients={main} categoryId='main' />
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingridients: PropTypes.arrayOf(burgerIngridientPropType),
};

export default BurgerIngredients;
