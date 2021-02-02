import React from "react";
import "./MusicCard.css";
import { Link } from "@reach/router";

export default function MusicCard({ img, h1, p, featured_id }) {

    return(
          <Link className="linkToPlaylist" to={"/Playlists/" + featured_id}>

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