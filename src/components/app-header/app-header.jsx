import React from 'react';
import cn from 'classnames';
import styles from './app-header.module.scss';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={cn(styles.header, 'p-4')}>
        <div className={styles.header__container}>
          <nav className={cn(styles.header__box)}>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <a href='/constructor' className={cn(styles.link, 'mt-4 mr-5 mb-4 ml-5')}>
                  <BurgerIcon type={'primary'} />
                  <label className={cn(styles.link__label, 'text text_type_main-default', 'ml-2')}>
                    Конструктор
                  </label>
                </a>
              </li>
              <li className={cn(styles.list__item, 'ml-2')}>
                <a href='/orders' className={cn(styles.link, 'mt-4 mr-5 mb-4 ml-5')}>
                  <ListIcon type='secondary' />
                  <label
                    className={cn(
                      styles.link__label,
                      'text text_type_main-default',
                      'text_color_inactive',
                      'ml-2'
                    )}>
                    Лента заказов
                  </label>
                </a>
              </li>
            </ul>
          </nav>
          <div className={cn(styles.header__box)}>
            <Logo />
          </div>
          <div className={cn(styles.header__box)}>
            <div className={styles.link__wrap}>
              <a href='/profile' className={cn(styles.link, 'mt-4 mr-5 mb-4 ml-5')}>
                <ProfileIcon type='secondary' />
                <label
                  className={cn(
                    styles.link__label,
                    'text text_type_main-default',
                    'text_color_inactive',
                    'ml-2'
                  )}>
                  Личный кабинет
                </label>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
