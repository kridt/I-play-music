import { Link } from '@reach/router';
import BotNav from '../components/BotNav';
import PlaylistSong from '../components/PlaylistSong';
import TopNav from '../components/TopNav';
import "./Playlists.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";

export default function Playlists(props) {

    var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});
    var playlistId = new URLSearchParams(props.location.search).get("id")
	useEffect(function() {
		axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => setContent(response.data));
	}, [token, setContent, playlistId]);

console.log(content);
  return (
    <div className="PlaylistWrapper">
        <TopNav pageName="Playlists" pageH1="Playlists"/>
            <div className="gallery">
                <img src="https://via.placeholder.com/155x155" alt=""/>
                <img src="https://via.placeholder.com/155x155" alt=""/>
                <img src="https://via.placeholder.com/155x155" alt=""/>
            </div>
            <h2>Top 50 Rock Ballads</h2>
            <div className="songsDiv">

                {content.items && content.items.map(function(result){
                    console.log(result);
                    var songLength = (result.track.duration_ms/1000)/60
                    return(
                        <PlaylistSong time={songLength.toFixed(2)} songName={result.track.name} artistName={result.track.artists[0].name} />

                    )
                })}

                
                <div className="listenDiv">
                    <Link to="#" className="listenButton">LISTEN ALL</Link>
                </div>
            </div>
        <BotNav />
    </div>
  );
}