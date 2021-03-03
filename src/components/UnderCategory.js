import "./Undercategory.css";

export default function Undercategory({ undercategoryName }) {
	return (
		<article>
			<div className="undercategoryName">
				<p>{undercategoryName}</p>
				<ion-icon name="chevron-forward"></ion-icon>
			</div>
		</article>
	);
}
