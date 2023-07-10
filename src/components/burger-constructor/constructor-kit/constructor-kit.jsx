import { AppContext } from '../../../services/appContext'
import { useContext } from 'react'

import cn from 'classnames'
import styles from './constructor-kit.module.scss'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

const ConstructorKit = () => {
  const { state } = useContext(AppContext)

  const listItems = []

  for (let i = 0; i < state.pickedPrimaryIngredients.length; i++) {
    listItems.push(
      <li key={i} className={cn(styles.list__item)}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={state.pickedPrimaryIngredients[i]?.name}
          price={state.pickedPrimaryIngredients[i]?.price}
          thumbnail={state.pickedPrimaryIngredients[i]?.image_mobile}
        />
      </li>
    )
  }

  return (
    <div className={cn(styles.burger, 'pl-4')}>
      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${state.pickedBun?.name} (верх)`}
          price={state.pickedBun?.price}
          thumbnail={state.pickedBun?.image_mobile}
        />
      </div>

      <ul className={cn(styles.list)}>{listItems}</ul>

      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${state.pickedBun?.name} (низ)`}
          price={state.pickedBun?.price}
          thumbnail={state.pickedBun?.image_mobile}
        />
      </div>
    </div>
  )
}

export default ConstructorKit
