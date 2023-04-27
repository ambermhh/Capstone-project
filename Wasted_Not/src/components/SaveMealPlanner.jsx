import { Button } from "@mui/material";
import React from "react";

export default function SaveMealPlanner() {
  const handleSaveClick = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/mealPlanners/create")
      .then((response) => {
        console.log(response);
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
        onSubmit={handleSaveClick}
        sx={{ fontSize: "26px", border: "2px solid black" }}
      >
        SAVE
      </Button>
    </div>
  );
}
