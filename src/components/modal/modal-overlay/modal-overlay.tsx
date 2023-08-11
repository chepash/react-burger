import cn from 'classnames'
import { FC } from 'react'
import styles from './modal-overlay.module.scss'

type TModalOverlayProps = {
  onClose: () => void
}

const ModalOverlay: FC<TModalOverlayProps> = ({ onClose }) => {
  return <div onClick={onClose} className={cn(styles.overlay)}></div>
}

export default ModalOverlay
