import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import "./accountPupil.css";
import CreateLesson from "./createLesson";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LessonHistory from "./lessonHistory";


function mapStateToProps(state) {
  return {
    // currentUser: state.user.currentUser,
    categories: state.category.category,
    currentUser: state.user.currentUser,

  };
}

function AccountPupil(props) {
  // const [page, setPage] = useState();
  const { categories, currentUser } = props;
  const navigation = useNavigate();
  const [user, setUser] = useState();

  //get current user
  useEffect(() => {
    setUser( JSON.parse(localStorage.getItem("user")));
   
  }, [])
  
  //logout
  const handleLogout = ()=>{
    localStorage.removeItem("loggedin")
    navigation("/");
  }

  const deleteFromAccount=async()=>{
    axios.delete(`http://localhost:8000/user/deleteUserById/`, { id:user.id})
      .then(response => {
        console.log('הבקשה DELETE הושלמה בהצלחה');
        console.log('תשובה מהשרת:', response.data);
      })
      .catch(error => {
        console.error('שגיאה בבצע בקשת DELETE:', error);
      });
  }

  
  const [tabKey, initTabKey] = useState("one");
  return (
    <>
     { user && <div className="wrapper-pupil">
        <br />
        <div className="row justify-content-between">
          <div className="col">
            <h2> שלום, {user.userName}</h2>
          </div>
          <div className="col-md-auto">
          <button
              type="button"
              class="btn btn-outline-primary btn"
              onClick={()=> navigation("/update_teacher")}
            >
              עדכון פרטים
            </button>
            </div>
          <div className="col-lg-2">
            <button
              type="button"
              class="btn btn-outline-danger btn"
              onClick={handleLogout}
            >
              התנתק
            </button>
          </div>
        </div>
        <br />
        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
          <Tab eventKey="one" title="חפש מורה">
          <CreateLesson categories={categories} />
         </Tab>
          <Tab eventKey="two" title="הפניות שלי">
           <p><LessonHistory/></p>  

          </Tab>
          <Tab eventKey="three" title="מחיקת חשבון" >
            {/* <p>Tab 3</p> */}
            <p>האם אתה בטוח שברצונך לבטל את חשבונך באתר?</p>
            <button className="btn btn-primary btn-rounded" type="button" onClick={deleteFromAccount} value="מחק את חשבוני"></button>
          </Tab>
        </Tabs>
      </div>}
      <br/>
    </>
  );
}

export default connect(mapStateToProps)(AccountPupil);
