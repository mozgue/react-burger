import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item'

import PropTypes from 'prop-types'
import styles from './burger-ingredients-group.module.css'
import ingredientType from '../../../utils/prop-types'

const BurgerIngredientsGroup = (props) => {

  return (
    <>
      <h2 className={`${styles.heading} text text_type_main-medium`}>{props.name}</h2>
      <ul className={styles.list}>
        {props.data.map(el => (
          <li key={el._id} className={styles.item}>
            <BurgerIngredientsItem
              id={el._id}
              image={el.image}
              price={el.price}
              name={el.name}
              open={props.open}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
BurgerIngredientsGroup.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired
}

export default BurgerIngredientsGroup;