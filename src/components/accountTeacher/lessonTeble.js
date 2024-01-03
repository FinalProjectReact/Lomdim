import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Table } from 'react-bootstrap';

const LessonTable = ({ userId }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/lesson/getAllLessons`);
        setLessons(response.data.getAllLessons);
      } catch (error) {
        console.error('Error fetching lessons:', error.message);
      }
    };

    fetchLessons();
  }, []);
  const handleStatusToggle = async (lessonId) => {
    try {
      // Update the local state optimistically
      setLessons((prevLessons) =>
        prevLessons.map((lesson) =>
          lesson._id === lessonId ? { ...lesson, status: !lesson.status } : lesson
        )
      );
  
      // Update the lesson status on the server
      const response = await axios.put(`http://localhost:8000/lesson/updateStatus`, {
        lessonId: lessonId,
        status: !lessons.find((lesson) => lesson._id === lessonId).status,
      });
  
      // Update the local state with the updated lesson from the server
      setLessons((prevLessons) =>
        prevLessons.map((lesson) =>
          lesson._id === lessonId ? { ...lesson, status: response.data.status } : lesson
        )
      );
    } catch (error) {
      console.error('Error updating lesson status:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>שיעור מספר</th>
            <th>שם התלמיד</th>
            <th>מין</th>
            <th>מספר טלפון </th>
            <th> כתובת מייל</th>
            <th>פניה של התלמיד</th>
            <th>סטטוס השיעור</th>
          </tr>
        </thead>
        <tbody>
          {lessons && lessons.map((lesson,index) => (
            <tr key={lesson._id}>
              <td>{index+1}</td>
              <td>{lesson.id_pupil?.userName}</td>
              {/* <td>{lesson.categories.map((category) => category.categoryId.categoryName).join(', ')}</td> */}
              <td>{lesson.id_pupil?.gender}</td>
              <td>{lesson.id_pupil?.phone}</td>
              <td>{lesson.id_pupil?.mail}</td>
              <td>{lesson.text}</td>
              <td>        
              <Form.Check
                  type="checkbox"
                  // label={lesson.status ? 'Completed' : 'Pending'}
                  checked={lesson.status}
                  onChange={() => handleStatusToggle(lesson._id)}
                /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonTable;