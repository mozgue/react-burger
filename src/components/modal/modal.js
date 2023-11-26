import ReactDOM from 'react-dom'

import { useEffect } from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from './modal.module.css'
import PropTypes from 'prop-types'
const Modal = (props) => {

  useEffect(() => {
    document.addEventListener(
  'keydown',
evt => evt.key === 'Escape' && props.close()
    )
    return () => {
      document.removeEventListener('keydown', props.close);
    }
  })

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <h1 className={`${styles.title} text text_type_main-large`}>
          {props.title}
          <span className={styles.close}>
            <CloseIcon type="primary" onClick={props.close} />
          </span>
        </h1>
        {props.children}
      </div>
      <ModalOverlay onClick={props.close}/>
    </>,
    document.querySelector('#modal')
  )
}

Modal.propTypes = {
  title: PropTypes.string
}
export default Modal;