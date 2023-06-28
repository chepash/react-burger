import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './modal.module.scss'
import cn from 'classnames'
import ModalOverlay from './modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById('react-modals')

function Modal({ children, header, onClose }) {
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [onClose])

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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default Modal
