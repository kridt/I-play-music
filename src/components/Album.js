import "./Album.css";

export default function Album({ img_cover, album_name, artist, songCount }) {

    return(
        <section className="album">
        <div className="album_info">
            <div className="album_cover_img">
                <img src={img_cover} alt="placeholder" />
            </div>
            <div className="album_name">
                <p className="albumName">{album_name}</p>
                <p className="artistName">{artist}</p>
            </div>
        </div>
        <div className="songCounter">
            <p>{songCount} Songs</p>
        </div>
        </section>
    )
}