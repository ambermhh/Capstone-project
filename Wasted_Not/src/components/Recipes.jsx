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
import recipes from "./recipeCard.json"

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

export default function Recipes() {
  const [expanded, setExpanded] = React.useState(0);
  const [like, setLike] = React.useState([]);

  const hangleLike = () => {
   
  };

  const handleExpandClick = (id) => {
    const expandedId = id === expanded ? 0 : id;
   setExpanded(expandedId);
   console.log(expandedId, id)
  };

  return (
    
    <Cards>
      <Grid container sx={{margin:"2em"}}>
        {recipes.map(recipe => ( 
        <Grid item xs={3} key={recipe.id}> 
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar color="fun" aria-label="recipe">
                  {recipe.avatar}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={recipe.title}
              subheader={recipe.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={recipe.image}
              alt={recipe.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
               {recipe.description}
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
                expand={expanded === recipe.id}
                onClick={() => {console.log(recipe.id ); handleExpandClick(recipe.id)}}
                aria-expanded={expanded === recipe.id}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded === recipe.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>

                <Typography paragraph>
                  {recipe.method}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Cards>
  );
}
