import TopNav from "../components/TopNav";
import "./Album_page.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";
import PlaylistSong from "../components/PlaylistSong";
import BotNav from "../components/BotNav";

export default function Album_page(props) {

    var [token] = useContext(TokenContext);
    var [album, setAlbum] = useState({});

    useEffect(function () {
        axios.get(`https://api.spotify.com/v1/albums/${props.id}`, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
            .then(response => setAlbum(response.data));
    }, [token, setAlbum]);


    function msToMinutesAndSeconds(ms) {
        var minutes = Math.floor(ms / 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    var song = "Song";
    if (album.total_tracks > 1) {
        song = "Songs"
    }
    return (

        <section className="album_page">
            <TopNav pageName={album?.album_type} color="#fff" />
            <article className="album_info">
                <div className="background_img">
                    <img src={album.images && album.images[0].url} />
                </div>
                <div className="album_info_text">
                <h1>{album.name}</h1>
                <p>{album.total_tracks + " " + song}</p>
                </div>

                <div className="album_page_playlist">
                <h2>All Songs</h2>

                {album.tracks && album.tracks.items.map(function(result){
                        console.log(result);
                        return(

                            <PlaylistSong id={result.id} songName={result.name} time={msToMinutesAndSeconds(result.duration_ms)} artistName={result.artists[0].name} /> 
                        )
                })} 

                </div>
                
            </article>

            <BotNav />
        </section>
    )
}