import cn from 'classnames'
import { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import styles from './home-page.module.scss'

const HomePage: FC = () => {
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
