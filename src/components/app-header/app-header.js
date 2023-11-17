import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li className={`text text_type_main-default ${styles['menu-item']}`}>
            <span className={styles['menu-item_icon']}>
              <BurgerIcon type="primary" />
            </span>
            Конструктор
          </li>
          <li className={`text text_type_main-default text_color_inactive ${styles['menu-item']}`}>
            <span className={styles['menu-item_icon']}>
              <ListIcon type="secondary" />
            </span>
            Лента заказов
          </li>
        </ul>
      </nav>
      <Logo />
      <span className={`text text_type_main-default text_color_inactive ${styles['menu-item']}`}>
        <span className={styles['menu-item_icon']}>
          <ProfileIcon type="secondary" />
        </span>
        Личный кабинет
      </span>
    </header>
  )
}

export default AppHeader;