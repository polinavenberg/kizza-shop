import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/item.css"
import "../css/fonts/Open_Sans/stylesheet.css"

import VampPic from "../images/вамп1 1 it.jpg"
import Bag2 from "../images/bag-2.svg"
import Heart2 from "../images/heart-2.svg"

function Item() {
    return (
<body>
    <main>
        <section>
            <div class="container">
                
                <div class="item-card">
                    <div class="item-card">
                        <div class="item-pic"><a href="#"><img src={VampPic} alt="clothes"/></a></div>
                        <div class="item-column">
                            <div class="item-info">
                                <div class="item-name"><h1>Рубашка с вампиршей</h1></div>
                                <div class="item-price"><h2>1999 RUB</h2></div>
                                <div class="item-descriprion"><h3>Материал: 100% хлопок</h3></div>

                            </div>
                            <div class="item-operate">
                                <div class="item-size">
                                    <div class="choose-size">Выберите размер:</div>
                                    <div class="sizes"> 
                                        <ul>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>
                                    </div>
                                    <div class="size-grid"><a href="#">Размерная сетка</a></div>
                                </div>
                                
                                <div class="card-options">
                                    <input type="text" placeholder="Кол-во" class="quantity"></input>
                                    <div class="add-to-card"><a href="#">В корзину <img src={Bag2} alt="card-botton"/></a></div>
                                </div>
                                <div class="like-item"><a href="#"><img src={Heart2} alt="heart"/></a></div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </main>
</body>
)
}

export default Item;