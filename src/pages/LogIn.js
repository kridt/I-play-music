import React from "react";
import "./LogIn.css";

export default function LogIn() {
    return(
        <article id="logInSite">
            <h1>Log In</h1>
            <form className="logInForm" action="Walkthrough1.html">
                <label htmlFor="username">Username</label>
                <div className="inputText">
                <input type="text" placeholder="Enter your username"/>
                <ion-icon name="person-circle-outline"></ion-icon>
                </div>

                <label htmlFor="password">Password</label>
                <div className="inputText">
                <input type="text" placeholder="Enter your password" />
                <ion-icon name="key"></ion-icon>
                </div>

                <input className="submitLogIn" type="submit" value="log in"/>
            </form>

        <section className="touchSection">

        <div className="touch">
        <ion-icon name="finger-print-outline"></ion-icon>
        </div>
             <p className="oneTouch">One-Touch LogIn</p>

        </section>

        </article>
    )
}