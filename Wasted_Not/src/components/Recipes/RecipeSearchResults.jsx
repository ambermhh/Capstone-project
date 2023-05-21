import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  styled,
} from "@mui/material";
import { RecipeSearchContext } from "../Context/RecipeSearchContext";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const RecipeChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function RecipeSearchResults() {
  const { results } = useContext(RecipeSearchContext);

  return (
    <div className="recipe-results">
      <Grid container spacing={2} sx={{ padding: 10 }}>
        <Typography sx={{ textAlign: "center", fontSize: 60 }}>
          RESULTS:
        </Typography>

        {results.map((recipe) => (
          <Grid item sx={12} sm={3}>
            <Card
              sx={{
                border: "3px solid black",
                boxShadow: "5px 5px 10px green",
              }}
            >
              <CardMedia
                component="img"
                alt={recipe.title}
                height="200"
                image={recipe.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography color="text.secondary">
                  Servings: {recipe.servings}
                </Typography>
                <Typography>
                  Source: <Link to={recipe.sourceUrl}>{recipe.sourceName}</Link>
                </Typography>
                <Typography>
                  Cuisines: {recipe.cuisines && recipe.cuisines.join(", ")}
                </Typography>
                <Typography>
                  Dish Types:
                  {recipe.dishTypes &&
                    recipe.dishTypes.map((type) => (
                      <RecipeChip key={type} label={type} variant="outlined" />
                    ))}
                </Typography>
                <Typography>
                  Diet:
                  {recipe.diets &&
                    recipe.diets.map((diet) => (
                      <RecipeChip key={diet} label={diet} variant="outlined" />
                    ))}
                </Typography>
                {/* <Typography>
              Ingredients:
                {recipe.extendedIngredients &&
                  recipe.extendedIngredients.map((ingredient) => (
                    <RecipeChip key={ingredient.name}>{ingredient.originalString}</RecipeChip>
                  ))}
            </Typography> */}
                {/* <Typography>
              Instructions:
              <ol>
            {recipe.analyzedInstructions &&
              recipe.analyzedInstructions.map((instruction) =>
                instruction.steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              )}
          </ol>
            </Typography> */}
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
