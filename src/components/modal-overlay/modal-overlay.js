import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types'
const ModalOverlay = ({ close }) => {
  return (
    <div className={styles.overlay} onClick={close}></div>
  )
}

ModalOverlay.propTypes = {
  close: PropTypes.func.isRequired
}
export default ModalOverlay;