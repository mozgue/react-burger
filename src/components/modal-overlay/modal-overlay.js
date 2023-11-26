import styles from './modal-overlay.module.css'
const ModalOverlay = (props) => {
  return (
    <div className={styles.overlay} {...props}></div>
  )
}

export default ModalOverlay;