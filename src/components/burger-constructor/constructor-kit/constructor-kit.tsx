import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { useDrop } from 'react-dnd'
import { addIngredientAction } from '../../../services/actions/constructor-actions'
import { getConstructorState } from '../../../services/selectors/constructor-selectors'
import { TIngredient } from '../../../services/types/data'
import { useDispatch, useSelector } from '../../../services/types/store'
import PrimaryIngredient from '../primary-ingredient/primary-ingredient'
import styles from './constructor-kit.module.scss'

const ConstructorKit: FC = () => {
  const { constructorIngredients, constructorBun } =
    useSelector(getConstructorState)
  const dispatch = useDispatch()

  const [{ isOver, canDrop, draggingItemType }, dropTargetRef] = useDrop({
    accept: ['bun', 'sauce', 'main'],
    drop(ingredient: TIngredient) {
      dispatch(addIngredientAction(ingredient))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      draggingItemType: monitor.getItemType(),
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
          extraClass={cn({
            [styles.target]: canDrop && draggingItemType === 'bun',
            [styles.target_hovered]: isOver && draggingItemType === 'bun',
          })}
        />
      </div>

      {constructorIngredients.length === 0 && (
        <div
          className={cn(
            styles.burger__ingridient,
            'text',
            'text_type_main-small',
            'ml-8',
            'mr-4',
            {
              [styles.target]: canDrop && draggingItemType !== 'bun',
              [styles.target_hovered]: isOver && draggingItemType !== 'bun',
            }
          )}
        >
          Добавьте ингридиенты
        </div>
      )}

      {constructorIngredients.length > 0 && (
        <ul
          className={cn(styles.list, {
            [styles.target]: canDrop && draggingItemType !== 'bun',
            [styles.target_hovered]: isOver && draggingItemType !== 'bun',
          })}
        >
          {constructorIngredients.map((item, index) => (
            <PrimaryIngredient
              ingredientWithUUID={item}
              key={item.uuid}
              index={index}
            />
          ))}
        </ul>
      )}

      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${constructorBun.name} (низ)`}
          price={constructorBun.price}
          thumbnail={constructorBun.image_mobile}
          extraClass={cn({
            [styles.target]: canDrop && draggingItemType === 'bun',
            [styles.target_hovered]: isOver && draggingItemType === 'bun',
          })}
        />
      </div>
    </div>
  )
}

export default ConstructorKit
