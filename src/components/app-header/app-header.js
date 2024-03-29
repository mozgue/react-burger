import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li className={`${styles['menu-item']} text text_type_main-default`}>
            <a href="#" className={styles['menu-item_link']}>
              <span className={styles['menu-item_icon']}>
                <BurgerIcon type="primary" />
              </span>
              Конструктор
            </a>
          </li>
          <li className={`${styles['menu-item']} text text_type_main-default text_color_inactive`}>
            <a href="#" className={styles['menu-item_link']}>
              <span className={styles['menu-item_icon']}>
                <ListIcon type="secondary" />
              </span>
              Лента заказов
            </a>
          </li>
        </ul>
      </nav>
      <Logo />
      <span className={`${styles['menu-item']} text text_type_main-default text_color_inactive`}>
        <a href="#" className={styles['menu-item_link']}>
          <span className={styles['menu-item_icon']}>
            <ProfileIcon type="secondary" />
          </span>
          Личный кабинет
        </a>
      </span>
    </header>
  )
}

export default AppHeader;