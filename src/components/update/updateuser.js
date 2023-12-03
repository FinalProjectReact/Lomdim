
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from "axios";
import ProfessionalDetails from "../Register/professionalDetails"

import { useNavigate } from "react-router-dom";
import {
  addUser,
  addTeacherDetails,
  setAllCategories,
}
from "../../redux/actions/action";

function mapStateToProps(state) {
  return {
    categories: state.category.category,
  };
}

function UpdateUser(props) {
  const [addCategoties, setAddCategories] = useState("");

  const { dispatch } = props;
  const navigation = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [typeUser, setTypeUser] = useState("");
  const [show, setShow] = useState(false);
  //teacher
  const [allCheckedStudy, setAllCheckedStudy] = useState("");
  const [allCheckedPlace, setAllCheckedPlace] = useState("");
  const [detail, setDetail] = useState("");
  const [yearBirth, setYearBirth] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [addSubCategories, setAddSubCategories] = useState([]);

  async function insertNewUser() {
    // personaldetails
    try {
      const user = await newUserAndTeacher();

      if (user.data && user.data.newUser) {
        dispatch(addUser(user.data.newUser));
        navigation("/account_pupil");
      } else {
        console.log("User data not available");
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function insertNewTeacher() {
    try {
      const user = await newUserAndTeacher();
  
      if (user.data && user.data.newUser) {
        const response = await axios.post(
          `http://localhost:7000/teacherData/newData`,
          {
            dateBirth: yearBirth,
            city: city,
            str: street,
            numStr: houseNum,
            lessonPlace: allCheckedPlace,
            aboutMe: detail,
            userId: user.data.newUser._id,
          }
        );
  
        if (response.data && response.data.newData) {
          console.log(response.data);
          dispatch(addUser(user.data.newUser));
          dispatch(addTeacherDetails(response.data.newData));
          navigation("/page_teacher");
        } else {
          console.log("Error: Teacher data not available");
        }
      } else {
        console.log("Error: User data not available");
      }
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
  

  async function newUserAndTeacher() {
    try {
      const response = await axios.post(`http://localhost:7000/user/newUser`, {
        userName: userName,
        password: password,
        phone: phone,
        mail: mail,
        gender: gender,
        status: typeUser,
      });

      console.log(response.data);
      return { data: response.data };
    } catch (err) {
      console.error(err);
      return { message: err };
    }
  }
  function add_category() {
    if (addCategoties.trim().length === 0) return alert("הזן תחום לימוד!");
    console.log(addCategoties);
    axios
      .post(`http://localhost:7000/Category/newCategory`, {
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
      });}

  return(
    
    <div className="register-wapper">
    <h3 className="title-register">הרשמה מורה/תלמיד</h3>
    <div className="register-details">
      <div className="input-wapper">
        <input
          placeholder="הכנס שם משתמש"
          type="text"
          id="name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          autoComplete="off"
          required
        />
      </div>
      <div className="input-wapper">
        <input
          placeholder="סיסמא"
          type="password"
          id="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>

      <div className="input-wapper">
        <input
          placeholder="אימייל"
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
          type="text"
          id="pone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
      </div>

      <div className="btn-group">
        <input
          type="radio"
          class="btn-check"
          value="זכר"
          checked={gender === "זכר"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label class="btn btn-secondary" for="option1">
          זכר
        </label>
        <input
          type="radio"
          class="btn-check"
          value="נקבה"
          checked={gender === "נקבה"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label class="btn btn-secondary" for="option2">
          נקבה
        </label>
      </div>

      <h4> בחר בתור מי את/ה נרשם?</h4>
      <div className="btn-group">
        <input
          type="radio"
          class="btn-check"
          value="מורה"
          checked={typeUser === "מורה"}
          onChange={(e) => {
            setTypeUser(e.target.value);
            setShow(true);
          }}
          required
        />
        <label class="btn btn-secondary" for="option1">
          מורה
        </label>
        <input
          type="radio"
          class="btn-check"
          value="תלמיד"
          checked={typeUser === "תלמיד"}
          onChange={(e) => {
            setTypeUser(e.target.value);
            setShow(false);
          }}
        />
        <label class="btn btn-secondary" for="option2">
          תלמיד
        </label>
      </div>
    </div>

    {!show ? (
      <button class="btn-save1" onClick={insertNewUser}>
        שמור והמשך
      </button>
    ) : (
      <ProfessionalDetails
        setHouseNum={setHouseNum}
        setStreet={setStreet}
        setCity={setCity}
        setYearBirth={setYearBirth}
        setDetail={setDetail}
        allCheckedStudy={allCheckedStudy}
        allCheckedPlace={allCheckedPlace}
        setAllCheckedPlace={setAllCheckedPlace}
        setAllCheckedStudy={setAllCheckedStudy}
        setAddCategories={setAddCategories}
        // setAddSubCategories={setAddSubCategories}
        addNewTeacher={insertNewTeacher}
        addCategory={add_category}
      />
    )}
         </div>
   
  );
}
export default connect(mapStateToProps)(UpdateUser );

    
  


    



{/* export default updateuser; */}