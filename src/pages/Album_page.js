import TopNav from "../components/TopNav";
import "./Album_page.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";

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

    console.log(album);

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
            </article>
        </section>
    )
}