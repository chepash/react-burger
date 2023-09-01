import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { FC } from 'react'
import styles from './ingredients-navbar.module.scss'
import { TIngredientsCategory } from '../../../services/types/data'

type TIngredientsNavbarProps = {
  currentTab: TIngredientsCategory
  handleCategoryClick: (categoryId: TIngredientsCategory) => void
}

const IngredientsNavbar: FC<TIngredientsNavbarProps> = ({
  currentTab,
  handleCategoryClick,
}) => {
  return (
    <div className={styles.navbar}>
      <Tab
        value="bun"
        active={currentTab === 'bun'}
        onClick={() => handleCategoryClick('bun')}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={currentTab === 'sauce'}
        onClick={() => handleCategoryClick('sauce')}
      >
        Соусы
      </Tab>
      <Tab
        value="main"
        active={currentTab === 'main'}
        onClick={() => handleCategoryClick('main')}
      >
        Начинки
      </Tab>
    </div>
  )
}

export default IngredientsNavbar
