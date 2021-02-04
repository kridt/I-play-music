import Album from "../components/Album";
import BotNav from "../components/BotNav";
import TopNav from "../components/TopNav";
import "./Albums.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";

export default function Albums(props) {
    
    var [token] = useContext(TokenContext);
	var [albums, setAlbums] = useState({});

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/browse/new-releases", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => setAlbums(response.data.albums));
	}, [token, setAlbums]);

console.log(albums.items);
        
    return(
        <article className="albums_article">
            <TopNav h1="All Albums" pageName="Music"/>

            <section className="all_albums_section">

            <div className="featured_albums">
                
                
                <div className="info_featured_albums">
                    <p>Featured Albums</p>
                    <p className="viewAll">View All</p>
                </div>
                <div className="albums">
                    <img src="https://via.placeholder.com/130" alt="placeholder"/>
                    <img src="https://via.placeholder.com/130" alt="placeholder"/>
                    <img src="https://via.placeholder.com/130" alt="placeholder"/>
                </div>
            </div>


            </section>
            <div className="new_releases">
            <p className="new_release">New Releases</p>
            <p className="viewAll">View All</p>
            </div>
            <div className="albumsList">

                {albums.items?.map(function(result) {

                    var songs = "songs";
                    if (result.total_tracks < 2){
                        songs = "song"
                    }

                    return(
                        <Album songCount={result.total_tracks + " " + songs} id={result.id} img_cover={result.images[0].url} album_name={result.name} artist={result.artists[0].name}  />

                    )
                    })}
                
            </div>

            <BotNav />
        </article>
    )
}