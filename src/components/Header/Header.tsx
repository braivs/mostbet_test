import logo from 'src/assets/images/logo.png'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt={logo}/>
      <div className={styles.buttonsGroup}>
        <button>Вход</button>
        <button>Регистрация</button>
      </div>
    </div>
  )
}