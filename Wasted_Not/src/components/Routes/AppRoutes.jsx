import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile";
import SignUpForm from "../Header/SignUpForm";
import Home from "../Home";
import AboutUs from "../Footers/AboutUs";
import TermOfService from "../Footers/TermOfService";
import Privacy from "../Footers/Privacy";
import Weekdays from "../MealPlan/Weekdays";
import RecipePosts from "../Recipes/RecipePosts";
import RecipeFeed from "../Recipes/RecipeFeed";
import RecipeSearchResults from "../Recipes/RecipeSearchResults";

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
        <Route path="/recipeSearchResults" element={<RecipeSearchResults />} />
        <Route path="/recipeFeed" element={<RecipeFeed/>} />
      </Routes>
  );
}
