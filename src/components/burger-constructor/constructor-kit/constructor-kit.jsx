import cn from 'classnames'
import styles from './constructor-kit.module.scss'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  addIngredient,
  deleteIngredient,
} from '../../../services/actions/constructor'

import { useDrop } from 'react-dnd'

const ConstructorKit = () => {
  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )

  const dispatch = useDispatch()

  const [{ canDrop, isOver }, dropTarget] = useDrop({
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
    <div
      ref={dropTarget}
      className={cn(styles.burger, 'pl-4', {
        [styles.border_pink]: !isOver && canDrop,
        [styles.border_green]: isOver && canDrop,
      })}
    >
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
              handleClose={() => dispatch(deleteIngredient(item.uuid))}
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
