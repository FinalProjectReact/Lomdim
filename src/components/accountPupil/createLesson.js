import React, { useEffect, useState } from "react";
import "./accountPupil.css";
import { connect } from "react-redux";
import axios from "axios";
import {
  setAllCategories,
  setAllTeacher,
  setAllUsers,
} from "../../redux/actions/action";
import SelectedCity from "./listCities";
import { Modal, Button, Form, Collapse, ListGroup } from "react-bootstrap";

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

  const [selectedTeacherDetails, setSelectedTeacherDetails] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState("");

  //מידע נוסף
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (item) => {
    // Handle form submission logic here
    //הוספת שיעור לשרת
    // אם הבקשה תצליח, אז יש להפעיל את הפונקציה הזו
    await axios.post("http://localhost:8000/lesson/newLesson", {
      id_teacher: item._id,
      id_pupil: JSON.parse(localStorage.getItem("user"))._id,
      categories: [], // נשלח רשימת קטגוריות או משהו מתאים
      text: formValue,
    });

    console.log("Form submitted:", formValue);
    handleModalClose();
  };

  const handleFormChange = (event) => {
    setFormValue(event.target.value);
  };

  //כאשר עולה הדף יכנס לסטור כל הקטגוריות הנמצאות במסד נתונים
  useEffect(() => {
    axios
      //ייבוא כל נושאי הלימוד מהמסד נתונים
      .get(`http://localhost:8000/category/getAllCategories`)
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
        `http://localhost:8000/teacherData/getAllTeachers`
      );
      console.log(res.data);
      dispatch(setAllTeacher(res.data.getAllTeachers));
      // Set the filterTeacher state here
      setFilterTeacher(res.data.getAllTeachers);
      console.log(filterTeacher + "filter");
    } catch (error) {
      console.log(error);
    }
  };

  //זימון כתובת API לרשימת ערים בישראל
  const doApi = async () => {
    let url = `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1272`;
    let res = await axios.get(url);
    console.log(res.data.result.records);
    setCities(res.data.result.records);
  };

  function searchTeachers() {
    // debugger;
    const filteredTeachers = teachers.filter((teacher) => {
      return (
        teacher.city === selectedCity && teacher.categories.includes(selected)
      );
    });
    setFilterTeacher(filteredTeachers);
    setShowList(true);
  }

  return (
    <>
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
            </button>
          </div>
        </div>

        {showList ? (
          <div>
            {filterTeacher.map((item) => {
              //מכיל כרגע את כל ערכי אוביקט היוזר- foundUser זה השורה ששונתה
              const foundUser = item.userId;
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
                      <Button onClick={handleToggle} variant="primary">
                        למידע נוסף
                      </Button>
                      <Collapse in={isOpen}>
                        <div>
                          <p>
                            <strong>גיל:</strong> {2024 - item.dateBirth}
                          </p>
                          <p>
                            <strong>סטטוס:</strong>{" "}
                            {item.status ? "פעיל" : "פעיל"}
                          </p>

                          <p>
                            <strong>מקום הלימוד:</strong>
                            <ListGroup>
                              {item.lessonPlace.map((place, index) => (
                                <ListGroup.Item key={index}>
                                  {place}
                                </ListGroup.Item>
                              ))}
                            </ListGroup>
                          </p>
                          <p>
                            <strong>נושאי לימוד:</strong>
                            <ListGroup>
                              {item.categories.map((category, index) => (
                                <ListGroup.Item key={index}>
                                  {category}
                                </ListGroup.Item>
                              ))}
                            </ListGroup>
                          </p>
                          <Button onClick={handleModalOpen}>ליצירת פניה</Button>
                        </div>
                      </Collapse>

                      <Modal show={showModal} onHide={handleModalClose} style={{direction:"rtl"}}>
                        <Modal.Header closeButton>
                          <Modal.Title>פנייה חדשה </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group controlId="formInput">
                              <Form.Label>יש לך מה לומר למורה?</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter value"
                                onChange={handleFormChange}
                                value={formValue}
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleModalClose}
                          >
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => handleFormSubmit(item)}
                          >
                            לשליחה
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(CreateLesson);
