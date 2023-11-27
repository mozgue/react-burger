import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './burger-ingredients-item.module.css'
import ingredientType from '../../../utils/prop-types'
const BurgerIngredientsItem = ({ id, name, image, price, open }) => {
  return (
    <div
      className={styles['burger-ingredients-item']}
      onClick={open.bind(null, id)}
    >
      <img className={styles.image} src={image} alt={name} />
      <span className={`${styles.price} text text_type_digits-default`}>
        {price}
        <span className={styles.currency}><CurrencyIcon type="primary" /></span>
      </span>
      <h3 className={`${styles.name} text text_type_main-default`}>{name}</h3>
      <Counter count={1} size="default"/>
    </div>
  )
}

BurgerIngredientsItem.propTypes = ingredientType.isRequired;
BurgerIngredientsItem.propTypes = {
  open: PropTypes.func.isRequired
}
export default BurgerIngredientsItem;