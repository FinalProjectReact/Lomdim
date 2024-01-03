import React, { useState } from "react";
import "./contactUs.css";
import imgContactUs from "../picthers/img_contact_us.png";

export default function ContactUs() {
  const [email, setEmail] = useState();
  const [detail, setDetail] = useState();

  return (
    <div className="row p-4">
    <div className="col-5 p-4 mr-2">
      <h1>פנייה לצוות האתר</h1>
      <p>אם מצאת טעות או שאתה רוצה שנוסיף משהו, שלח לנו הודעה!</p>
      <div className="container shadow rounded-1 p-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                מייל לחזרה*
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                הודעה:*
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setDetail(e.target.value)}
              ></textarea>
            </div>
            <div className="d-grid gap-2 ">
              <button
                className="btn-send"
                style={{ backgroundColor: "#ffae35", color: "black" }}
              >
                שליחה
              </button>
            </div>
          
      </div>
      </div>
      <div className="col-5 p-4">
            <img
              className="imgContactUs"
              src={imgContactUs}
              alt="img"
              style={{ width: "80%", height: "100%" }}
            />
          </div>
    </div>
  );
}
