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
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import axios from "axios";

const Cards = styled(Card)({
  padding: 50,
  display: "flex",
});

export default function RecipesPost() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(0);
  const [like, setLike] = React.useState([]);
  const [recipes, setRecipes] = React.useState([]);
  const userData = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/recipes/${userData._id}`)
      .then((response) => {
        console.log(response);

        setRecipes(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLike = () => {};

  return (
    <Cards sx={{width:"100%"}}>
      <Grid container gap={3} >
        {recipes.map((recipe) => (
          <Grid item key={recipe.id}>
            <Card sx={{ maxWidth: 345, border:'2px solid black', boxShadow:'5px 5px 10px green' }}>
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
                      {expanded === recipe.id ? "Read less" : "Read more"}
                    </Button>
                  )}
                </Typography>
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
                 <AddCommentOutlinedIcon/>
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
