import { Button } from "@mui/material";
import React from "react";
import axios from "axios";

export default function SaveMealPlanner(props) {
  const userData = JSON.parse(localStorage.getItem("currentUser"));

  const handleSaveClick = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8080/api/mealPlanners/create/${userData._id}/${props.dayIndex}`,
        props.dayMeals
      )
      .then((response) => {
        console.log(response);
        props.updateDayMeals(props.dayIndex, props.dayMeals)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        type="submit"
        variant="contrained"
        onClick={handleSaveClick}
        sx={{ fontSize: "26px", border: "2px solid black" }}
      >
        SAVE
      </Button>
    </div>
  );
}
