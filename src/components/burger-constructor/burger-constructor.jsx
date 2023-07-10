import cn from 'classnames'
import styles from './burger-constructor.module.scss'
import Checkout from './checkout/checkout'
import ConstructorKit from './constructor-kit/constructor-kit'

const BurgerConstructor = () => {
  return (
    <section
      className={cn(styles.section, 'pt-25')}
      aria-label="Конструктор бургера"
    >
      <ConstructorKit />
      <Checkout />
    </section>
  )
}

export default BurgerConstructor
