import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/catalogue.css"
import "../css/fonts/Open_Sans/stylesheet.css"

import Bag from "../images/bag.svg"
import Pic1 from "../images/7 1 c.jpg"
import Pic2 from "../images/вамп1 1.jpg"
import Pic3 from "../images/1 1000 c.jpg"

function Catalogue() {
    return (
<body>
    <main>
        <section>
            <div class="container">
                <div class="header-text"><h1>Каталог товаров</h1></div>
                <div class="catalogue">
                    <div class="item-card1">
                        <div class="item-pic"><a href="item"><img src={Pic1} alt="clothes"/></a></div>
                        <div class="item-bottom">
                            <div class="item-info">
                                <div class="item-name">Чокер с крестом</div>
                                <div class="item-price">699Р</div>
                            </div>
                            <div class="card-botton"><a href="#"><img src={Bag} alt="card-botton"/></a></div>
                        </div>
                    </div>
                    <div class="item-card2">
                        <div class="item-pic"><a href="item"><img src={Pic2} alt="clothes"/></a></div>
                        <div class="item-bottom">
                            <div class="item-info">
                                <div class="item-name">Чокер с крестом</div>
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
                </div>
            </div>
        </section>
    </main>
</body>
)
}

export default Catalogue;