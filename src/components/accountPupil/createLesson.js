import React, { useEffect, useState } from "react";
import "./accountPupil.css";
import Map from "../maps/gMaps";
import { connect } from "react-redux";
import axios from "axios";
import {
  setAllCategories,
  setAllTeacher,
  setAllUsers,
} from "../../redux/action";
import SelectedCity from "./listCities";

function mapStateToProps(state) {
  return {
    categories: state.category.category,
    teachers: state.teacher.teacherDetails,
    user: state.user.allUsers,
  };
}

function CreateLesson(props) {
  const { categories, dispatch, teachers } = props;

  //משתנים
  const [selected, setSelected] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showList, setShowList] = useState(false);
  const [cities, setCities] = useState([]);
  const [filterTeacher, setFilterTeacher] = useState([]);
  // const [user,setUser]=useState([])
  const [selectedTeacher, setSelectedTeacher] = useState();
  //כאשר עולה הדף יכנס לסטור כל הקטגוריות הנמצאות במסד נתונים
  useEffect(() => {
    axios
      //ייבוא כל נושאי הלימוד מהמסד נתונים
      .get(`http://localhost:3030/category/getAllCategories`)
      .then((res) => {
        console.log(res.data);
        dispatch(setAllCategories(res.data.getAllCategories));
      })
      .catch((err) => {
        console.log(err);
      });
    allTeachters();
    // allUsers();
    doApi();
  }, []);

  //ייבוא רשימת מורים מהמסד נתונים
  const allTeachters = async () => {
    try {
      let res = await axios.get(
        `http://localhost:3030/teacherData/getAllTeachers`
      );
      console.log(res.data);
      dispatch(setAllTeacher(res.data.getAllTeachers));
      // Set the filterTeacher state here
      setFilterTeacher(res.data.getAllTeachers);
    } catch (error) {
      console.log(error);
    }
  };

  //ייבוא רשימת כל המשתמשים מהמסד נתונים
  // const allUsers = async () => {
  //   try {
  //     let res = await axios.get(`http://localhost:3030/user/getAllUsers`);
  //     console.log(res.data);
  //     dispatch(setAllUsers(res.data.getAllUsers));
  //     setUser(res.data.getAllUsers)
  //     // Set the filterTeacher state here
  //     //setFilterTeacher(res.data.getAllTeachers);
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // };

  //זימון כתובת API לרשימת ערים בישראל
  const doApi = async () => {
    let url = `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1272`;
    let res = await axios.get(url);
    console.log(res.data.result.records);
    setCities(res.data.result.records);
  };

  function searchTeachers() {
    const filteredTeachers = teachers.filter((teacher) => {
      return teacher.city === selectedCity && teacher.categories.includes(selected);
    });
    setFilterTeacher(filteredTeachers);
    setShowList(true);
  }

  return (
    <>
      {/* <h3>מיד נמצא לך את המורה הכי טוב!</h3> */}
      {/* <h4>בחר תחום לימוד מהרשימה הבאה:</h4> */}
      <div className="container">
        <div className="d-flex bd-highlight">
          <div className="p-2 bd-highlight">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="בחר נושא לימוד.."
                onChange={(e) => setSelected(e.target.value)}
                list="list-categories"
                id="input-datalist"
              ></input>
              <datalist id="list-categories">
                {categories &&
                  categories.length &&
                  categories.map((item) => (
                    <option>{item.categoryName}</option>
                  ))}
              </datalist>
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="בחר עיר.."
                onChange={(e) => setSelectedCity(e.target.value)}
                list="list-cities"
                id="input-datalist"
              ></input>
              <datalist id="list-cities">
                {cities &&
                  cities.length &&
                  cities.map((item) => <option>{item.שם_ישוב}</option>)}
              </datalist>
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <button
              onClick={searchTeachers}
              className="btn btn-primary btn-rounded"
            >
              חפש
              <i className="fas fa-search"></i>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg> */}
            </button>
          </div>
        </div>

        {showList ? (
          <div>
            {filterTeacher.map((item) =>  {
              //מכיל כרגע את כל ערכי אוביקט היוזר- foundUser זה השורה ששונתה
              const foundUser = item.userId
              return (
                <React.Fragment key={foundUser.userName}>
                {console.log(item)}
                  <div className="card">
                    <h5 className="card-header">
                      {foundUser ? foundUser.userName : "User not found"}
                    </h5>
                    <div className="card-body">
                      <h5 className="card-title">{item.city}</h5>
                      <p className="card-text">{item.aboutMe}</p>
                      <a href="#!" className="btn btn-primary">
                        למידע נוסף
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}

            {/* { filterTeacher.map((item) => (
              <React.Fragment key={item.city}>
              <div className="card">
                <h5 className="card-header">{foundUser ? foundUser.userName : "User not found"}</h5>
                <div className="card-body">
                  <h5 className="card-title">{item.city}</h5>
                  <p className="card-text">{item.aboutMe}</p>
                  <a href="#!" className="btn btn-primary">
                    למידע נוסף
                  </a>
                </div>
                </div>
              </React.Fragment>
            ))} */}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(CreateLesson);
