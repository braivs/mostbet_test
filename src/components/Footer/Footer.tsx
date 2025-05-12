import logo from 'src/assets/images/logo.png'
import stylesCommon from 'src/common/styles/common.module.scss'
import styles from './Footer.module.scss'
import clsx from 'clsx'

export const Footer = () => {
  return (
    <div className={clsx(stylesCommon.headerFooter, styles.footer)}>
      <img src={logo} alt={logo}/>
      <div className={styles.copyright}>© Все права защищены. 2024.</div>
    </div>
  )
}