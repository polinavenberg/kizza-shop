import "../css/reset.css"
import "../css/base.css"

import "../css/fonts/Open_Sans/stylesheet.css"
import "../css/blocks/main.css"

import ClothesBckgr from "../images/Property 1=тр 1.png"
import AccessoriesBckgr from "../images/Property 1=Component 2.png"
import Logo2 from "../images/лого 2.png"
import Pic1 from "../images/7 1.jpg"
import Pic2 from "../images/8 1.jpg"
import Pic3 from "../images/5 1.jpg"
import Pic4 from "../images/6 1.jpg"
import Bag from "../images/bag.svg"


function Main() {
    return (
<body>
    <main> 
        <section class="home1">
            <div class="container">
                <nav class="home-text1">
                    <a href="catalogue">ОДЕЖДА</a>
                </nav>
                <div class="background-pic1">
                    <img src={ClothesBckgr} alt="clothes"/>
                </div>
            </div>
        </section>

        <section class="home2">
            <div class="container">
                <nav class="home-text2">
                    <a href="catalogue">АКСЕССУАРЫ</a>
                </nav>
                <div class="background-pic2">
                    <img src={AccessoriesBckgr} alt="clothes"/>
                </div>
            </div>
        </section>

        <section class="logo">
            <div class="container">
                <div class="logo2">
                    <img src={Logo2} alt="logo2"/>
                </div>
            </div>
        </section>

        <section class="items">
            <div class="container">
                <div class="new-items">НОВЫЕ ТОВАРЫ</div>
                <div class="item-list">
                    <div class="item-card1">
                        <div class="item-pic"><a href="item"><img src={Pic1} alt="clothes"/></a></div>
                        <div class="item-bottom">
                            <div class="item-info">
                                <div class="item-name">Серьги-цепи</div>
                                <div class="item-price">599Р</div>
                            </div>
                            <div class="card-botton"><a href="#"><img src={Bag} alt="card-botton"/></a></div>
                        </div>
                    </div>
    
                    <div class="item-card2">
                        <div class="item-pic"><a href="item"><img src={Pic2} alt="clothes"/></a></div>
                        <div class="item-bottom">
                            <div class="item-info">
                                <div class="item-name">Набор браслетов</div>
                                <div class="item-price">699Р</div>
                            </div>
                            <div class="card-botton"><a href="#"><img src={Bag} alt="card-botton"/></a></div>
                        </div>
                    </div>

                    <div class="item-card3">
                        <div class="item-pic"><a href="item"><img src={Pic3} alt="clothes"/></a></div>
                        <div class="item-bottom">
                            <div class="item-info">
                                <div class="item-name">Чокер с крестом</div>
                                <div class="item-price">699Р</div>
                            </div>
                            <div class="card-botton"><a href="#"><img src={Bag} alt="card-botton"/></a></div>
                        </div>
                    </div>

                    <div class="item-card4">
                        <div class="item-pic"><a href="item"><img src={Pic4} alt="clothes"/></a></div>
                        <div class="item-bottom">
                            <div class="item-info">
                                <div class="item-name">Чокер с крестом</div>
                                <div class="item-price">699Р</div>
                            </div>
                            <div class="card-botton"><a href="#"><img src={Bag} alt="card-botton"/></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</body>
)
}

export default Main;