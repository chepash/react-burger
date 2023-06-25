import cn from 'classnames'
import styles from './app.module.scss'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { getIngredients } from '../../utils/ingredients-api'
import { useEffect, useState } from 'react'

function App() {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    getIngredients()
      .then((res) => {
        setIngredients(res.data)
      })
      .catch((err) => {
        console.log('Ошибка api промиса getIngredients: ', err)
      })
  }, [])

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={cn(styles.main, 'pl-5 pr-5')}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor />
      </main>
    </div>
  )
}

export default App
