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
import { useNavigate } from "react-router-dom";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import axios from "axios";

const Cards = styled(Card)({
  padding: 50,
  display: "flex",
});

export default function RecipeFeed() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(0);
  const [like, setLike] = React.useState([]);
  const [recipes, setRecipes] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/recipes")
      .then((response) => {
        setRecipes(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLike = (recipeId) => {
    setLike((prevLikes) =>
      prevLikes.includes(recipeId)
        ? prevLikes.filter((id) => id !== recipeId)
        : [...prevLikes, recipeId]
    );
  };

  return (
    <Cards>
      <Grid container gap={3}>
        {recipes.map((recipe) => (
          <Grid item  key={recipe.id}>
            <Card sx={{ maxWidth: 345 ,border:'2px solid black', boxShadow:'5px 5px 10px green ', }}>
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
                    {expanded === recipe.id ? "Read less" : "Read more"}
                  </Button>
                )}
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleLike}>
                  {like ? (
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
  );
}
