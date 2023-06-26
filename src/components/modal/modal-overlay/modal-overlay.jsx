import cn from 'classnames'
import styles from './modal-overlay.module.scss'
import PropTypes from 'prop-types'

// @ts-ignore
function ModalOverlay({ onClose }) {
  return <div onClick={onClose} className={cn(styles.overlay)}></div>
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay
