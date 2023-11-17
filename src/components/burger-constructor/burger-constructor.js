import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './burger-constructor.module.css'
const BurgerConstructor = (props) => {
  const img = '';
  return (
    <section className={styles['burger-constructor']}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={img}
        />
        <div style={{overflowY:'scroll', marginTop: 40, height: 'calc(100% - 200px)'}} className="custom-scroll">
          {props.data.map(el => (
            <ConstructorElement
              key={el._id}
              text={el.name}
              price={el.price}
              thumbnail={el.image}
            />
          ))}
        </div>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={img}
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Оформить заказ
      </Button>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.array
}
export default BurgerConstructor;