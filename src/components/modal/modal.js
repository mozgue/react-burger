import ReactDOM from 'react-dom'

import { useEffect } from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from './modal.module.css'
import PropTypes from 'prop-types'
const Modal = ({ title, close, children }) => {

  useEffect(() => {
    document.addEventListener('keydown', evt => {
      if (evt.key === 'Escape')
        close()
    })
    return () => {
      document.removeEventListener('keydown', close);
    }
  })

  const portal = document.querySelector('#modal');
  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <h1 className={`${styles.title} text text_type_main-large`}>
          {title}
          <span className={styles.close}>
            <CloseIcon type="primary" onClick={close} />
          </span>
        </h1>
        {children}
      </div>
      <ModalOverlay close={close}/>
    </>,
    portal
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func.isRequired
}
export default Modal;