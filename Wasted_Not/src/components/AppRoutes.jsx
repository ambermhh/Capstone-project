import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MealPlanner from './MealPlanner'
import Profile from './Profile'
import Recipes from './Recipes'

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path='/mealplanner' element={<MealPlanner/>}/>
      <Route path='/profile' element={<Profile />}/>
     <Route path='/recipes' element={<Recipes/>}/>
    </Routes>
  )
}