import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients-tabs.module.css'
const BurgerIngredientsTabs = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className={styles.tabs}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

export default BurgerIngredientsTabs;