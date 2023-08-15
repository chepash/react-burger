import { FC } from 'react'
import style from './preloader.module.scss'

const Preloader: FC = () => {
  return (
    <div className={style.preloader}>
      <div className={style.preloader__container}>
        <span className={style.preloader__round} />
      </div>
    </div>
  )
}

export default Preloader
