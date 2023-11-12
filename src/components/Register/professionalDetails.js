import React, { useEffect, useState } from "react";
import "../Register/register.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import ModalCategories from "./modalCategories";

function mapStateToProps(state) {
  return {
    categories: state.category.category,
  };
}

function ProfessionalDetails(props) {
  const {
    categories,
    addNewTeacher,
    setHouseNum,
    setStreet,
    setCity,
    setYearBirth,
    setDetail,
    setAddCategories,
    // setAddSubCategories,
    addCategory,
    setAllCheckedPlace,
    allCheckedPlace,
    setAllCheckedStudy,
    allCheckedStudy,
  } = props;

  const years = [];
  for (let i = 1960; i < 2010; i++) {
    years.push(i);
  }

  function handleChange1(e) {
    if (e.target.checked) {
      setAllCheckedStudy([...allCheckedStudy, e.target.id]);
      setSubChecked(true);
      setSelectedCategory(e.target.id);
    } else {
      allCheckedStudy.filter((item) => item !== e.target.id);
      setSubChecked(false);
      setSelectedCategory(null);
    }
  }

  function handleChange3(e) {
    if (e.target.checked) {
      setAllCheckedPlace([...allCheckedPlace, e.target.value]);
    } else {
      setAllCheckedPlace(
        allCheckedPlace.filter((item) => item !== e.target.value)
      );
    }
  }

  const [subChecked, setSubChecked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [show, setShow] = useState(false);

  return (
    <div className="detail-wapper">
      <div className="personal-info">
        <h3 className="title-register">פרטים מקצועים</h3>

        <label htmlFor="year">בחר שנת לידה:</label>
        <select
          id="year"
          name="year"
          onChange={(e) => setYearBirth(e.target.value)}
        >
          {years.map((option, index) => (
            <option key={index} id={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="address">
        <div className="input-wapper">
          <input
            placeholder="עיר"
            type="text"
            id="city"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="input-wapper">
          <input
            placeholder="רחוב"
            type="text"
            id="street"
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div className="input-wapper">
          <input
            placeholder="מס' בית"
            type="text"
            id="houseNum"
            onChange={(e) => setHouseNum(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="studyInfo">
        <h3 className="title-register">פרטי השיעור</h3>
        <label htmlFor="detail">איזה מקצועות תרצה ללמד?</label>
        <br />
        <label htmlFor="detail">בחר:</label>
        <br />

        <div className="checkbox-wapper">
          {categories && categories.length ? (
            categories.map((item, index) => (
              <div key={index} className="checkbox">
                <label htmlFor="checkbox">
                  <input
                    type="checkbox"
                    id={item.categoryName}
                    onChange={handleChange1}
                  />
                  {item.categoryName}
                </label>
                {/* {subChecked &&
                  selectedCategory === item.name &&
                  item.subCategory.map((subItem) => (
                    <div className="checkbox" key={subItem}>
                      <label htmlFor={subItem}>
                        <input
                          type="checkbox"
                          id={subItem}
                          onChange={handleChange1}
                        />
                        {subItem}
                      </label>
                    </div>
                  ))} */}
              </div>
            ))
          ) : (
            <>אין...</>
          )}
        </div>
        <div>
          <input
            id="newCategory"
            type="text"
            placeholder="הוסף תחום לימוד"
            onChange={(e) => setAddCategories(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#2E59A7"
            className="bi bi-file-plus-fill"
            onClick={addCategory}
          >
            <path
              className="bi"
              d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"
            />
          </svg>
        </div>
        {/* <Button onClick={addCategory}>הוסף תחום לימוד</Button> */}
        {/* <Button variant="primary" onClick={(handleShow) => {setShow(true); <ModalCategories/>}}>
          הוסף תחום לימוד
        </Button> */}

        <br />

        <br />
        <div className="detail">
          <label className="text-detail">קצת עליי...</label>
          <div className="textarea">
            <textarea
              rows="5"
              id="input-detail"
              name="text"
              placeholder="תיאור כללי, מומלץ לכתוב באופן חופשי את מבנה השיעור, הניסיון שלך, גישת לימוד וכו'..."
              onChange={(e) => setDetail(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <br />
        <label htmlFor="detail">הגדרת מיקום השיעור:</label>
        <br />
        <div className="checkbox-wapper">
          <div className="checkbox">
            <input type="checkbox" id="inStudent" onChange={handleChange3} />
            <label htmlFor="checkbox">בבית התלמיד</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="inTeacher" onChange={handleChange3} />
            <label htmlFor="checkbox">בבית המורה</label>
          </div>
        </div>
      </div>

      <button onClick={addNewTeacher} className="btn-save1">
        שמור
      </button>
    </div>
  );
}

export default connect(mapStateToProps)(ProfessionalDetails);
