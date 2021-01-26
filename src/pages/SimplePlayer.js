import TopNav from "../components/TopNav";
import "./SimplePlayer.css";

function SimplePlayer({songName, artistName, time}) {
  return (
    <div className="SimplePlayerWrapper">
        <TopNav pageName="Playing"/>
        <div className="playerGrid">
            <img src="./images/sound-wave.png" alt=""/>
            <img src="./images/player.png" alt=""/>
        </div>
        <section className="mainPlayer">
            <h2>{songName}</h2>
            <p>{artistName}</p>
            <div>
                <input className="timeRange" type="range"/>
                <div className="timeDiv">
                    <p>0:00</p>
                    <p>{time}</p>
                </div>
            </div>
        </section>
        <nav className="playerNav">
            <ul className="playerUl">
                <li><i className="fas fa-step-backward"></i></li>
                <li><i className="fas fa-backward"></i></li>
                <li><i className="fas fa-play play"></i></li>
                <li><i className="fas fa-forward"></i></li>
                <li><i className="fas fa-step-forward"></i></li>
            </ul>
        </nav>
    </div>
  );
}

export default SimplePlayer;
