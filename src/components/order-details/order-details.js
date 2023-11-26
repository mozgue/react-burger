import styles from './order-details.module.css'
import imgDone from '../../images/done.svg'

const OrderDetails = () => {
  return (
    <div className={styles.orderDetails}>
      <div className={`${styles.id} text text_type_digits-large`}>034536</div>
      <div className={`${styles['id-text']} text text_type_main-medium`}>идентификатор заказа</div>
      <img className={styles.image} src={imgDone} alt="" />
      <div className={`${styles.text} text text_type_main-default`}>Ваш заказ начали готовить</div>
      <div className={`${styles.text} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</div>
    </div>
  )
}

export default OrderDetails