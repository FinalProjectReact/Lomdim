import React, { useRef, useState } from "react";
import "./accountTeacher.css";
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

function AccountTeacher(props) {
  const { user, teacherDetais, category, dispatch } = props;
  const nav = useNavigate();
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
  const [street, setStreet] = useState(userState?.street);
  const [houseNum, setHouseNum] = useState(userState?.numStr);

  const detailRef = useRef("");

  const [allCheckedStudy, setAllCheckedStudy] = useState("");
  const [allCheckedPlace, setAllCheckedPlace] = useState("");
  const [detail, setDetail] = useState(/*category.aboutMe*/);

  function handleChange1(e) {
    if (e.target.checked) {
      setAllCheckedStudy([...allCheckedStudy, e.target.value]);
    } else {
      setAllCheckedStudy(
        allCheckedStudy.filter((item) => item !== e.target.value)
      );
    }
  }

  function handleChange3(e) {
    if (e.target.checked) {
      setAllCheckedPlace([...allCheckedPlace, e.target.value]);
    } else {
      setAllCheckedPlace(
        allCheckedPlace.filter((item) => item !== e.target.value)
      );
    }
  }
  // async function updateUserfun(e) {
  //   e.preventDefault();
  //   dispatch(
  //     updateUser({
  //       userName: userNameRef.current?.value,
  //       password: passwordRef.current?.value,
  //       phone: phoneRef.current?.value,
  //       mail: mailRef.current?.value,
  //       //gender: teacherDetais.gender,
  //       city: cityRef.current?.value,
  //       str: streetRef.current?.value,
  //       numStr: houseNumRef.current?.value,
  //       status: teacherDetais?.value,
  //     })
  //   );
  //   const { data } = await axios.put(
  //     `http://localhost:7000/user/updateUser/${userState["_id"]}`,
  //     {
  //       userName: userNameRef.current?.value,
  //       password: passwordRef.current?.value,
  //       phone: phoneRef.current?.value,
  //       mail: mailRef.current?.value,
  //       //gender: teacherDetais.gender,
  //       city: cityRef.current?.value,
  //       str: streetRef.current?.value,
  //       numStr: houseNumRef.current?.value,
  //       status: teacherDetais?.value,
  //     }
  //   );
  //   console.log(data);
  // }

  // function updateTeacher() {
  //   dispatch(
  //     updateTeacherDetails({
  //       dateBirth: teacherDetais.dateBirth,
  //       lessonPlace: allCheckedPlace.value,
  //       aboutMe: detail.value,
  //     })
  //   );
  // }

  return (
    <>
      <div className="profil-wapper">
        <h3 className="title-profil">עמוד פרופיל מורה</h3>
        <div className="form">
          <form className="profil-details">
            {/* <div className="input-wapper">
              <input
                placeholder="הכנס שם משתמש"
                ref={userNameRef}
                type="text"
                id="name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                required
              />
            </div>
            <div className="input-wapper">
              <input
                placeholder="סיסמא"
                ref={passwordRef}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <div className="input-wapper">
              <input
                placeholder="אימייל"
                ref={mailRef}
                type="text"
                id="pone"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                required
              />
            </div>

            <div className="input-wapper">
              <input
                placeholder="טלפון"
                ref={phoneRef}
                type="text"
                id="pone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>

            <div className="address">
              <div className="input-wapper">
                <input
                  placeholder="עיר"
                  ref={cityRef}
                  type="text"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                />
              </div>
              <div className="input-wapper">
                <input
                  placeholder="רחוב"
                  ref={streetRef}
                  type="text"
                  id="street"
                  onChange={(e) => setStreet(e.target.value)}
                  value={street}
                  required
                />
              </div>
              <div className="input-wapper">
                <input
                  placeholder="מס' בית"
                  ref={houseNumRef}
                  type="text"
                  id="houseNum"
                  onChange={(e) => setHouseNum(e.target.value)}
                  value={houseNum}
                  required
                />
              </div>
            </div>

            <div className="studyInfo">
              <h3 className="title-register">פרטי השיעור</h3>
              <label htmlFor="detail">איזה מקצועות תרצה ללמד?</label>
              <br />
              <label htmlFor="detail">בחר:</label>
              <br />

              <div className="checkbox-wapper">
                {/* {category.map((item) => (
              <div className="checkbox">
                <label htmlFor="checkbox">
                  <input type="checkbox" id={item.name} onChange={handleChange1} />
                  {item.name}
                </label>
              </div>
            ))} 
              </div>

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
          <button onClick={()=>nav('/update_teacher')}>עדכן פרטי מורה</button>


            {/* <button className="btn-save1" onClick={updateUserfun}>
              עדכן פרטים אישיים
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(AccountTeacher);
