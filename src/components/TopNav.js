import React from "react";
import "./TopNav.css";

export default function TopNav({ pageName, color, h1, background, webkitTextFillColor }) {
	return (
		<>
			<header className="featured_header">
				<button className="back" onClick={() => window.history.back()}>
					{" "}
					<ion-icon style={{ color: color }} name="chevron-back-outline"></ion-icon>
				</button>
				<h1 style={{ color: color }}>{pageName}</h1>
				<ion-icon style={{ color: color }} name="search-outline"></ion-icon>
			</header>
			<div>
				<h1
					style={{
						background: background,
						color: color,
						webkitTextFillColor: webkitTextFillColor,
					}}
					className="featured_gradiant">
					{h1}
				</h1>
			</div>
		</>
	);
}
