import "./PlaylistSong.css";

function PlaylistSong({songName, artistName, time}) {
  return (
    <div className="playlistSongWrapper">
        <i className="fas fa-play"></i>
        <div className="songText">
            <h3>{songName}</h3>
            <p>{artistName}</p>
        </div>
        <p className="time">{time}</p>
    </div>
  );
}

export default PlaylistSong;