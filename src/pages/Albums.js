import BotNav from "../components/BotNav";
import TopNav from "../components/TopNav";
import "./Albums.css";

export default function Albums() {

    return(
        <article className="albums_article">
            <TopNav h1="All Albums" pageName="Music"/>

            <section className="all_albums_section">

            <div className="featured_albums">
                <div className="">

                </div>

                <div className="albums">
                    <img src="https://via.placeholder.com/130" alt="placeholder"/>
                    <img src="https://via.placeholder.com/130" alt="placeholder"/>
                    <img src="https://via.placeholder.com/130" alt="placeholder"/>
                </div>
            </div>

            </section>

            <BotNav />
        </article>
    )
}