import React, { useState, useEffect } from "react";
import { Grid, Typography, Divider, Chip, styled } from "@mui/material";
import axios from "axios";

const RecipePageContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const RecipeTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const RecipeSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const RecipeImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
}));

const RecipeChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

function RecipePage(props) {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${props.params.id}/information?apiKey=3d07bc950c674ff29ba53968dc2d44e5`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipe();
  }, [props.match]);
  
  return (
    <RecipePageContainer container spacing={4}>
      <Grid item xs={12}>
        <RecipeTitle variant="h3">{recipe.title}</RecipeTitle>
        <RecipeSubtitle variant="subtitle1">
          Servings: {recipe.servings}
        </RecipeSubtitle>
        <RecipeSubtitle variant="subtitle1">
          Cuisines: {recipe.cuisines && recipe.cuisines.join(", ")}
        </RecipeSubtitle>
        <RecipeSubtitle variant="subtitle1">
          Dish Types:{" "}
          {recipe.dishTypes &&
            recipe.dishTypes.map((type) => (
              <RecipeChip
                key={type}
                label={type}
                variant="outlined"
              />
            ))}
        </RecipeSubtitle>
        <RecipeSubtitle variant="subtitle1">
          Diet:{" "}
          {recipe.diets &&
            recipe.diets.map((diet) => (
              <RecipeChip
                key={diet}
                label={diet}
                variant="outlined"
              />
            ))}
        </RecipeSubtitle>
      </Grid>
      <Grid item xs={12} sm={6}>
        <RecipeImage src={recipe.image} alt={recipe.title} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <RecipeTitle variant="h4">Ingredients:</RecipeTitle>
        <ul>
          {recipe.extendedIngredients &&
            recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.name}>{ingredient.originalString}</li>
            ))}
        </ul>
        <Divider />
        <RecipeTitle variant="h4">Instructions:</RecipeTitle>
        <ol>
          {recipe.analyzedInstructions &&
            recipe.analyzedInstructions.map((instruction) =>
              instruction.steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
        </ol>
      </Grid>
    </RecipePageContainer>
  );
}

export default RecipePage;
