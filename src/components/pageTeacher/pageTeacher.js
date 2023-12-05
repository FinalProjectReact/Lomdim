import React, { useState } from "react";
import "./pageTeacher.css";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LessonTeacher from "./lessonTeacher";
import LessonTable from "./lessonTeble";

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    teacherDetails: state.teacher.teacherDetails,
  };
}

function PageTeacher(props) {
 
  const nav = useNavigate();
const currentUser = useSelector(state => state);
console.log(("currentUser", currentUser));
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")))
  return (
    <>
      <div className="page-teacher">
        <div className="title-teacher">
          <div className="name-teacher">
            <h1>{user?.userName}</h1>
            <p>
              
              {/* הצלחה מובטחת עם מעל ל-18 שנות נסיון בהכנה לבגרויות, מבחנים והכנת
              שעורי בית החל מבית הספר היסודי ועד לתיכון */}
            </p>
          </div>
          <div className="connect">
            <h4>ליצירת קשר</h4>
            <h3>
              {user?.mail}
              <br />
              {user?.phone}
            </h3>
          </div>
        </div>

        <div className="txt-wrapper">
          <div className="about-me">
            <h2>אודותי - קצת עליי</h2>
            <p>
            {/* {teacherDetails.aboutMe} */}
              {/* דוגמא - אני מעיין, מורה פרטית כבר למעלה מ-18 שנים ומתמחה בהגשה
              לבגרויות ובהקניית הרגלי למידה. אני מציעה:
              <br />
              * בניית תכנית עבודה בהתאם למטרות וליעדים
              <br />* יחס אישי וייחודי לכל תלמיד ותלמידה ועוד...... */}
            </p>
          </div>
          <div className="category">
              <h2>תחומי לימוד</h2>
              
          </div>
          <button onClick={()=>nav('/lesson_table_techer')}> הפניות שלי </button>
          {/* לעבור על המערך פניות בלולאה ב-map */}
          <ul></ul>
          <button onClick={()=>nav('/update_teacher')}>עדכן פרטי מורה</button>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(PageTeacher);