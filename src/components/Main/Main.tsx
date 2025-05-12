import styles from './Main.module.scss'
import stylesCommon from 'src/common/styles/common.module.scss'
import {TextBlock} from "../../common/TextBlock/TextBlock"
import {TextHeader} from "../../common/Header/TextHeader"
import clsx from 'clsx'
import {Header} from "../Header/Header"

export const Main = () => {
  return (
    <div className={clsx(styles.main, stylesCommon.darkBlueBlock)}>
      <TextBlock>
        Компания начала свою работу в 2009 году и стала одним из первых операторов, который предлагал заключать пари на
        результат спортивных мероприятий в
        режиме-онлайн. Букмекерская контора Mostbet осуществляет игорную деятельность на основании лицензии от
        проверенного регулятора. Сертификат,
        подтверждающий качество услуг предоставлен компанией, чей головной офис находится на о. Кюрасао.
      </TextBlock>
      <TextBlock>
        Бренд стал популярным в течение короткого промежутка времени. На данный момент официальный сайт Мостбет
        стабильно занимает верхние строчки в
        рейтингах лучших. В пользу БК говорит большой ассортимент мероприятий, услуги онлайн-казино, а также наличие
        ресурсов дублей. Зеркало поможет клиенту
        постоянно оставаться на связи с любимой компанией. Место жительства пользователя сервиса при этом не имеет
        никакого значения.
      </TextBlock>
      <TextHeader>
        Обзор официального сайта Мостбет
      </TextHeader>
      <div>
        <table className={styles.table}>
          <tbody>
          <tr>
            <td>🌐 Оф.сайт</td>
            <td><a href="https://www.mostbet.com">www.mostbet.com</a></td>
          </tr>
          <tr>
            <td>Предложения</td>
            <td>Спортивная линия, Лайв-ставки. Казино, LIVE-казино, Aviator, Киберспорт, Покер, Тото.</td>
          </tr>
          <tr>
            <td>➗ Маржинальность</td>
            <td>Средняя.</td>
          </tr>
          <tr>
            <td>🎁 Бонус</td>
            <td>до 100% до 25000 руб.</td>
          </tr>
          <tr>
            <td>⚽ Спорт</td>
            <td>
              Футбол, Хоккей, Теннис, Баскетбол, Футзал, Единоборства, Бильярд, Бокс и еще 20+ видов спора.
            </td>
          </tr>
          <tr>
            <td>🎮 Киберспорт</td>
            <td>CS:GO, League of Legends, DOTA 2, Valorant и др.</td>
          </tr>
          <tr>
            <td>🎰 Игровые автоматы</td>
            <td>134 провайдера и более 10 тысяч игр.</td>
          </tr>
          <tr>
            <td>➗ RTP слотов</td>
            <td>94%-98%.</td>
          </tr>
          <tr>
            <td>💵 Платежные методы (от 100руб.)</td>
            <td>Visa, Mastercard, Maestro, МИР, Piastrix, FKWallet, Webmoney, VouWallet, Boom Wallet, Bitcoin, Tether,
              Ethereum, LTC и др.
            </td>
          </tr>
          <tr>
            <td>📲 Моб. приложение</td>
            <td>Андроид, iOS.</td>
          </tr>
          <tr>
            <td>📜 Лицензия</td>
            <td>Curacao, No. 8048/JAZ2016-065.</td>
          </tr>
          <tr>
            <td>️Компания-владелец</td>
            <td>StarBet N.V.</td>
          </tr>
          <tr>
            <td>🚀 Дата открытия</td>
            <td>2009 г.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}