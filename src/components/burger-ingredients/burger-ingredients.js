import { useState } from 'react'
import BurgerIngredientsTabs from './burger-ingredients-tabs/burger-ingredients-tabs'
import BurgerIngredientsGroup from './burger-ingredients-group/burger-ingredients-group'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'

import styles from './burger-ingredients.module.css'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/prop-types'

const BurgerIngredients = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [ingredient, setIngredient] = useState({})
  const handleOpenModal = (id) => {
    const selectedIngredient = props.data.find(el => el._id === id);
    setIngredient(selectedIngredient)
    setModalIsOpen(true)
  }
  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  const buns = props.data.filter(el => el.type === 'bun');
  const sauces = props.data.filter(el => el.type ==='sauce');
  const main = props.data.filter(el => el.type === 'main');

  return (
    <section className={styles['burger-ingredients']}>
      <h1 className={`${styles.heading} text text_type_main-large`}>Соберите бургер</h1>
      <BurgerIngredientsTabs />
      <div className={`${styles.content} custom-scroll`}>
        <BurgerIngredientsGroup data={buns} name="Булки" open={handleOpenModal} />
        <BurgerIngredientsGroup data={sauces} name="Соусы" open={handleOpenModal} />
        <BurgerIngredientsGroup data={main} name="Начинки" open={handleOpenModal} />
      </div>
      { modalIsOpen && (
        <Modal title={'Детали ингредиента'} close={handleCloseModal}>
          <IngredientDetails {...ingredient} />
        </Modal>
      )}
    </section>
  )
}
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired
}
export default BurgerIngredients;