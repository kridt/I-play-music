import React from "react";
import "./LogIn.css";
import querystring from "querystring";

export default function LogIn() {

	var url = window.location.href;
	console.log(url);

	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "0739246590d94c2e9daa8311e7b697d8",
		scope: "user-read-private user-read-email",
		redirect_uri: process.env.NODE_ENV === "production"
		? "https://i-playmusic-kridt.netlify.app/callback"
		: "http://localhost:8888/callback",
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighzoirhtlzo8ghldhglzdghlzdoigh",
	});

	return (
		<article id="logInSite">
			<h1>Log In</h1>

			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with spotify</a>

			<form className="logInForm" action="Walkthrough1.html">
				<label htmlFor="username">Username</label>
				<div className="inputText">
					<input type="text" placeholder="Enter your username" />
					<ion-icon name="person-circle-outline"></ion-icon>
				</div>

				<label htmlFor="password">Password</label>
				<div className="inputText">
					<input type="text" placeholder="Enter your password" />
					<ion-icon name="key"></ion-icon>
				</div>

				<input className="submitLogIn" type="submit" value="log in" />
			</form>

			<section className="touchSection">
				<div className="touch">
					<ion-icon name="finger-print-outline"></ion-icon>
				</div>
				<p className="oneTouch">One-Touch LogIn</p>
			</section>
		</article>
	);
}
