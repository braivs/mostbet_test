import logo from 'src/assets/images/logo.png'
import styles from './Header.module.scss'
import stylesCommon from 'src/common/styles/common.module.scss'
import clsx from 'clsx'

export const Header = () => {
  return (
    <div className={clsx(styles.header, stylesCommon.headerFooter)}>
      <img src={logo} alt={logo}/>
      <div className={styles.buttonsGroup}>
        <button>Вход</button>
        <button>Регистрация</button>
      </div>
    </div>
  )
}