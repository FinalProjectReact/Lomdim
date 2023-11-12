import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./accountPupil.css";
import Map from "../maps/gMaps";
import { connect } from "react-redux";
import axios from "axios";
import { setAllCategories, setAllTeacher } from "../../redux/actions/action";

function mapStateToProps(state) {
  return {
    categories: state.category.category,
  };
}

function CreateLesson(props) {
  const { categories, dispatch } = props;
  const [selected, setSelected] = useState("");

  //כאשר עולה הדף יכנס לסטור כל הקטגוריות בנמצאות במסד נתונים
  useEffect(() => {
    axios
      .get(`http://localhost:3030/category/getAllCategories`)
      .then((res) => {
        console.log(res.data);
        dispatch(setAllCategories(res.data.getAllCategories));
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  }, []);

  //מוביל לדף של רשימת מורים שעונים על דרישות המחפש
  function searchTeachet() {
    axios
      .get(`http://localhost:3030/teacherData/getAllTeachers`)
      .then((res) => {
        console.log(res.data);
        dispatch(setAllTeacher(res.data.getAllTeachers));

        //const filterTeacher = ()=>
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  }

  return (
    <>
      <div>
        <h3>מיד נמצא לך את המורה הכי טוב!</h3>
        <h4>בחר תחום לימוד מהרשימה הבאה:</h4>
        <div className="find-teacher">
          <div className="from-select">
            <Form.Select
              aria-label="רשימת נושאי לימוד"
              onChange={(e) => setSelected(e.target.value)}
            >
              {categories &&
                categories.length &&
                categories.map((item, index) => (
                  <option value={index}>{item.categoryName}</option>
                ))}
            </Form.Select>
          </div>
          <Map />
          <div className="button-search">
            <button onClick={searchTeachet}>
              חפש
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(CreateLesson);
