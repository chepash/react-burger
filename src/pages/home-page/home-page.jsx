import cn from 'classnames'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import styles from './home-page.module.scss'

function HomePage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={cn(styles.main, 'pl-5 pr-5')}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  )
}

export default HomePage
