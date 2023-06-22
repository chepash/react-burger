import cn from 'classnames';
import styles from './app.module.scss';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { ingridientsData } from '../../utils/data';

function App() {
  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={cn(styles.main, 'pl-5 pr-5')}>
        <BurgerIngredients ingridients={ingridientsData} />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
