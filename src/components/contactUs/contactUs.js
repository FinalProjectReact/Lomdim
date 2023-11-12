
import React, { useState } from "react";
import './ContactUs.css'

export default function ContactUs() {
const [email, setEmail] = useState();
const [detail, setDetail] = useState();

  return (
    <div className="contact-wrapper">
      <h1>פנייה לצוות האתר</h1>
      <p>אם מצאת טעות או שאתה רוצה שנוסיף משהו, שלח לנו הודעה!</p>
      <div>
        <p>מייל לחזרה*</p>
        <input
          type="text"
          autoComplete="on"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        >
        </input>
        <p>הודעה:*</p>
        <textarea
        rows="5"
        onChange={(e) => setDetail(e.target.value)}
        value={detail}
        required
        >
        </textarea>
        <button className="btn-send">שליחה</button>
      </div>
    </div>
  );
}