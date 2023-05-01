import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile";
import SignUpForm from "../Header/SignUpForm";
import Home from "../Home";
import AboutUs from "../Footers/AboutUs";
import TermOfService from "../Footers/TermOfService";
import Privacy from "../Footers/Privacy";
import Weekdays from "../mealplan/Weekdays";
import RecipePage from "../Recipes/RecipePage";
import RecipePosts from "../Recipes/RecipePosts";


export default function AppRoutes(props) {

  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mealplanner" element={<Weekdays />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipePosts" element={<RecipePosts />} />
        <Route path="/signupform" element={<SignUpForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termofservice" element={<TermOfService />} />
        <Route path="/recipePage" element={<RecipePage />} />
      </Routes>
  );
}
