import { Link } from '@reach/router';
import BotNav from '../components/BotNav';
import PlaylistSong from '../components/PlaylistSong';
import TopNav from '../components/TopNav';
import "./Playlists.css";

function Playlists() {
  return (
    <div className="PlaylistWrapper">
        <TopNav pageName="Playlists" pageH1="Playlists"/>
            <div className="gallery">
                <img src="https://via.placeholder.com/155x155" alt=""/>
                <img src="https://via.placeholder.com/155x155" alt=""/>
                <img src="https://via.placeholder.com/155x155" alt=""/>
            </div>
            <h2>Top 50 Rock Ballads</h2>
            <div className="songsDiv">
                <PlaylistSong time="3:58" songName="Old Town Road" artistName="Billy Ray Cyrus" />
                <PlaylistSong time="2:46" songName="Don’t Call Me Up" artistName="Mabel" />
                <PlaylistSong time="4:12" songName="Let Me Down Slowly" artistName="Alec Benjamin" />
                <PlaylistSong time="3:37" songName="Here With Me" artistName="Marshmello" />
                <PlaylistSong time="3:12" songName="Paradise" artistName="Bazzi" />
                <PlaylistSong time="4:12" songName="Let Me Down Slowly" artistName="Alec Benjamin" />
                <PlaylistSong time="3:37" songName="Here With Me" artistName="Marshmello" />
                <PlaylistSong time="3:12" songName="Paradise" artistName="Bazzi" />
                <div className="listenDiv">
                    <Link to="#" className="listenButton">LISTEN ALL</Link>
                </div>
            </div>
        <BotNav />
    </div>
  );
}

export default Playlists;
