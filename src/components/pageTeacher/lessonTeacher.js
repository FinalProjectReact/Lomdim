

import React, { useRef, useState } from "react";
//import "./accountTeacher.css";
import { connect, useSelector } from "react-redux";
import { updateTeacherDetails, updateUser } from "../../redux/actions/action";
import axios from "axios";

function mapStateToProps(state) {
    return {
      category: state.category,
      teacherDetais: state.teacherDetais,
      user: state.user,
    };
  }
function LessonTeacher(props) {
}
export default connect(mapStateToProps)(LessonTeacher);
