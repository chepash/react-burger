import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, PropsWithChildren, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ModalOverlay from './modal-overlay/modal-overlay'
import styles from './modal.module.scss'

type TModalProps = {
  header?: string
  onClose: () => void
}

const Modal: FC<PropsWithChildren<TModalProps>> = ({
  children,
  header,
  onClose,
}) => {
  const modalRoot = document.getElementById('react-modals')

  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [onClose])

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal__container}>
        <button
          className={cn(styles.modal__close, 'mt-15', 'mr-10')}
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </button>
        {header && (
          <h2
            className={cn(
              styles.modal__header,
              'text text_type_main-large',
              'mt-10',
              'ml-10',
              'mr-10'
            )}
          >
            {header}
          </h2>
        )}
        {children}
      </div>
    </div>,

    modalRoot
  )
}

export default Modal
