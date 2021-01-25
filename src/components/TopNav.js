import React from "react";
import "./TopNav.css";

export default function TopNav({pageName, color, h1}) {
    
    return(
        <>
        <header className="featured_header">
                <ion-icon style={{color:color}} name="chevron-back-outline"></ion-icon>
                <h1 style={{color:color}}>{pageName}</h1>
                <ion-icon style={{color:color}} name="search-outline"></ion-icon>
            </header>
                <div>
                    <h1 className="featured_gradiant">{h1}</h1>
                </div>
        </>
    )
}