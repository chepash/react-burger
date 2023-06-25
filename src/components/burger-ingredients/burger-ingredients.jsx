import React from 'react';
import cn from 'classnames';
import styles from './burger-ingredients.module.scss';
import IngredientsNavbar from './ingredients-navbar/ingredients-navbar';
import PropTypes from 'prop-types';
import IngredientsCategory from './ingredients-category/ingredients-category';
import { burgerIngredientPropType } from '../../utils/prop-types';

// @ts-ignore
const BurgerIngredients = ({ ingredients }) => {
  const [currentTab, setCurrentTab] = React.useState('bun');

  // @ts-ignore
  const buns = ingredients.filter((item) => item.type === 'bun');
  // @ts-ignore
  const main = ingredients.filter((item) => item.type === 'main');
  // @ts-ignore
  const sauce = ingredients.filter((item) => item.type === 'sauce');

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
      <IngredientsNavbar currentTab={currentTab} handleCategoryClick={handleCategoryClick} />
      <div className={cn(styles.section__content)}>
        <div className={cn(styles.section__content_scrollable)}>
          <IngredientsCategory title='Булки' ingredients={buns} categoryId='bun' />
          <IngredientsCategory title='Соусы' ingredients={sauce} categoryId='sauce' />
          <IngredientsCategory title='Начинки' ingredients={main} categoryId='main' />
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(burgerIngredientPropType),
};

export default BurgerIngredients;
