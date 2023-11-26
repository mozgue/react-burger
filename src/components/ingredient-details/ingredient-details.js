import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/prop-types'
const IngredientDetails = (props) => {
  return (
    <>
     <img className={styles.image} src={props.image_large} alt="" />
      <h2 className={`${styles.title} text text_type_main-medium`}>
        {props.name}
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
            <td>{props.calories}</td>
            <td>{props.proteins}</td>
            <td>{props.fat}</td>
            <td>{props.carbohydrates}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

IngredientDetails.propTypes = ingredientType.isRequired
export default IngredientDetails;