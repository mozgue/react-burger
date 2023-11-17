import React from 'react'
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item'

import PropTypes from 'prop-types'
import styles from './burger-ingredients-group.module.css'

const BurgerIngredientsGroup = (props) => {

  return (
    <>
      <h2 className={`${styles.heading} text text_type_main-medium`}>{props.name}</h2>
      <ul className={styles.list}>
        {props.data.map(el => (
          <li key={el._id} className={styles.item}>
            <BurgerIngredientsItem
              image={el.image}
              price={el.price}
              name={el.name}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
BurgerIngredientsGroup.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string
}

export default BurgerIngredientsGroup;