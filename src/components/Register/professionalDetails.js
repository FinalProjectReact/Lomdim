import React, { useEffect, useState } from "react";
import "../Register/register.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import ModalCategories from "./modalCategories";

function mapStateToProps(state) {
  return {};
}

function ProfessionalDetails(props) {
  const {
    categories,
    setClick,
    // addNewTeacher,
    // setHouseNum,
    // setStreet,
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

  function categoryHandleChange(e) {
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

  function placeHandleChange(e) {
    if (e.target.checked) {
      setAllCheckedPlace([...allCheckedPlace, e.target.id]);
    } else {
      setAllCheckedPlace(
        allCheckedPlace.filter((item) => item !== e.target.id)
      );
    }
  }

  const [subChecked, setSubChecked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [show, setShow] = useState(false);

  return (
    <div className="col-lg-6 text-right">
      <p className="display-6">פרטי לימוד</p>
      <div className="mx-1 mx-md-4">
        <div className="row">
          <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
            <div className="form-outline flex-fill mb-0">
              <input
                type="text"
                id="form3Example1c"
                class="form-control"
                placeholder=" הזן עיר מגורים "
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>

          <div class="col-md-5">
            <select
              class="select form-control"
              aria-label=".form-control example"
              onChange={(e) => setYearBirth(e.target.value)}
            >
              <option selected>בחר שנת לידה..</option>
              {years.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>

        </div>
        <br />

        <div className="col-md mb-4">
          <h6 class="font-weight-light">בחר תחומי לימוד: </h6>
          {categories && categories.length ? (
            categories.map((item, index) => (
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value={item.categoryName}
                  onChange={categoryHandleChange}
                />
                <label className="form-check-label" for="inlineCheckbox1">
                  {item.categoryName}
                </label>
              </div>
            ))
          ) : (
            <>אין...</>
          )}
        </div>

        <div className="input-group mb-2" style={{ direction: "ltr" }}>
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={addCategory}
            >
              +
            </button>
          </div>
          <input
            style={{ direction: "rtl" }}
            type="text"
            class="form-control"
            placeholder="הוסף תחום לימוד"
            aria-describedby="basic-addon1"
            onChange={(e) => setAddCategories(e.target.value)}
          />
        </div>

        <br />
        <div className="col-md mb-4">
          <h6 class="font-weight-light">בחר מיקום לימוד: </h6>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="בבית התלמיד"
              onChange={placeHandleChange}
            />
            <label className="form-check-label" for="inlineCheckbox1">
              בבית התלמיד
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="בבית המורה"
              onChange={placeHandleChange}
            />
            <label className="form-check-label" for="inlineCheckbox1">
              בבית המורה
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="אחר "
              onChange={placeHandleChange}
            />
            <label className="form-check-label" for="inlineCheckbox1">
              אחר
            </label>
          </div>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            placeholder="תאור מפורט"
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
          <label for="floatingTextarea2" style={{ direction: "rtl" }}>
            קצת עליי
          </label>
        </div>

        <br />
        <div className="d-grid gap-2 ">
          <button
            type="submit"
            className="btn btn-primary btn"
            onClick={() => setClick("מורה")}
          >
            הרשמה
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ProfessionalDetails);
