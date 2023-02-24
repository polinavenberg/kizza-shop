import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/logreg.css"
import "../css/fonts/Open_Sans/stylesheet.css"

import { useState } from "react";

function sendReg (username, password) {}

function Registration() {
    const [username, setUsername] = useState("")
    const usernameChange = (event) => { setUsername(event.target.value); };

    const [password, setPassword] = useState("")
    const passwordChange = (event) => { setPassword(event.target.value); };
    return (
<section className="registration">
    <main>
        <section class="registration-login">
            <div class="container">
                <h1 class="head-text">Зарегистрироваться</h1>
                <form class="log-reg">
                    <input type="username" placeholder="Username" className="username" onChange={usernameChange}></input>
                    <input type="password" placeholder="Password" className="password" onChange={passwordChange}></input>
                    <input type="button" id="sendReg" onClick={() => sendReg(username, password)} value="Подтвердить"></input>
                </form>

            </div>
        </section>
    </main>
</section>
)
}
export default Registration;