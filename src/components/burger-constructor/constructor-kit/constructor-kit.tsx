import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { addIngredientAction } from '../../../services/actions/constructor-actions'
import styles from './constructor-kit.module.scss'

import { FC } from 'react'
import { useDrop } from 'react-dnd'
import { TIngredient, TIngredientWithUUID } from '../../../utils/types'
import PrimaryIngredient from '../primary-ingredient/primary-ingredient'

const ConstructorKit: FC = () => {
  const { constructorIngredients, constructorBun } = useSelector(
    // @ts-ignore
    (store) => store.constructorState
  )
  const dispatch = useDispatch()

  const [, dropTargetRef] = useDrop({
    accept: 'ingredient',
    drop(ingredient: TIngredient) {
      dispatch(addIngredientAction(ingredient))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <div ref={dropTargetRef} className={cn(styles.burger, 'pl-4')}>
      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${constructorBun.name} (верх)`}
          price={constructorBun.price}
          thumbnail={constructorBun.image_mobile}
        />
      </div>

      {constructorIngredients.length === 0 && (
        <div
          className={cn(
            styles.burger__ingridient,
            'text',
            'text_type_main-small',
            'ml-8',
            'mr-4'
          )}
        >
          Добавьте ингридиенты
        </div>
      )}

      {constructorIngredients.length > 0 && (
        <ul className={cn(styles.list)}>
          {/* Убрать as после типизации хранилища */}
          {(constructorIngredients as TIngredientWithUUID[]).map(
            (item, index) => (
              <PrimaryIngredient
                ingredientWithUUID={item}
                key={item.uuid}
                index={index}
              />
            )
          )}
        </ul>
      )}

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
