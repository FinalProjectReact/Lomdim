import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import "../Register/register.css";
import ProfessionalDetails from "./professionalDetails";
import {
  addUser,
  addTeacherDetails,
  setAllCategories,
} from "../../redux/actions/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function mapStateToProps(state) {
  return {
    categories: state.category.category,
  };
}

function Register(props) {
  const { dispatch, categories } = props;
  const navigation = useNavigate();

  //all
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [typeUser, setTypeUser] = useState("");
  const [show, setShow] = useState(false);
  const [click, setClick] = useState("");

  //teacher
  const [allCheckedStudy, setAllCheckedStudy] = useState([]);
  const [allCheckedPlace, setAllCheckedPlace] = useState([]);
  const [detail, setDetail] = useState("");
  const [yearBirth, setYearBirth] = useState("");
  const [city, setCity] = useState("");
  // const [street, setStreet] = useState("");
  // const [houseNum, setHouseNum] = useState("");
  const [addCategoties, setAddCategories] = useState("");
  const [addSubCategories, setAddSubCategories] = useState([]);

  async function newUserAndTeacher() {
    try {
      const { data } = await axios.post(`http://localhost:8000/user/newUser`, {
        userName: userName,
        password: password,
        phone: phone,
        mail: mail,
        gender: gender,
        status: typeUser,
      });
      console.log(data);
      //משתמש נוכחי נשמר באחסון של הדפדפן
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("loggedin", true);

      return { data: data };
    } catch (err) {
      console.error(err);
      return { message: err };
    }
  }

  function createUserSubmit() {
    if (click === "תלמיד") insertNewUser();
    else if (click === "מורה") insertNewTeacher();
    else console.log("button error");
  }

  async function insertNewUser() {
    console.log("enter function");
    try {
      navigation("/account_pupil");

      const user = await newUserAndTeacher();
      console.log("create user in server");

      if (user.data && user.data.newUser) {
        dispatch(addUser(user.data.newUser));
      } else {
        console.log("User data not available");
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function insertNewTeacher() {
    try {
      navigation("/page_teacher");

      let user = await newUserAndTeacher();
      user = user.data;

      if (user && user.newUser) {
        dispatch(addUser(user.newUser));
      } else {
        console.log("User data not available");
      }

      const { data } = await axios.post(
        `http://localhost:8000/teacherData/newData`,
        {
          dateBirth: yearBirth,
          city: city,
          // str: street,
          // numStr: houseNum,
          lessonPlace: allCheckedPlace,
          aboutMe: detail,
          userId: user["_id"],
          categories: allCheckedStudy,
        }
      );
      if (data && data.newData) {
        console.log(data);
        dispatch(addUser(user.data.newUser));
        dispatch(addTeacherDetails(data.newData));
      } else {
        console.log("Error: Teacher data not available");
      }

      // } else {
      //   console.log("Error: User data not available");
      // }
    } catch (err) {
      if (err.response) {
        console.error("Server responded with an error:", err.response.data);
      } else if (err.request) {
        console.error("Request made, but no response received:", err.request);
      } else {
        console.error("Error occurred while making the request:", err.message);
      }
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/category/getAllCategories`)
      .then((res) => {
        console.log(res.data);
        dispatch(setAllCategories(res.data.getAllCategories));
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  }, []);

  function add_category() {
    if (addCategoties.trim().length === 0) return alert("הזן תחום לימוד!");
    console.log(addCategoties);
    axios
      .post(`http://localhost:8000/Category/newCategory`, {
        categoryName: addCategoties,
        subCategoty: addSubCategories,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setAllCategories(res.data.getAllCategories));
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  }

  return (
    <>
      <section className="h-100 h-custom gradient-custom-2">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2 shadow"
                style={{
                  borderRadius: "15px",
                  border: "white",
                  background: " white",
                }}
              >
                <div className="card-body p-0">
                  <form
                    className="needs-validation"
                    novalidate
                    onSubmit={createUserSubmit}
                  >
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <p className="display-6">הרשמה</p>

                        <div className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                placeholder="הכנס את שמך"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="הכנס א-מייל"
                                onChange={(e) => setMail(e.target.value)}
                                value={mail}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                placeholder="בחר סיסמא"
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example4cd"
                                class="form-control"
                                placeholder="הכנס טלפון"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6 mb-4">
                            <h6 class="font-weight-light">מגדר: </h6>

                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="femaleGender"
                                value="נקבה"
                                checked={gender === "נקבה"}
                                onChange={(e) => setGender(e.target.value)}
                              />
                              <label
                                class="form-check-label"
                                for="femaleGender"
                              >
                                נקבה
                              </label>
                            </div>

                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="maleGender"
                                value="זכר"
                                checked={gender === "זכר"}
                                onChange={(e) => setGender(e.target.value)}
                              />
                              <label class="form-check-label" for="maleGender">
                                זכר
                              </label>
                            </div>
                          </div>

                          <div className="row">
                            <div class="col-12">
                              <p>בתור מי אתה נרשם?</p>
                              <select
                                class="select form-control"
                                aria-label=".form-control example"
                                onChange={(e) => {
                                  setTypeUser(e.target.value);
                                  if (e.target.value === "מורה") {
                                    setShow(true);
                                  } else {
                                    setShow(false);
                                  }
                                }}
                              >
                                <option value="disabled" selected>
                                  בחר..
                                </option>
                                <option value="תלמיד">תלמיד</option>
                                <option value="מורה">מורה</option>
                              </select>
                            </div>
                          </div>
                          <br />

                          {!show ? (
                            <div className="d-grid gap-2 ">
                              <button
                                type="submit"
                                className="btn btn-primary btn"
                                onClick={() => setClick("תלמיד")}
                              >
                                הרשמה
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {show ? (
                        <ProfessionalDetails
                          // setHouseNum={setHouseNum}
                          // setStreet={setStreet}
                          setCity={setCity}
                          setYearBirth={setYearBirth}
                          setDetail={setDetail}
                          allCheckedStudy={allCheckedStudy}
                          allCheckedPlace={allCheckedPlace}
                          setAllCheckedPlace={setAllCheckedPlace}
                          setAllCheckedStudy={setAllCheckedStudy}
                          setAddCategories={setAddCategories}
                          // setAddSubCategories={setAddSubCategories}
                          // addNewTeacher={insertNewTeacher}
                          addCategory={add_category}
                          categories={categories}
                          setClick={setClick}
                        />
                      ) : (
                        <div class="col-md-10 col-lg-6 d-flex align-items-end order-1 order-lg-2 bg-green text-white">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default connect(mapStateToProps)(Register);
