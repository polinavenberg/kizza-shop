import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/header.css"
import "../css/fonts/Open_Sans/stylesheet.css"

import SearchStatus from "../images/search-status.svg"
import HeaderLogo from "../images/header_logo.svg"
import Profile from "../images/profile.svg"
import Heart from "../images/heart.svg"
import Bag from "../images/bag.svg"

function Header() {
    return (
        <header class="header">
        <div class="container">
            <div class="header-sale">
                Скидка 10% на первый заказ!
            </div>

            <div class="header-row"> 
                <div class="header-search"><a href="#"><img src={SearchStatus} alt="search-status"/></a></div>
                <div class="header-logo"><a href="main"><img src={HeaderLogo} alt="header-logo"/></a></div>
                <div class="header-buttons">
                    <ul>
                        <li><div class="btn"><a href="login"><img src={Profile} alt="profile"/></a></div></li>
                        <li><div class="btn"><a href="catalogue"><img src={Heart} alt="heart"/></a></div></li>
                        <li><div class="btn"><a href="catalogue"><img src={Bag} alt="bag"/></a></div></li>
                    </ul>
                </div>
                

            </div>
            <nav class="header-nav">
                <ul>
                    <li><a href="catalogue">НОВИНКИ</a></li>
                    <li><a href="catalogue">ОДЕЖДА</a></li>
                    <li><a href="catalogue">АКСЕССУАРЫ</a></li>
                    <li><a href="catalogue">SALE</a></li>
                    <li><a href="#">INSPIRE</a></li>
                </ul>
            </nav>
        </div>
    </header>
)
}

export default Header;