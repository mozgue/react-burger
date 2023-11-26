import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './burger-ingredients-item.module.css'
import ingredientType from '../../../utils/prop-types'
const BurgerIngredientsItem = (props) => {
  return (
    <div
      className={styles['burger-ingredients-item']}
      onClick={props.open.bind(null, props.id)}
    >
      <img className={styles.image} src={props.image} alt={props.name} />
      <span className={`${styles.price} text text_type_digits-default`}>
        {props.price}
        <span className={styles.currency}><CurrencyIcon type="primary" /></span>
      </span>
      <h3 className={`${styles.name} text text_type_main-default`}>{props.name}</h3>
      <Counter count={1} size="default"/>
    </div>
  )
}

BurgerIngredientsItem.propTypes = {
  ...ingredientType.isRequired,
  open: PropTypes.func.isRequired
}
export default BurgerIngredientsItem;