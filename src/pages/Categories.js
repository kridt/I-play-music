import React from "react";
import BotNav from "../components/BotNav";
import Category from "../components/Category";
import TopNav from "../components/TopNav";
import "./Categories.css";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";
import axios from "axios";

export default function Categories() {
	var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});
	useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/browse/categories`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})

				.then(response => setContent(response.data.categories));
		},
		[token, setContent]
	);

	return (
		<article className="categories_article">
			<TopNav pageName="Categories" h1="Categories" />

			<section className="categoriesList">
				{content.items?.map(function (result) {
					return <Category categoryName={result.name} color="#000000" id={result.id} />;
				})}

				{/*  <Link className="albumLink" to="/Albums"><Category categoryName="Blues" color="#E54028"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Classical" color="#F18D05"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Country" color="#F2BC06"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Dance" color="#5EB11C"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Electronic" color="#3A7634"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Fitness &amp; Workout" color="#0ABEBE"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Hip-Hop/Rap" color="#00A1CB"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Industrial" color="#115793"/></Link> */}
			</section>

			<BotNav />
		</article>
	);
}
