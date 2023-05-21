import React, { useEffect } from "react";
import {
  styled,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import axios from "axios";

const Cards = styled(Card)({
  display: "flex",
});

export default function RecipeFeed() {
  const [expanded, setExpanded] = React.useState(0);
  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/recipes")
      .then((response) => {
        setRecipes(
          response.data.data.map((recipe) => ({
            ...recipe,
            likes: false,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLike = (recipeId) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, liked: !recipe.liked } : recipe
      )
    );
  };

  return (
  
      <div className="recipe-feed">
        <Cards>
          <Grid container gap={2} sx={{justifyContent:'center'}}>
            {recipes.map((recipe) => (
              <Grid item key={recipe.id}>
                <Card
                  sx={{
                    maxWidth: "400px",
                    maxHeight: "500px",                    border: "2px solid black",
                    boxShadow: "5px 5px 10px green ",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        color="fun"
                        aria-label="recipe"
                        src={"http://localhost:8080" + recipe.profile_picture}
                        alt={recipe.username}
                      />
                    }
                    action={
                      <IconButton
                        aria-label="bookmark Bahamas Islands"
                        variant="plain, "
                        color="neutral"
                        size="sm"
                      >
                        <BookmarkAdd />
                      </IconButton>
                    }
                    title={recipe.username}
                    subheader={recipe.title}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src={"http://localhost:8080" + recipe.image}
                    alt={recipe.title}
                  />
                  <CardContent>
                    {expanded === recipe.id
                      ? recipe.description
                      : recipe.description.split(" ").slice(0, 20).join(" ")}
                    {recipe.description.split(" ").length > 20 && (
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() => setExpanded(recipe.id)}
                      >
                        {expanded === recipe.id ? "less" : "more..."}
                      </Button>
                    )}
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="add to favorites"
                      onClick={() => handleLike(recipe.id)}
                    >
                      {recipe.liked ? (
                        <FavoriteIcon color="error" />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                    <IconButton aria-label="share">
                      <AddCommentOutlinedIcon />
                    </IconButton>
                    {recipe.createdAt}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Cards>
      </div>
    
  );
}
