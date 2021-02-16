import "./PlaylistSong.css";
import { Link } from "@reach/router";

function PlaylistSong({ songName, artistName, time, id }) {
  return (
    <div className="playlistSongWrapper">
      <Link to={"/SimplePlayer/" + id}>
        <i className="fas fa-play"></i>
      </Link>

      <div className="songText">
        <h3>{songName}</h3>
        <p>{artistName}</p>
      </div>
      <p className="time">{time}</p>
    </div>
  );
}

export default PlaylistSong;
