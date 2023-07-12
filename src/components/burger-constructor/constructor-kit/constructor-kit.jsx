import cn from 'classnames'
import styles from './constructor-kit.module.scss'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { addIngredient } from '../../../services/actions/constructor'

import { useDrop } from 'react-dnd'
import PrimaryIngredient from '../primary-ingredient/primary-ingredient'

const ConstructorKit = () => {
  const { constructorIngredients, constructorBun } = useSelector(
    (store) => store.constructorState
  )
  const dispatch = useDispatch()

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      dispatch(addIngredient(ingredient))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <div ref={dropTarget} className={cn(styles.burger, 'pl-4')}>
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
        {constructorIngredients.map((item, index) => (
          <PrimaryIngredient ingredient={item} key={item.uuid} index={index} />
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
