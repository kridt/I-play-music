import React from "react";
import BotNav from "../components/BotNav";
import MusicCard from "../components/MusicCard";
import TopNav from "../components/TopNav";
import "./Featured.css";

export default function Featured() {

    return(
        <article className="featured_site">
            
            <TopNav pageName="featured" color="#341931" h1="Featured" />

            <main>
                <div className="featured_music">
                    <MusicCard img="https://via.placeholder.com/325x425" h1="The Greatest Showman" p="Soundtrack"/>
                    <MusicCard img="https://via.placeholder.com/325x425" h1="The Greatest Showman" p="Soundtrack"/>                    
                </div>
            </main>

            <BotNav />

        </article>
    )
}