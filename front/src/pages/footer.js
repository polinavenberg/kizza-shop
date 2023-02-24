import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/footer.css"
import "../css/fonts/Open_Sans/stylesheet.css"

import InstaIcon from "../images/insta_icon.svg"
import PhoneIcon from "../images/phone_icon.svg"
import TelegaIcon from "../images/telegram_icon.svg"
import MailIcon from "../images/mail_icon.svg"


function Footer() {
    return (
<footer>
    <div class="container">
        <nav class="social-media">
            <ul>
                <li><a href="https://instagram.com/kizza.studio?igshid=YmMyMTA2M2Y="><img src={InstaIcon} alt="insta"/></a></li>
                <li><a href="#"><img src={PhoneIcon} alt="phone"/></a></li>
                <li><a href="https://t.me/polinavenberg"><img src={TelegaIcon} alt="telega"/></a></li>
                <li><a href="#"><img src={MailIcon} alt="mail"/></a></li>
            </ul>
        </nav>

        <nav class="footer-info">
            <nav class="company">
                <div class="head1">КОМПАНИЯ</div>
                <nav class="company_links">
                    <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Магазины</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Партнерство</a></li>
                        <li><a href="#">Работа в KIZZA</a></li>
                    </ul>
                </nav>
            </nav>

            <nav class="help">
                <div class="head2">ПОМОЩЬ</div>
                <nav class="help_links">
                    <ul>
                        <li><a href="#">Оплата</a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Возврат и обмен</a></li>
                        <li><a href="#">Размерная сетка</a></li>
                        <li><a href="#">Подарочные сертификаты</a></li>
                        <li><a href="#">Конфиденциальность</a></li>
                    </ul>
                </nav>
            </nav>

            <nav class="mailing">
                <div class="head3">НОВОСТНАЯ РАССЫЛКА</div>

                <div class="mail_text">
                    <p>Будь в курсе всех новостей и получи скидку 5%
                    на следующую покупку</p>
                </div>
                
                <div class="subscribe">
                    <input class="email-enter" placeholder="Email"></input>
                    <a href="#" class="subscribe-btn">Подписаться</a>
                </div>

            </nav>
            
        </nav>
    </div>
</footer>  
)
}

export default Footer;