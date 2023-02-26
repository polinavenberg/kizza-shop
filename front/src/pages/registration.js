import "../css/reset.css"
import "../css/base.css"
import "../css/blocks/logreg.css"
import "../css/fonts/Open_Sans/stylesheet.css"
import { useState } from "react";

export function sendReg(username, password) {
    fetch("http://51.250.13.184:8000/auth/reg/",
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
            if ("username" in response) {
                console.log("Successfully registered user: " + username
                    + "\nResponse: " + JSON.stringify(response))
            } else {
                console.log("Failed registration" +
                    "\nResponse: " + JSON.stringify(response))
            }
        })
        .catch((error) => {
            alert(error)
            console.log("ERROR: " + username + " " + password)
        })
}
function Registration() {
    const [username, setUsername] = useState("")
    const usernameChange = (event) => {
        setUsername(event.target.value);
    };

    const [password, setPassword] = useState("")
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };
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