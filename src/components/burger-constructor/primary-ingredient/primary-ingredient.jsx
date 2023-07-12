// @ts-ignore
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import { burgerIngredientPropType } from '../../../utils/prop-types'
import styles from './primary-ingredient.module.scss'
import {
  MOVE_INGREDIENT,
  deleteIngredient,
} from '../../../services/actions/constructor'
import { useDrag, useDrop } from 'react-dnd'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useRef } from 'react'

const PrimaryIngredient = ({ ingredient, index }) => {
  const dispatch = useDispatch()
  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: 'primary-ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
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

      dispatch({
        type: MOVE_INGREDIENT,
        payload: { fromIndex: dragIndex, toIndex: hoverIndex },
      })

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'primary-ingredient',
    item: () => {
      return { id: ingredient.uuid, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  const opacity = isDragging ? 0 : 1
  return (
    <li
      key={ingredient.uuid}
      className={styles.ingredient}
      style={{ opacity }}
      ref={ref}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
        handleClose={() => dispatch(deleteIngredient(ingredient.uuid))}
      />
    </li>
  )
}

PrimaryIngredient.propTypes = {
  ingredient: burgerIngredientPropType.isRequired,
  index: PropTypes.number.isRequired,
}

export default PrimaryIngredient
