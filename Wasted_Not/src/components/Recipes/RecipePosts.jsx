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
  Typography,
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

export default function RecipesPost() {
  const [expanded, setExpanded] = React.useState(0);
  const [recipes, setRecipes] = React.useState([]);
  const userData = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/recipes/${userData._id}`)
      .then((response) => {
        console.log(response);
        setRecipes( response.data.data.map((recipe) => ({
          ...recipe,
          likes: false,
        })));
      })
      .catch((error) => console.log(error));

  }, [userData._id]);

  const handleLike = (recipeId) => {
    setRecipes((prevRecipes) =>
    prevRecipes.map((recipe) =>
      recipe.id === recipeId ? { ...recipe, liked: !recipe.liked } : recipe
    )
  );
      
  };


  return (
  <div className="recipe-post">
      <Cards >
        <Grid container  spacing={1} sx={{margin:"30px"}}>
          {recipes.map((recipe) => (
            <Grid item key={recipe.id}>
              <Card
                sx={{
                  maxWidth: "400px",
                  maxHeight: "500px",
                  border: "2px solid black",
                  boxShadow: "5px 5px 10px green",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      color="fun"
                      aria-label="recipe"
                      src={"http://localhost:8080" + userData.profile_picture}
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
                  title={userData.username}
                  subheader={recipe.title}
                />
                <CardMedia
                  component="img"
                  height="194"
                  src={"http://localhost:8080" + recipe.image}
                  alt={recipe.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {expanded === recipe.id
                      ? recipe.description
                      : recipe.description.split(" ").slice(0, 20).join(" ")}
                    {recipe.description.split(" ").length > 20 && (
                      <Button
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() => setExpanded(recipe.id)}
                      >
                        {expanded === recipe.id ? "Less" : "More"}
                      </Button>
                    )}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleLike(recipe.id)}
                  >
                    {recipe.liked ? (
                      <FavoriteIcon  color="error"  />
                    ) : (
                      <FavoriteBorderIcon  />
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
