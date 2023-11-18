import styles from './burger-ingredients.module.css'
import PropTypes from 'prop-types'
import BurgerIngredientsTabs from './burger-ingredients-tabs/burger-ingredients-tabs'
import BurgerIngredientsGroup from './burger-ingredients-group/burger-ingredients-group'
const BurgerIngredients = (props) => {

  const buns = props.data.filter(el => el.type === 'bun');
  const sauces = props.data.filter(el => el.type ==='sauce');
  const main = props.data.filter(el => el.type === 'main');

  return (
    <section className={styles['burger-ingredients']}>
      <h1 className={`${styles.heading} text text_type_main-large`}>Соберите бургер</h1>
      <BurgerIngredientsTabs />
      <div className={`${styles.content} custom-scroll`}>
        <BurgerIngredientsGroup data={buns} name="Булки" />
        <BurgerIngredientsGroup data={sauces} name="Соусы" />
        <BurgerIngredientsGroup data={main} name="Начинки" />
      </div>

    </section>
  )
}
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      price: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  ).isRequired
}
export default BurgerIngredients;