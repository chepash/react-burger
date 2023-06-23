import React from 'react';
import cn from 'classnames';
import styles from './checkout.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Checkout = () => {
  return (
    <div className={cn(styles.checkout, 'mt-10', 'pr-4')}>
      <p className={cn(styles.checkout__price, 'text text_type_digits-medium', 'mr-10')}>
        610
        <CurrencyIcon type='primary' />
      </p>
      <Button htmlType='button' type='primary' size='large'>
        Оформить заказ
      </Button>
    </div>
  );
};

export default Checkout;
