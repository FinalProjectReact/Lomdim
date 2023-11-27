import React from "react";
import "./pageTeacher.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    teacherDetails: state.teacher.teacherDetails,
  };
}

function messageForTeacher(props) {
  const { teacherDetails, currentUser } = props;
  const nav = useNavigate();

  
save=()=>{
// לשלוח את הנתונים שהמשתמש הזין לרידקס
 }
  return (
    <>
      <div className="page-teacher">
<form onSubmit={save}>
  שם הפניה  <input type="text"></input>
    טקסט חופשי<input type="text"></input>
    <input type="text"></input>
    <input type="submit"></input>

    </form>      </div>
    </>
  );
}

export default connect(mapStateToProps)(messageForTeacher);
