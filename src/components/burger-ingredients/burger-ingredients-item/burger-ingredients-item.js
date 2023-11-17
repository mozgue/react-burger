import React from 'react'
import { CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './burger-ingredients-item.module.css'
const BurgerIngredientsItem = (props) => {
  return (
    <React.Fragment>
      <img className={styles.image} src={props.image} alt={props.name} />
      <span className={`${styles.price} text text_type_digits-default`}>
        {props.price}
        <span className={styles.currency}><CurrencyIcon type="primary" /></span>
      </span>
      <h3 className={`${styles.name} text text_type_main-default`}>{props.name}</h3>
    </React.Fragment>
  )
}

BurgerIngredientsItem.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
}
export default BurgerIngredientsItem;