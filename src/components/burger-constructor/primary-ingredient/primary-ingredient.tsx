import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import {
  deleteIngredientAction,
  moveIngredientAction,
} from '../../../services/actions/constructor-actions'
import { TIngredientWithUUID } from '../../../utils/types'
import styles from './primary-ingredient.module.scss'

type TPrimaryIngredientProps = {
  ingredientWithUUID: TIngredientWithUUID
  index: number
}

interface TDragItem {
  index: number
}

const PrimaryIngredient: FC<TPrimaryIngredientProps> = ({
  ingredientWithUUID,
  index,
}) => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLLIElement>(null)

  const [, dropTargetRef] = useDrop<TDragItem, unknown, unknown>({
    accept: 'primary-ingredient',
    collect() {},
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      if (!clientOffset) {
        // if clientOffset is undefined, it means that the drag is not started yet
        return
      }
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      // moveCard(dragIndex, hoverIndex)
      dispatch(moveIngredientAction(dragIndex, hoverIndex))

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, dragTargetRef] = useDrag({
    type: 'primary-ingredient',
    item: () => {
      return { index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  dragTargetRef(dropTargetRef(ref))

  const opacity = isDragging ? 0 : 1
  return (
    <li
      key={ingredientWithUUID.uuid}
      className={styles.ingredient}
      style={{ opacity }}
      ref={ref}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredientWithUUID.ingredient.name}
        price={ingredientWithUUID.ingredient.price}
        thumbnail={ingredientWithUUID.ingredient.image_mobile}
        handleClose={() =>
          dispatch(deleteIngredientAction(ingredientWithUUID.uuid))
        }
      />
    </li>
  )
}

export default PrimaryIngredient
