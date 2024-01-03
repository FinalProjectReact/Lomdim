import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setAllLessons } from "../../redux/actions/action";

// Assuming you have a helper function to get the teacher's name and city
// Replace this with your actual implementation
const getTeacherDetails = (teacherId, teachers) => {
  const teacher = teachers.find((t) => t.id === teacherId);
  return teacher ? `${teacher.name}, ${teacher.city}` : "";
};

function mapStateToProps(state) {
  return {
    lessons: state.lesson.lesson,
    currentUser: state.user.currentUser,
    // teachers: state.teachers.teachers, // Assuming you have a teachers reducer
  };
}

function LessonHistory(props) {

  const { lessons, currentUser, teachers } = props;
  const [confirm, setConfirm] = useState(true);
  const dispatch = useDispatch();
  const [lessons2, setlessons2] = useState([]);

  useEffect(() => {
    const getData =  async () => {
   await   axios
        .get(`http://localhost:8000/lesson/getAllLessons`)
        .then((res) => {
          console.log(res.data);
          setlessons2(res.data.getAllLessons)
  
          dispatch(setAllLessons(res.data.getAllLessons));
        })
        .catch((err) => {
          alert("error");
          console.log(err);
        });

    }
    getData()
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>מורה</th>
            <th>פלאפון</th>
            <th>מייל</th>

            <th>קטגוריה</th>
            <th>סטטוס</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lessons2.length  ? (
            lessons2.map((item, index) => (
              <tr key={index}>
            {  console.log(item)}
                <td>{item.id_teacher?.userName}</td>
                <td>{item.id_teacher?.phone}</td>
                <td>{item.id_teacher?.mail}</td>

                <td>
                  {item.categories.map((category) => (
                    <span key={category.categoryId}>{category.categoryId}</span>
                  ))}
                </td>
                <td>{item.status ? "Pressed" : "Not Pressed"}</td>
                <td>
                  <button className="btn btn-danger">
                    {/* Add your delete logic here */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      {/* Your trash icon paths */}
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No lessons found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default connect(mapStateToProps)(LessonHistory);