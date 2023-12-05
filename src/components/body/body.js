import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Login from "../Login/login";
import Register from "../Register/register";
import Blog from "../blog/blog";
import UpdateUser from "../update/updateuser";
import About from "../about/about";
import PersonalDetails from "../Register/professionalDetails";
import HowToLearnEnglish from "../blog/items-blogs/howToLearnEnglish";
import AccountPupil from "../accountPupil/accountPupil";
import AccountTeacher from "../accountTeacher/accountTeacher";
import PageTeacher from "../pageTeacher/pageTeacher";
import ContactUs from "../ContactUs/ContactUs";

import UpdateTeacher from "../pageTeacher/updateTeacher";
import LessonTeacher from "../pageTeacher/lessonTeacher";
import LessonTable from "../pageTeacher/lessonTeble";

export default function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/howToLearnEnglish" element={<HowToLearnEnglish />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal_details" element={<PersonalDetails />} />
        <Route path="/account_pupil" element={<AccountPupil />} />
        <Route path="/account_teacher" element={<PageTeacher />} />
        <Route path="/page_teacher" element={<PageTeacher/>} />
        <Route path="/update_teacher" element={<UpdateTeacher />} />

        <Route path="/about" element={<About />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/lesson_teacher" element={<LessonTeacher />} />
        <Route path="/lesson_table_techer" element={<LessonTable />} />

      </Routes>
    </>
  );
}