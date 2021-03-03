import BotNav from "../components/BotNav";
import PlaylistSong from "../components/PlaylistSong";
import TopNav from "../components/TopNav";
import "./Playlists.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";
import { Link } from "@reach/router";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Playlists(props) {
	var [token] = useContext(TokenContext);
	var [playlist, setPlaylist] = useState({});
	var [playlists, setPlaylists] = useState([]);
	var featuredState = useState([]);
	var setFeatured = featuredState[1];

	useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/me/playlists`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then(response => setPlaylists(response.data.items));

			if (props.id) {
				axios
					.get(`https://api.spotify.com/v1/playlists/${props.id}/tracks`, {
						headers: {
							Authorization: "Bearer " + token.access_token,
						},
					})
					.then(response => setPlaylist(response.data));
			}
			if (props.featured_id) {
				axios
					.get(`https://api.spotify.com/v1/playlists/${props.featured_id}`, {
						headers: {
							Authorization: "Bearer " + token.access_token,
						},
					})

					.then(response => setFeatured(response.data));
			}
		},
		[token, props.id, props.featured_id, setPlaylist, setPlaylists, setFeatured]
	);

	console.log(props.id);

	function msToMinutesAndSeconds(ms) {
		var minutes = Math.floor(ms / 60000);
		var seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	}
	const isActive = ({ isCurrent }) => {
		return isCurrent ? { className: "activePlaylist" } : {};
	};

	return (
		<div className="PlaylistWrapper">
			<div className="baggrundsblob">
				<img src="../images/slimey.png" alt="" />
			</div>
			<TopNav
				pageName="Playlists"
				pageH1="Playlists"
				color="white"
				h1="Playlists"
				background="none"
				webkitTextFillColor="unset"
			/>
			<div className="gallery">
				{playlists.map(function (result, index) {
					return (
						<Link getProps={isActive} to={"/Playlists/" + result.id}>
							<img
								className="playlistImg"
								src={result.images[0].url}
								data-index={index}
								onClick={event =>
									(document.querySelector(".playlist_name").innerText =
										playlists[event.target.getAttribute("data-index")].name)
								}
								alt=""
							/>
						</Link>
					);
				})}
			</div>
			<h2 className="playlist_name">Select Playlist</h2>

			<div className="songsDiv">
				{playlist.items &&
					playlist.items.map(function (result) {
						
						/* throw new Error("tada") */
						return (
							<ErrorBoundary>

							<PlaylistSong
								key={result.track.id}
								id={result.track.id}
								time={msToMinutesAndSeconds(result.track?.duration_ms)}
								songName={result.track.name}
								artistName={result.track.artists[0].name}
								/>
								</ErrorBoundary>
						);
					})}

				<div className="listenDiv">
					<button className="listenButton">LISTEN ALL</button>
				</div>
			</div>
			<BotNav />
		</div>
	);
}
