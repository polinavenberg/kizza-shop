import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/logreg.css"
import "../css/fonts/Open_Sans/stylesheet.css"

import { useState } from "react";

function sendLogin (username, password) {}

function Login() {
    const [username, setUsername] = useState("")
    const usernameChange = (event) => { setUsername(event.target.value); };

    const [password, setPassword] = useState("")
    const passwordChange = (event) => { setPassword(event.target.value); };
    return (
<section className="login">
    <main>
        <section class="registration-login">
            <div class="container">
                <h1 class="head-text">Войти</h1>
                <form class="log-reg">
                    <input type="username" placeholder="Username" className="username" onChange={usernameChange}></input>
                    <input type="password" placeholder="Password" className="password" onChange={passwordChange}></input>
                    <input type="button" id="sendLog" onClick={() => sendLogin(username, password)} value="Подтвердить"></input>
                    <a href="register">Нет аккаунта? Зарегистрироваться.</a>
                </form>
            </div>
        </section>
    </main>
</section>
)
}
export default Login;