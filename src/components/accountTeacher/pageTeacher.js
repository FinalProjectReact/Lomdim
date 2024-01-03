import React from "react";


export default function PageTeacher() {
  const user = JSON.parse(localStorage.getItem("user"));
  const teacherData = JSON.parse(localStorage.getItem("teacherData"));

  return (
    <>
      <br />
      <div className="container border rounded-1 p-5">
        <div className="row align-items-center">
          <div className="col">
            <figure>
              <h6 className="display-6">המורה {user.userName}</h6><br/>
              <figcaption class="blockquote-footer">
              {teacherData.city}
              </figcaption>
            </figure>
          </div>
        </div>
        <br />

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <br />
                  <p className="lead fw-normal">קצת עליי</p>
                  <p>{teacherData.aboutMe}</p>
                  <br />
                  <p className="lead fw-normal">תחומי לימוד</p>
                  <p>{teacherData.categories+" "} </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="container">
                <div className="row">
                  <p className="lead fw-normal">פרטי התקשרות</p>
                  <p>טלפון ליצירת קשר: {user.phone}</p>
                  <p>כתובת א-מייל: {user.mail}</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
