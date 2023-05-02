import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import SaveMealPlanner from "./SaveMealPlanner";

function MealPlanner(props) {
  const savedMeals =
    props.saveMeal && props.saveMeal.length === 0
      ? [
          { name: "Breakfast", recipe: "" },
          { name: "Lunch", recipe: "" },
          { name: "Dinner", recipe: "" },
        ]
      : props.saveMeal;
  const [meals, setMeals] = useState(savedMeals);

  const handleMealChange = (index, inputname, inputvalue) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal, i) =>
        i !== index ? meal : { ...meal, [inputname]: inputvalue }
      )
    );
    console.log(index, inputname, inputvalue);
  };

  const handleAddMeal = () => {
    setMeals((prevMeals) => [...prevMeals, { name: "", recipe: "" }]);
  };

  const handleRemoveMeal = (index) => {
    setMeals((prevMeals) => prevMeals.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {meals.map((meal, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 2 }}>
                <TextField
                  label="Meal Name"
                  value={meal.name}
                  onChange={(e) =>
                    handleMealChange(index, "name", e.target.value)
                  }
                  fullWidth
                />
                <Box sx={{ mt: 2 }}>
                  <TextField
                    label="Recipe"
                    value={meal.recipe}
                    onChange={(e) =>
                      handleMealChange(index, "recipe", e.target.value)
                    }
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <IconButton
                    aria-label="Delete Meal"
                    onClick={() => handleRemoveMeal(index)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
              <Button
                startIcon={<Add />}
                variant="contained"
                color="primary"
                onClick={handleAddMeal}
              >
                Add Meal
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ float: "right" }}>
        <SaveMealPlanner meals={meals} dayIndex={props.dayIndex} />
      </Box>
    </div>
  );
}

export default MealPlanner;
