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
        <div className={styles.headerContainer}>
          <nav className={cn(styles.headerBox)}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href='/constructor' className={cn(styles.link, 'mt-4 mr-5 mb-4 ml-5')}>
                  <BurgerIcon type={'primary'} />
                  <label className={cn(styles.linkLabel, 'text text_type_main-default', 'ml-2')}>
                    Конструктор
                  </label>
                </a>
              </li>
              <li className={cn(styles.listItem, 'ml-2')}>
                <a href='/orders' className={cn(styles.link, 'mt-4 mr-5 mb-4 ml-5')}>
                  <ListIcon type='secondary' />
                  <label
                    className={cn(
                      styles.linkLabel,
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
          <div className={cn(styles.headerBox)}>
            <Logo />
          </div>
          <div className={cn(styles.headerBox)}>
            <div className={styles.linkWrap}>
              <a href='/profile' className={cn(styles.link, 'mt-4 mr-5 mb-4 ml-5')}>
                <ProfileIcon type='secondary' />
                <label
                  className={cn(
                    styles.linkLabel,
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
