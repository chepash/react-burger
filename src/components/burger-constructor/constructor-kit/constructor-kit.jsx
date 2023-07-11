import cn from 'classnames'
import styles from './constructor-kit.module.scss'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'

const ConstructorKit = () => {
  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )

  return (
    <div className={cn(styles.burger, 'pl-4')}>
      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${constructorBun.name} (верх)`}
          price={constructorBun.price}
          thumbnail={constructorBun.image_mobile}
        />
      </div>

      <ul className={cn(styles.list)}>
        {constructorIngredients.map((item) => (
          <li key={item.uuid} className={cn(styles.list__item)}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image_mobile}
            />
          </li>
        ))}
      </ul>

      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${constructorBun.name} (низ)`}
          price={constructorBun.price}
          thumbnail={constructorBun.image_mobile}
        />
      </div>
    </div>
  )
}

export default ConstructorKit
