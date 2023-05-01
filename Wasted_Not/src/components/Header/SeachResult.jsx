import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const SearchResults = ({ results }) => {
  return (
    <>
      {results.map((recipe) => (
        <Card key={recipe.id} sx={{ maxWidth: 345 }}>
          <CardHeader
            title={recipe.title}
          />
          <CardMedia
            component="img"
            height="194"
            image={recipe.image}
            alt={recipe.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {recipe.summary}
            </Typography>
            {recipe.analyzedInstructions.length > 0 && (
              <div>
                <h3>Instructions</h3>
                <ul>
                  {recipe.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          {recipe.sourceName && (
            <CardActions>
              <Button size="small" href={recipe.sourceUrl}>{recipe.sourceName}</Button>
            </CardActions>
          )}
        </Card>
      ))}
    </>
  );
};

export default SearchResults;
