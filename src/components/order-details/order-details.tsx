import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import styles from './order-details.module.scss'

const OrderDetails: FC = () => {
  return (
    <div className={cn(styles.card, 'mt-15', 'mb-15')}>
      <p className={cn('text', 'text_type_digits-default', 'mb-10')}>#034533</p>
      <p className={cn('text text_type_main-medium', 'mb-3')}>
        Black Hole Singularity острый бургер
      </p>

      <p
        className={cn('text text_type_main-small', 'mb-15', {
          [styles.complete]: true,
        })}
      >
        Выполнен
      </p>

      <p className={cn('text', 'text_type_main-medium', 'mb-6')}>Состав:</p>

      <div className={cn(styles.card__ingredients, 'mb-10')}>
        <ul className={cn(styles.list)}>
          <li className={cn(styles.list__item)}>
            <div className={cn(styles.img__wrapper)}>
              <div className={cn(styles.img__cropper)}>
                <img
                  className={cn(styles.img)}
                  alt={'ингредиент'}
                  src={
                    'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                  }
                />
              </div>
            </div>
            <p
              className={cn(
                styles.name,
                'text',
                'text_type_main-default',
                'ml-4'
              )}
            >
              Флюоресцентная булка R2-D3
            </p>
            <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
              3 x 20 <CurrencyIcon type="primary" />
            </p>
          </li>
          <li className={cn(styles.list__item)}>
            <div className={cn(styles.img__wrapper)}>
              <div className={cn(styles.img__cropper)}>
                <img
                  className={cn(styles.img)}
                  alt={'ингредиент'}
                  src={
                    'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                  }
                />
              </div>
            </div>
            <p
              className={cn(
                styles.name,
                'text',
                'text_type_main-default',
                'ml-4'
              )}
            >
              Флюоресцентная булка R2-D3
            </p>
            <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
              3 x 20 <CurrencyIcon type="primary" />
            </p>
          </li>
          <li className={cn(styles.list__item)}>
            <div className={cn(styles.img__wrapper)}>
              <div className={cn(styles.img__cropper)}>
                <img
                  className={cn(styles.img)}
                  alt={'ингредиент'}
                  src={
                    'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                  }
                />
              </div>
            </div>
            <p
              className={cn(
                styles.name,
                'text',
                'text_type_main-default',
                'ml-4'
              )}
            >
              Флюоресцентная булка R2-D3
            </p>
            <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
              3 x 20 <CurrencyIcon type="primary" />
            </p>
          </li>
          <li className={cn(styles.list__item)}>
            <div className={cn(styles.img__wrapper)}>
              <div className={cn(styles.img__cropper)}>
                <img
                  className={cn(styles.img)}
                  alt={'ингредиент'}
                  src={
                    'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                  }
                />
              </div>
            </div>
            <p
              className={cn(
                styles.name,
                'text',
                'text_type_main-default',
                'ml-4'
              )}
            >
              Флюоресцентная булка R2-D3
            </p>
            <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
              3 x 20 <CurrencyIcon type="primary" />
            </p>
          </li>
          <li className={cn(styles.list__item)}>
            <div className={cn(styles.img__wrapper)}>
              <div className={cn(styles.img__cropper)}>
                <img
                  className={cn(styles.img)}
                  alt={'ингредиент'}
                  src={
                    'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                  }
                />
              </div>
            </div>
            <p
              className={cn(
                styles.name,
                'text',
                'text_type_main-default',
                'ml-4'
              )}
            >
              Флюоресцентная булка R2-D3
            </p>
            <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
              3 x 20 <CurrencyIcon type="primary" />
            </p>
          </li>{' '}
          <li className={cn(styles.list__item)}>
            <div className={cn(styles.img__wrapper)}>
              <div className={cn(styles.img__cropper)}>
                <img
                  className={cn(styles.img)}
                  alt={'ингредиент'}
                  src={
                    'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                  }
                />
              </div>
            </div>
            <p
              className={cn(
                styles.name,
                'text',
                'text_type_main-default',
                'ml-4'
              )}
            >
              Флюоресцентная булка R2-D3
            </p>
            <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
              3 x 20 <CurrencyIcon type="primary" />
            </p>
          </li>
        </ul>
      </div>

      <div className={cn(styles.card__footer)}>
        <p
          className={cn('text', 'text_type_main-small', 'text_color_inactive')}
        >
          Вчера, 13:50
        </p>
        <p className={cn(styles.price, 'text', 'text_type_digits-default')}>
          510 <CurrencyIcon type="primary" />
        </p>
      </div>
    </div>
  )
}

export default OrderDetails
