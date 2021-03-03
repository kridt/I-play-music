import TopNav from "../components/TopNav";
import "./SimplePlayer.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";

export default function SimplePlayer(props) {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});
	/*         var songId = new URLSearchParams(props.location.search).get("song");
	 */ useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/tracks/${props.song}`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})

				.then(response => setContent(response.data));
		},
		[token, setContent, props.song]
	);

	console.log(content);

	function playThatShit() {
		var audio = document.querySelector("audio");
		var play = document.querySelector(".play");
		var spinner = document.querySelector(".record");
		audio.volume = 0.1;
		if (!audio.src) {
			alert("No Working");
		}

		if (audio.paused && audio.src) {
			audio.play();
			play.className = "fas fa-pause play";
			spinner.className = "record record--playing";
		} else {
			audio.pause();
			play.className = "fas fa-play play";
			spinner.className = "record record--stop";
		}
	}

	function msToMinutesAndSeconds(ms) {
		var minutes = Math.floor(ms / 60000);
		var seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	}

	return (
		<div className="SimplePlayerWrapper">
			<TopNav pageName="Playing" />
			<div className="playerGrid">
				<img src="./images/sound-wave.png" alt="" />
				<img className="record" src="./images/player.png" alt="" />
			</div>
			<section className="mainPlayer">
				<h2>{content.name}</h2>
				<p>{content.artists && content.artists[0].name}</p>
				<div>
					<input className="timeRange" type="range" />
					<audio src={content.preview_url} type="audio/mp3" />
					<div className="timeDiv">
						<p>0.00</p>
						<p>{msToMinutesAndSeconds(content.duration_ms)}</p>
					</div>
				</div>
			</section>
			<nav className="playerNav">
				<ul className="playerUl">
					<li>
						<i className="fas fa-step-backward"></i>
					</li>
					<li>
						<i className="fas fa-backward"></i>
					</li>
					<li onClick={playThatShit} className="playBtn">
						<i className="fas fa-play play"></i>
					</li>
					<li>
						<i className="fas fa-forward"></i>
					</li>
					<li>
						<i className="fas fa-step-forward"></i>
					</li>
				</ul>
			</nav>
		</div>
	);
}
