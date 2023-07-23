import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Login from "../Login/login";
import Register from "../Register/register";
import Blog from "../blog/blog";
import ContactUs from "../contactUs/contactUs";
import About from "../about/about";
import PersonalDetails from "../Register/professionalDetails";
import HowToLearnEnglish from "../blog/items-blogs/howToLearnEnglish";
import AccountPupil from "../accountPupil/accountPupil";
import AccountTeacher from "../accountTeacher/accountTeacher";
import PageTeacher from "../pageTeacher/pageTeacher";

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
        <Route path="/account_teacher" element={<AccountTeacher />} />
        <Route path="/page_teacher" element={<PageTeacher />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
