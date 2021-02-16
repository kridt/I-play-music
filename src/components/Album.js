import { Link } from "@reach/router";
import "./Album.css";

export default function Album({
  img_cover,
  album_name,
  artist,
  songCount,
  id,
}) {
  return (
    <Link to={"/Album/" + id}>
      <section className="album">
        <div className="album_info_album_page">
          <div className="album_cover_img_album_page">
            <img src={img_cover} alt="placeholder" />
          </div>
          <div className="album_name_album_page">
            <p className="albumName">{album_name}</p>
            <p className="artistName">{artist}</p>
          </div>
        </div>
        <div className="songCounter">
          <p>{songCount}</p>
        </div>
      </section>
    </Link>
  );
}
