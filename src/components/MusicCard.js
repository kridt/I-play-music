import React from "react";
import "./MusicCard.css";
import { Link } from "@reach/router";

export default function MusicCard({ img, h1, p, id }) {

    return(
          <Link className="linkToPlaylist" to={"/Playlists?id=" + id}>

        <div className="music_card">
            <img src={img} alt="cover"/>
            
            <div className="gradient"></div>

            <div className="music_card_text">
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
          </Link>
    )
}