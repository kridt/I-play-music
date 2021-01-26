import React from "react";
import BotNav from "../components/BotNav";
import Category from "../components/Category";
import TopNav from "../components/TopNav";
import "./Categories.css";
import { Link } from "@reach/router";

export default function Categories() {

    return(
        <article className="categories_article">
            <TopNav pageName="Categories" h1="Categories"/>

            <article className="categoriesList">
             <Link className="albumLink" to="/Albums"><Category categoryName="Alternative" color="#D70060"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Blues" color="#E54028"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Classical" color="#F18D05"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Country" color="#F2BC06"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Dance" color="#5EB11C"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Electronic" color="#3A7634"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Fitness &amp; Workout" color="#0ABEBE"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Hip-Hop/Rap" color="#00A1CB"/></Link>   
             <Link className="albumLink" to="/Albums"><Category categoryName="Industrial" color="#115793"/></Link>   
            </article>

            <BotNav />
        </article>
    )
}