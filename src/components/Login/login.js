import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../contex/authProvider";
import "./login.css";
import axios from "axios";
import { addUser } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { dispatch } = props;
  const navigation = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [mail, setMail] = useState("");
  const [password, setpassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // const [succsess, setsuccess] = useState(false);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, password]);

  function insertToAccount() {
    axios
      .post(`http://localhost:3030/user/findUserByName`, {
        mail: mail,
        password: password,
      })
      .then((res) => {
        const currentUser = res.data;
        console.log(currentUser);
        dispatch(addUser(currentUser));

        if (res.data.status === "תלמיד") {
          navigation("/account_pupil");
        } else {
          navigation("/account_teacher");
        }
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  }

  return (
    <>
      <div className="login-wapper">
        <section>
          {/* <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {" "}
            {errMsg}
          </p> */}
          <div>
            <div>
              <h3>כניסה למשתמש רשום</h3>
            </div>

            <div className="text">
              <label htmlFor="username">מייל :</label>
              <input
                className="container"
                type="text"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                required
              />
              <br />
              <br />
              <label htmlFor="password">סיסמא:</label>
              <input
                className="container"
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                required
              />
              <br />
              <br />
              <button onClick={insertToAccount}>כניסה</button>
              <br /> <br />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default connect()(Login);
