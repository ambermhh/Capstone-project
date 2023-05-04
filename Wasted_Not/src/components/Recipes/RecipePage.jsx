import React, { useContext } from "react";
import { Grid, Typography, Divider, Chip, styled, Button } from "@mui/material";
import {RecipeSearchContext} from '../Context/RecipeSearchContext'
import {  Link } from "react-router-dom";

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

function RecipePage() {
  const { results } = useContext(RecipeSearchContext);
  return (
    <RecipePageContainer container spacing={4}>
      {results.map((recipe) => (
        <Grid item xs={12} sm={6}>
          <RecipeImage src={recipe.image} alt={recipe.title} />
          <RecipeTitle variant="h3">{recipe.title}</RecipeTitle>
          <RecipeSubtitle variant="subtitle1">
            Servings: {recipe.servings}
          </RecipeSubtitle>
          <RecipeSubtitle variant="subtitle1">
            Source: <Link  to={recipe.sourceUrl}>{recipe.sourceName}</Link> 
          </RecipeSubtitle>
          <RecipeSubtitle variant="subtitle1">
            Cuisines: {recipe.cuisines && recipe.cuisines.join(", ")}
          </RecipeSubtitle>
          <RecipeSubtitle variant="subtitle1">
            Dish Types:{" "}
            {recipe.dishTypes &&
              recipe.dishTypes.map((type) => (
                <RecipeChip key={type} label={type} variant="outlined" />
              ))}
          </RecipeSubtitle>
          <RecipeSubtitle variant="subtitle1">
            Diet:{" "}
            {recipe.diets &&
              recipe.diets.map((diet) => (
                <RecipeChip key={diet} label={diet} variant="outlined" />
              ))}
          </RecipeSubtitle>
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
      ))}
    </RecipePageContainer>
  );
}

export default RecipePage;
