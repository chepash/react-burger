import React from 'react';
import cn from 'classnames';
import styles from './constructor-kit.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorKit = () => {
  // временная заглушка
  const listItems = [];
  for (let i = 0; i < 10; i++) {
    listItems.push(
      <li key={i} className={cn(styles.list__item)}>
        <DragIcon type='primary' />
        <ConstructorElement
          text='Мясо бессмертных моллюсков Protostomia'
          price={50}
          thumbnail={'https://code.s3.yandex.net/react/code/meat-02-mobile.png'}
        />
      </li>
    );
  }

  return (
    <div className={cn(styles.burger, 'pl-4')}>
      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text='Краторная булка N-200i (верх)'
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>

      <ul className={cn(styles.list)}>{listItems}</ul>

      <div className={cn('ml-8', 'mr-4')}>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text='Краторная булка N-200i (низ)'
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
    </div>
  );
};

export default ConstructorKit;
