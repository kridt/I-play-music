import React from "react";
import "./MusicCard.css";

export default function MusicCard({ img, h1, p }) {

    return(
          
        <div className="music_card">
            <img src={img} alt="placeholder"/>
            <div className="music_card_text">
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
    )
}