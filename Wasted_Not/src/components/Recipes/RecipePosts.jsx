import * as React from "react";
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
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import recipes from "./recipeCard.json";
import { useNavigate } from "react-router-dom";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import RecipePage from "./RecipePage";

const Cards = styled(Card)({
  padding: 50,
  display: "flex",
});

export default function RecipesPost() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(0);
  const [like, setLike] = React.useState([]);

  const handleLike = () => {

  };

  return (
    <Cards>
      <Grid container sx={{ margin: "2em" }}>
        {recipes.map((recipe) => (
          <Grid item xs={3} key={recipe.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar color="fun" aria-label="recipe">
                    {recipe.avatar}
                  </Avatar>
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
                title={recipe.title}
                subheader={recipe.date}
              />
              <CardMedia
                Button
                onClick={() => navigate("/recipePage")}
                component="img"
                height="194"
                image={recipe.image}
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
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
     
          </Grid>
        ))}
      </Grid>
    </Cards>
  );
}
