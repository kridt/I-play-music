import React from "react";
import Heart from "../components/Heart";
import Music from "../components/Sound";
import MusicCurrent from "../components/SoundCurrent";
import "./Walkthrough1.css";

export default function Walkthrough1() {

    return(
        <section className="Walkthrough1">
            <div className="bigPicture1">
                <img src="./images/asset_3.png" alt="background"/>
            </div>

            <div className="textInfo_walkthrough1">
                <h1>Where Words Fail, Music Speaks</h1>
                <p>Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
            </div>

        
            <section className="walkthrough_breadcrum"> 
                
                <Music />
                <MusicCurrent />
                <Heart />
            </section>

        </section>
    )
}