import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './burger-constructor.module.css'
const BurgerConstructor = (props) => {
  const bun = props.data.find(el => el.type === 'bun');
  const ingredients = props.data.filter(el => el.type !== 'bun');
  return (
    <section className={styles['burger-constructor']}>
      <div className={styles.content}>
        <div className={`${styles['ingredient-top']}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={`${styles.ingredients} custom-scroll`}>
          {ingredients.map(el => (
            <li key={el._id} className={`${styles['ingredients-item']}`}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image}
              />
            </li>
          ))}
        </ul>
        <div className={styles['ingredient-bottom']}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <span className={`${styles.summary} text text_type_digits-medium`}>
          1450
          <span className={styles.currency}>
            <CurrencyIcon type="primary" />
          </span>
        </span>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string
    }).isRequired
  ).isRequired
}
export default BurgerConstructor;