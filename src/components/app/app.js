import styles from './app.module.css'

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import { useState, useEffect } from 'react'
import { getIngredients } from '../../utils/burger-api'

const App = () => {
  const [ingredients, setIngredients] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('')
    setLoading(true)

    getIngredients()
      .then(res => {
        setIngredients(res.data)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      })

  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />

      <main className={styles.main}>
        {!loading && !error && ingredients.length > 0 && (
          <>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor data={ingredients} />
          </>
        )}
        {loading && (
          <div>Идет загрузка данных</div>
        )}
        {error && (
          <div>
            <p>Что-то пошло не так :(</p>
            <p>{error.message}</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App;
