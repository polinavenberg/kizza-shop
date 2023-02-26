import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/logreg.css"
import "../css/fonts/Open_Sans/stylesheet.css"

import { useState } from "react";

export function sendLogin(username, password) {
    fetch("http://51.250.13.184:8000/auth/login/",
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "access-control-allow-origin",
            },
            "body": JSON.stringify({
                "username": username,
                "password": password,
            })
        })
        .then(response => response.json())
        .then(response => {
            window.location.href = "/"
            if ("access" in response) {
                console.log("Successful login user: " + username
                    + "\nResponse: " + JSON.stringify(response))
            } else {
                console.log("Failed login" +
                    "\nResponse: " + JSON.stringify(response))
            }
        })
        .catch((error) => {
            alert(error)
            console.log("ERROR: " + username + " " + password)
        })
}

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