import React from "react";
import { Grid, Avatar, Typography, Box, Divider, Button } from "@mui/material";

const Profile = () => {
  return (
    <Grid container direction="column"  sx={{padding:10, alignItems:'start'}}>
      <Grid item>
        <Avatar
          alt="User Profile Picture"
          src="/path/to/user/profile/picture"
          sx={{ width: 120, height: 120 }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4">User Name</Typography>
        <Typography variant="body1">User Bio</Typography>
      </Grid>
      <Divider sx={{ width: "100%", my: 3 }} />
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item>
          <Typography variant="h6">Recipes</Typography>
          <Typography variant="body1">5</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Comments</Typography>
          <Typography variant="body1">10</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Likes</Typography>
          <Typography variant="body1">20</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%", my: 3 }} />
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item>
          <Typography variant="h6">Followers</Typography>
          <Typography variant="body1">100</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Following</Typography>
          <Typography variant="body1">50</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Badges</Typography>
          <Box>
            <Button variant="outlined">Badge 1</Button>
            <Button variant="outlined">Badge 2</Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
