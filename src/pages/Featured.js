import React from "react";
import BotNav from "../components/BotNav";
import MusicCard from "../components/MusicCard";
import TopNav from "../components/TopNav";
import "./Featured.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";

export default function Featured() {
    var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => setContent(response.data));
	}, [token, setContent]);



    
    return(
        <article className="featured_site">
            <TopNav pageName="featured" color="#341931" h1="Featured" />
            <main>
                <div className="featured_music">
                    {content.playlists&&content.playlists.items.map(function(result){
                        
                        return(
                            <MusicCard img={result.images[0].url} h1={result.name} p={result.description} featured_id={result.id} key={result.id} />                    
                            )
                    })}       
                </div>
            </main>

            <BotNav />

        </article>
    )
}