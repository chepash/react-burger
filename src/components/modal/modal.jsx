import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './modal.module.scss'
import cn from 'classnames'
import ModalOverlay from './modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

const modalRoot = document.getElementById('react-modals')

// @ts-ignore
function Modal({ children, header, onClose }) {
  const handleEscClose = React.useCallback(
    // @ts-ignore
    (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [handleEscClose])

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
    // @ts-ignore
    modalRoot
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default Modal
