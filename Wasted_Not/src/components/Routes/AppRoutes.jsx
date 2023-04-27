import React from "react";
import {  Routes, Route } from "react-router-dom";
import Profile from "../Profile";
import Recipes from "../Recipes";
import SignUpForm from "../SignUpForm";
import Weekdays from "../Weekdays";
import Home from "../Home";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/mealplanner" element={<Weekdays />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/signupform" element={<SignUpForm />} />
    </Routes>
  );
}
