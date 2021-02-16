import React from "react";
import "./BotNav.css";
import { Link } from "@reach/router";

export default function BotNav({
  current1,
  current2,
  current3,
  current4,
  current5,
}) {
  return (
    <nav className="botNav">
      <ul className="botUl">
        <li style={{ color: current1 }}>
          {" "}
          <Link className="pulse botLi" to="/Albums">
            <ion-icon name="pulse"></ion-icon>
          </Link>
        </li>
        <li style={{ color: current2 }}>
          {" "}
          <Link className="mic botLi" to="/Playlists">
            <ion-icon name="mic"></ion-icon>
          </Link>
        </li>
        <li style={{ color: current3 }}>
          {" "}
          <Link className="music botLi" to="/Featured">
            <ion-icon name="radio"></ion-icon>
          </Link>
        </li>
        <li style={{ color: current4 }}>
          {" "}
          <Link className="half botLi" to="">
            <ion-icon name="contrast"></ion-icon>
          </Link>
        </li>
        <li style={{ color: current5 }}>
          {" "}
          <Link className="settings botLi" to="/Categories">
            <ion-icon name="settings-sharp"></ion-icon>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
