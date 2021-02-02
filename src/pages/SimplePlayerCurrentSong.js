import TopNav from "../components/TopNav";
import "./SimplePlayer.css";


export default function SimplePlayerCurrentSong() {

        function playThatShit() {
            var audio = document.querySelector("audio");
            var play = document.querySelector(".play");
            var spinner = document.querySelector(".record");
            audio.volume=0.1;
            if(!audio.src) {
                alert("No Working");
            }
            
            if (audio.paused && audio.src) {
                audio.play();
                play.className="fas fa-pause play";
                spinner.className = "record record--playing";
            } else{
                audio.pause();
                play.className="fas fa-play play";
                spinner.className = "record record--stop";
            }
            

        }


        var currentSongPlaying = localStorage.getItem("currentSongPlaying"); 
        var songPlay = JSON.parse(currentSongPlaying)
        

  return (
      <div className="SimplePlayerWrapper">
        <TopNav pageName="Playing"/>
        <div className="playerGrid">
            <img src="./images/sound-wave.png" alt=""/>
            <img className="record" src="./images/player.png" alt=""/>
        </div>
        <section className="mainPlayer">
            <h2>{songPlay.name}</h2>
            <p>{songPlay.artists}</p>
            <div>
                <input className="timeRange" type="range"/>
                <audio src={songPlay.musicUrl} type="audio/mp3" />
                <div className="timeDiv">
                    <p>0.00</p>
                    <p>{songPlay.lengthOfSong}</p>
                </div>
            </div>
        </section>
        <nav className="playerNav">
            <ul className="playerUl">
                <li><i className="fas fa-step-backward"></i></li>
                <li><i className="fas fa-backward"></i></li>
                <li onClick={playThatShit} className="playBtn"><i className="fas fa-play play"></i></li>
                <li><i className="fas fa-forward"></i></li>
                <li><i className="fas fa-step-forward"></i></li>
            </ul>
        </nav>
    </div>
  );
};