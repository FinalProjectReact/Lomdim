import React, { useState, useEffect, useContext } from "react";
// import AuthContext from "../contex/authProvider";
import "./login.css";
import axios from "axios";
import { addUser } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { dispatch } = props;
  const navigation = useNavigate();
  // const { setAuth } = useContext(AuthContext);

  const [mail, setMail] = useState("");
  const [password, setpassword] = useState("");

  async function insertToAccount(e) {
    //debugger
    e.preventDefault()
    console.log("נכנס לפונקציה");
    try{
      const { data } = await axios.post(
        `http://localhost:8000/user/findUserByName`, {
          mail: mail,
          password: password,
        })
        console.log(data);
        if (data) {
          
          //insert cerrent user to browser
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("loggedin", true);


          if (data.user.status === "תלמיד") {
          navigation("/account_pupil");
        } else {
          navigation("/account_teacher");
        }
      }
    } catch(err) {
        alert("א-מייל או סיסמא שגויים!\n נסה שנית");
        console.log(err);
      }

  }

  return (
    <>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <h1 class="display-5">כניסה לחשבון שלך</h1>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={insertToAccount}>
                <div class="form-outline mb-3">
                  <input
                    type="email"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter email address"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    required
                  />
                </div>

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    style={{
                      "padding-left": "2.5rem",
                      "padding-right": "2.5rem",
                    }}
                  >
                    כניסה
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    אין לך עדיין חשבון?{" "}
                    <a href="/register" class="link-danger">
                      הרשמה
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default connect()(Login);
