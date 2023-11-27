import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/prop-types'
const IngredientDetails = ({ image, name, calories, proteins, fat, carbohydrates }) => {
  return (
    <>
     <img className={styles.image} src={image} alt="" />
      <h2 className={`${styles.title} text text_type_main-medium`}>
        {name}
      </h2>
      <table className={styles.values}>
        <thead>
          <tr className={`text text_type_main-default text_color_inactive`}>
            <td>Калории,ккал</td>
            <td>Белки, г</td>
            <td>Жиры, г</td>
            <td>Углеводы, г</td>
          </tr>
        </thead>
        <tbody>
          <tr className={`text text_type_digits-default text_color_inactive`}>
            <td>{calories}</td>
            <td>{proteins}</td>
            <td>{fat}</td>
            <td>{carbohydrates}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired
}
export default IngredientDetails;