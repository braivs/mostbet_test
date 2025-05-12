import styles from './ReadyToGame.module.scss'
import stylesCommon from 'src/common/styles/common.module.scss'
import rectangle_6926 from 'src/assets/images/rectangle_6926.png'
import rectangle_6925 from 'src/assets/images/rectangle_6925.png'
import money from 'src/assets/images/money.png'
import bounty_hunter_1 from 'src/assets/images/bounty_hunter_1.png'
import clsx from 'clsx'

export const ReadyToGame = () => {
  return (
    <div className={clsx(stylesCommon.darkBlueBlock, styles.readyToGame)}>
      <img src={rectangle_6926} alt="rectangle_6926" className={styles.rectangle_6926}/>
      <img src={rectangle_6925} alt="rectangle_6925" className={styles.rectangle_6925}/>
      <img src={money} alt="money" className={styles.money}/>
      <img src={bounty_hunter_1} alt="bounty_hunter_1" className={styles.bounty_hunter_1}/>
      
    </div>
  )
}