import { useState } from "react";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import Logout from "../Logout";
import ProfileTabs from "./ProfileTabs";

const Profile = () => {
  const [error, setError] = useState(null);
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  console.log(userData);

  if (error) {
    return (
      <Box sx={{ textAlign: "center", padding: 20, margin: 38 }}>
        <Typography sx={{ fontSize: "50px" }}>
          Error loading user data: {error}
        </Typography>
      </Box>
    );
  }

  if (!userData) {
    return (
      <Box sx={{ textAlign: "center", padding: 20, margin: 38 }}>
        <Typography sx={{ fontSize: "50px" }}>Please try again..</Typography>
      </Box>
    );
  }
  const [profilePicture, setProfilePicture] = useState(null);

  const handleAvatarClick = () => {
    document.getElementById("profile-picture-input").click();
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <>
      <Grid
        container
        direction="row"
        gap={15}
        justifyContent="center"
        alignItems="center"
        sx={{ flex: "row", mb: 5, p: "4rem"}}
      >
        <Grid item >
          <Avatar
            alt="WN"
            src={profilePicture || userData.profile_picture}
            onClick={handleAvatarClick}
            sx={{ width: 140, height: 140 }}
          >
            <input
              hidden
              accept="image/*"
              type="file"
              id="profile-picture-input"
              onChange={handleProfilePictureChange}
            />
          </Avatar>
        </Grid>
        <Grid item sx={{ }}>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ marginBottom: "0.5rem" }}
            >
              {userData.username}
            </Typography>
            <Logout />
          </Box>
          <Box
            gap={3}
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="subtitle1">
              {userData.numPosts} posts
            </Typography>
            <Typography variant="subtitle1">
              {userData.numFollowers} followers
            </Typography>
            <Typography variant="subtitle1">
              {userData.numFollowing} following
            </Typography>
          </Box>
      <Typography sx={{textAlign:'start', pt:3}} variant="body1">{userData.user_bio}BIO</Typography>
        </Grid>
      </Grid>
      <Divider />
      <ProfileTabs />
    </>
  );
};

export default Profile;
