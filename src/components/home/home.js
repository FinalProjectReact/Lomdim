import React from "react";
import "./home.css";
import imgHome from "../picthers/imgHome.jpg";

export default function Home() {
  return (
    <>
      <img id="imgHome" alt="imgHome" src={imgHome} />

      <div className="searchTech">
        <div className="display-5">
          באתר שלנו תוכלו למצוא את המורה הפרטי שלך
        </div>
        <br />
        <h6>👆הכנסו/הרשמו עכשיו👆</h6>
      </div>
    </>
  );
}
