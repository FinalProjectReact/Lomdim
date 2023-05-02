import React from "react";
import { users } from "./listTeachers";
import { useState } from "react";
// import {useNavigate} from "./login";


const [data, setdata] = useState({
  uname: "",
  id: "",
  birthday: "",
  email: "",
  password: "",
  passwordOK: "",
  checkbox: true,
});
