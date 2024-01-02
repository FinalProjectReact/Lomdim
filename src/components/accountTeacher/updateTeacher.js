import React, { useRef, useState } from "react";
//import "./accountTeacher.css";
import { connect, useSelector } from "react-redux";
import { updateTeacherDetails, updateUser } from "../../redux/actions/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function mapStateToProps(state) {
  return {
    category: state.category,
    teacherDetais: state.teacherDetais,
    user: state.user,
  };
}

function ProfilTeacher(props) {
  const { user, teacherDetais, category, dispatch } = props;
  const userState = useSelector((state) => state.user.user);
  console.log(18, userState);
  const userNameRef = useRef("");
  const passwordRef = useRef("");
  const mailRef = useRef("");
  const phoneRef = useRef("");
  const cityRef = useRef("");
  const streetRef = useRef("");
  const houseNumRef = useRef("");

  const [userName, setUserName] = useState(userState?.userName);
  const [password, setPassword] = useState(userState?.password);
  const [mail, setMail] = useState(userState?.mail);
  const [phone, setPhone] = useState(userState?.phone);
  const [city, setCity] = useState(userState?.city);

  const detailRef = useRef("");

 // const [allCheckedStudy, setAllCheckedStudy] = useState("");
  const [allCheckedPlace, setAllCheckedPlace] = useState("");
  const [detail, setDetail] = useState(/*category.aboutMe*/);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const nav = useNavigate();

  // function handleChange1(e) {
  //   if (e.target.checked) {
  //     setAllCheckedStudy([...allCheckedStudy, e.target.value]);
  //   } else {
  //     setAllCheckedStudy(
  //       allCheckedStudy.filter((item) => item !== e.target.value)
  //     );
  //   }
  // }

  // function handleChange3(e) {
  //   if (e.target.checked) {
  //     setAllCheckedPlace([...allCheckedPlace, e.target.value]);
  //   } else {
  //     setAllCheckedPlace(
  //       allCheckedPlace.filter((item) => item !== e.target.value)
  //     );
  //   }
  // }
  async function updateUserfun(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        userName: userNameRef.current?.value,
        password: passwordRef.current?.value,
        phone: phoneRef.current?.value,
        mail: mailRef.current?.value,
        city: cityRef.current?.value,
        str: streetRef.current?.value,
        numStr: houseNumRef.current?.value,
        status: teacherDetais?.value,
      })
    );
    const { data } = await axios.put(
      `http://localhost:3030/user/updateUser/${userState["_id"]}`,
      {
        userName: userNameRef.current?.value,
        password: passwordRef.current?.value,
        phone: phoneRef.current?.value,
        mail: mailRef.current?.value,
        city: cityRef.current?.value,
        str: streetRef.current?.value,
        numStr: houseNumRef.current?.value,
        status: teacherDetais?.value,
      }
    );
    console.log(data);
    nav("/account_teacher");
  }

  function showPassword() {
    var x = document.getElementById("exampleFormControlInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <>
      <div className="profil-wapper">
        <br />
<h3 className="display-6 p-4" style={{ textAlign: "right" }}>עדכון פרטים</h3>
        <div
          className="container p-5 border rounded-1"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          
          <br />
          <div className="form">
            <form className="profil-details">
              <div className="row">
                <div className="col">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      שם משתמש
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={currentUser.userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      סיסמא
                    </label>
                    <div className="input-group mb-3"></div>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput"
                      value={currentUser.password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                     <input type="checkbox" onclick={showPassword}/>הצג סיסמא
                  </div>
                </div>
                
                <div className="col">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={currentUser.mail}
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      טלפון
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={currentUser.phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      עיר/יישוב
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={currentUser.city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="studyInfo">
                <h3 className="title-register" style={{ textAlign: "right" }}>
                  פרטי השיעור
                </h3>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  >
                  <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                  </label></input>
                </div>
                <label htmlFor="detail">המקצועות שלך</label>
                <br />
                <label htmlFor="detail">בחר:</label>
                <br />

                <br />

                <br />
                <div className="input-wapper">
                  <label className="input-wapper">קצת עליי...</label>
                  <div className="input-wapper">
                    <textarea
                      ref={detailRef}
                      rows="5"
                      id="input-detail"
                      name="text"
                      placeholder="תיאור כללי, מומלץ לכתוב באופן חופשי את מבנה השיעור, הניסיון שלך, גישת לימוד וכו'..."
                      onChange={(e) => setDetail(e.target.value)}
                      value={detail}
                      required
                    ></textarea>
                  </div>
                </div>

                <br />
                <label htmlFor="detail">הגדרת מיקום השיעור:</label>
                <br />
                <div className="checkbox-wapper">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="inStudent"
                      onChange={handleChange3}
                    />
                    <label htmlFor="checkbox">בבית התלמיד</label>
                  </div>

                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="inTeacher"
                      onChange={handleChange3}
                    />
                    <label htmlFor="checkbox">בבית המורה</label>
                  </div>
                </div>
              </div> */}

              <button className="btn btn-primary btn-rounded" onClick={updateUserfun}>
                עדכן פרטים אישיים
              </button>
            </form>
          </div>
        </div>
      </div>
      <br/>
    </>
  );
}

export default connect(mapStateToProps)(ProfilTeacher);

// import React from "react";
// import "./pageTeacher.css";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function mapStateToProps(state) {
//   return {
//     currentUser: state.user.currentUser,
//     teacherDetails: state.teacher.teacherDetails,
//   };
// }

// function UpdateTeacher(props) {
//   const { teacherDetails, currentUser } = props;
//   const nav = useNavigate();

//   return (
//     <>
//       <div className="page-teacher">
//         <div className="title-teacher">
//           <div className="name-teacher">
//             <h1>{currentUser.userName}</h1>
//             <p>

//               {/* הצלחה מובטחת עם מעל ל-18 שנות נסיון בהכנה לבגרויות, מבחנים והכנת
//               שעורי בית החל מבית הספר היסודי ועד לתיכון */}
//             </p>
//           </div>
//           <div className="connect">
//             <h4>ליצירת קשר</h4>
//             <h3>
//               {currentUser.mail}
//               <br />
//               {currentUser.phone}
//             </h3>
//           </div>
//         </div>

//         <div className="txt-wrapper">
//           <div className="about-me">
//             <h2>אודותי - קצת עליי</h2>
//             <p>
//             {teacherDetails.aboutMe}
//               {/* דוגמא - אני מעיין, מורה פרטית כבר למעלה מ-18 שנים ומתמחה בהגשה
//               לבגרויות ובהקניית הרגלי למידה. אני מציעה:
//               <br />
//               * בניית תכנית עבודה בהתאם למטרות וליעדים
//               <br />* יחס אישי וייחודי לכל תלמיד ותלמידה ועוד...... */}
//             </p>
//           </div>
//           <div className="category">
//               <h2>תחומי לימוד</h2>

//           </div>
//           <button onClick={()=>nav('/update_teacher')}></button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default connect(mapStateToProps)(UpdateTeacher);
