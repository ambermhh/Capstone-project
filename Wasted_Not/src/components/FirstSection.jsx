import * as React from "react";
import {
  styled,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Cards = styled(Card)({
  padding: 50,
  display: "flex",
});

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState(false);

  const hangleLike = () => {
    setLike(!like);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Cards>
      <Grid container>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar color="fun" aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="GAZPACHO"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="../food-pic/Gazpacho.png"
              alt="GAZPACHO"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Gazpacho is a refreshing summer soup that originates from Spain.
                It's made with fresh, raw vegetables like tomatoes, cucumber,
                and bell peppers. Gazpacho is a great dish to make zero waste
                because it's made entirely with plant-based ingredients that are
                commonly found at farmers markets or in your own garden.{" "}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={hangleLike}>
                {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>

                <Typography paragraph>
                  1. Begin by washing and chopping the zucchini, green peppers,
                  onion, and cucumber into small pieces.
                  <br />
                  2. Add the chopped vegetables to a blender along with the
                  juice from half a lemon, the yogurt, a handful of basil
                  leaves, and a small bouquet of fresh thyme. <br />
                  3. Pour in the olive oil and water, then season with salt and
                  pepper to taste.
                  <br />
                  4. Blend all the ingredients together until smooth and creamy.{" "}
                  <br />
                  5. Pour the gazpacho into a large bowl and chill it in the
                  refrigerator for at least 30 minutes.
                  <br />
                  6. While the gazpacho is chilling, crack open the fresh
                  coconut and scoop out the flesh using a spoon. Cut the flesh
                  into small pieces. <br />
                  7. Serve the gazpacho in bowls or glasses, and top each
                  serving with the fresh coconut pieces. <br />
                  8. Garnish with extra basil leaves and a drizzle of olive oil,
                  if desired.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar color="fun" aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="GAZPACHO"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="../food-pic/Gazpacho.png"
              alt="GAZPACHO"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Gazpacho is a refreshing summer soup that originates from Spain.
                It's made with fresh, raw vegetables like tomatoes, cucumber,
                and bell peppers. Gazpacho is a great dish to make zero waste
                because it's made entirely with plant-based ingredients that are
                commonly found at farmers markets or in your own garden.{" "}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={hangleLike}>
                {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>

                <Typography paragraph>
                  1. Begin by washing and chopping the zucchini, green peppers,
                  onion, and cucumber into small pieces.
                  <br />
                  2. Add the chopped vegetables to a blender along with the
                  juice from half a lemon, the yogurt, a handful of basil
                  leaves, and a small bouquet of fresh thyme. <br />
                  3. Pour in the olive oil and water, then season with salt and
                  pepper to taste.
                  <br />
                  4. Blend all the ingredients together until smooth and creamy.{" "}
                  <br />
                  5. Pour the gazpacho into a large bowl and chill it in the
                  refrigerator for at least 30 minutes.
                  <br />
                  6. While the gazpacho is chilling, crack open the fresh
                  coconut and scoop out the flesh using a spoon. Cut the flesh
                  into small pieces. <br />
                  7. Serve the gazpacho in bowls or glasses, and top each
                  serving with the fresh coconut pieces. <br />
                  8. Garnish with extra basil leaves and a drizzle of olive oil,
                  if desired.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar color="fun" aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="GAZPACHO"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="../food-pic/Gazpacho.png"
              alt="GAZPACHO"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Gazpacho is a refreshing summer soup that originates from Spain.
                It's made with fresh, raw vegetables like tomatoes, cucumber,
                and bell peppers. Gazpacho is a great dish to make zero waste
                because it's made entirely with plant-based ingredients that are
                commonly found at farmers markets or in your own garden.{" "}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={hangleLike}>
                {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>

                <Typography paragraph>
                  1. Begin by washing and chopping the zucchini, green peppers,
                  onion, and cucumber into small pieces.
                  <br />
                  2. Add the chopped vegetables to a blender along with the
                  juice from half a lemon, the yogurt, a handful of basil
                  leaves, and a small bouquet of fresh thyme. <br />
                  3. Pour in the olive oil and water, then season with salt and
                  pepper to taste.
                  <br />
                  4. Blend all the ingredients together until smooth and creamy.{" "}
                  <br />
                  5. Pour the gazpacho into a large bowl and chill it in the
                  refrigerator for at least 30 minutes.
                  <br />
                  6. While the gazpacho is chilling, crack open the fresh
                  coconut and scoop out the flesh using a spoon. Cut the flesh
                  into small pieces. <br />
                  7. Serve the gazpacho in bowls or glasses, and top each
                  serving with the fresh coconut pieces. <br />
                  8. Garnish with extra basil leaves and a drizzle of olive oil,
                  if desired.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar color="fun" aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="GAZPACHO"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="../food-pic/Gazpacho.png"
              alt="GAZPACHO"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Gazpacho is a refreshing summer soup that originates from Spain.
                It's made with fresh, raw vegetables like tomatoes, cucumber,
                and bell peppers. Gazpacho is a great dish to make zero waste
                because it's made entirely with plant-based ingredients that are
                commonly found at farmers markets or in your own garden.{" "}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={hangleLike}>
                {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>

                <Typography paragraph>
                  1. Begin by washing and chopping the zucchini, green peppers,
                  onion, and cucumber into small pieces.
                  <br />
                  2. Add the chopped vegetables to a blender along with the
                  juice from half a lemon, the yogurt, a handful of basil
                  leaves, and a small bouquet of fresh thyme. <br />
                  3. Pour in the olive oil and water, then season with salt and
                  pepper to taste.
                  <br />
                  4. Blend all the ingredients together until smooth and creamy.{" "}
                  <br />
                  5. Pour the gazpacho into a large bowl and chill it in the
                  refrigerator for at least 30 minutes.
                  <br />
                  6. While the gazpacho is chilling, crack open the fresh
                  coconut and scoop out the flesh using a spoon. Cut the flesh
                  into small pieces. <br />
                  7. Serve the gazpacho in bowls or glasses, and top each
                  serving with the fresh coconut pieces. <br />
                  8. Garnish with extra basil leaves and a drizzle of olive oil,
                  if desired.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Cards>
  );
}
