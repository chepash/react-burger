// @ts-nocheck
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredients-navbar.module.scss'
import PropTypes from 'prop-types'

const IngredientsNavbar = ({ currentTab, handleCategoryClick }) => {
  return (
    <div className={styles.navbar}>
      <Tab
        value="bun"
        active={currentTab === 'bun'}
        onClick={handleCategoryClick}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={currentTab === 'sauce'}
        onClick={handleCategoryClick}
      >
        Соусы
      </Tab>
      <Tab
        value="main"
        active={currentTab === 'main'}
        onClick={handleCategoryClick}
      >
        Начинки
      </Tab>
    </div>
  )
}

IngredientsNavbar.propTypes = {
  currentTab: PropTypes.string.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
}

export default IngredientsNavbar
