import React from "react";
import "./LogIn.css";

export default function LogIn() {
    return(
        <article id="logInSite">
            <h1>Log In</h1>
            <form className="logInForm">
                <label htmlFor="username">Username</label>
                <div className="inputText">
                <input type="text" placeholder="Enter your username"/>
                <i class="fas fa-user"></i>
                </div>

                <label htmlFor="password">Password</label>
                <div className="inputText">
                <input type="text" placeholder="Enter your password" />
                <i class="fas fa-key"></i>
                </div>

                <input className="submitLogIn" type="submit" value="log in"/>
            </form>

        <section className="touchSection">

        <div className="touch">
             <i class="fas fa-fingerprint"></i>
        </div>
             <p className="oneTouch">One-Touch LogIn</p>

        </section>

        </article>
    )
}