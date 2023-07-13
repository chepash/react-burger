import React from 'react'
import style from './preloader.module.scss'

function Preloader() {
  return (
    <div className={style.preloader}>
      <div className={style.preloader__container}>
        <span className={style.preloader__round} />
      </div>
    </div>
  )
}

export default Preloader
