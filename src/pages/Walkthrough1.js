import React from "react";
import Heart from "../components/Heart";
import Node from "../components/Node";
import MusicCurrent from "../components/SoundCurrent";
import "./Walkthrough1.css";
import { Link } from "@reach/router";

export default function Walkthrough1() {

    return(
        <section className="Walkthrough1">
            <div className="bigPicture1">
                <img src="./images/walkthrough_2.svg" alt="background"/>
            </div>

            <div className="textInfo_walkthrough1">
                <h1>Where Words Fail, Music Speaks</h1>
                <p>Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
            </div>

        
            <section className="walkthrough_breadcrum"> 
                
                <MusicCurrent />
               <Link to="/Walkthrough2"><Heart /></Link> 
                <Node />
            </section>

        <div className="skip">
            <Link to="/Featured">skip</Link>
        </div>
        </section>
    )
}