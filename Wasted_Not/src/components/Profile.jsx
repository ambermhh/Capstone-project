import React, { useState } from "react";
import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import ProfileTabs from "./ProfileTabs";
import axios from "axios";
import SignUpForm from "./Header/SignUpForm";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Logout from "./Logout";
import PostForm from "./PostForm";

const Profile = () => {
  const [error, setError] = useState(null);
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const [profilePicture, setProfilePicture] = useState({
    preview: "",
    data: "",
  });
  const [signUpForm, setSignUpForm] = useState(false);
  const [recipeForm, setRecipeForm] = useState(false);

  const handleSignUpForm = () => {
    setSignUpForm(true);
  };
  if (error) {
    return (
      <Box id="profile-error">
        <Typography sx={{ fontSize: "50px" }}>
          Error loading user data: {error}
        </Typography>
      </Box>
    );
  }

  if (!userData) {
    return (
      <Box id="profile-login-text">
        <Typography sx={{ fontSize: "50px" }}>
          Please Login or{" "}
          <Button
            onClick={handleSignUpForm}
            variant="contained"
            sx={{
              textAlign: "center",
              mt: 2,
              border: "2px solid black",
            }}
          >
            SIGN UP
          </Button>
        </Typography>
        <SignUpForm signUpForm={signUpForm} toggleSignUpForm={setSignUpForm} />
      </Box>
    );
  }

  const handleAvatarClick = () => {
    document.getElementById("profile-picture-input").click();
  };

  const handleProfilePictureChange = (event) => {
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post(`http://localhost:8080/api/users/image/${userData._id}`, formData)
      .then((response) => {
        console.log(response);
        const updatedUser = {
          ...userData,
          profile_picture: response.data.data.profile_picture,
        };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        console.log(updatedUser);
        setProfilePicture(response.data.data.profile_picture);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="profile">
        <Grid
          container
          direction="row"
          gap={15}
          justifyContent="center"
          alignItems="center"
          sx={{ flex: "row", mb: 5, p: "4rem" }}
        >
          <Grid item>
            <Avatar
              alt="WN"
              src={"http://localhost:8080" + userData.profile_picture}
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
          <Grid item sx={{}}>
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
                {userData.numFollowers} followers
              </Typography>
              <Typography variant="subtitle1">
                {userData.numFollowing} following
              </Typography>
            </Box>
            <Typography sx={{ textAlign: "start", pt: 3 }} variant="body1">
              {userData.user_bio}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ border: "3px solid black", mr: 3 }}>
            Follow
          </Button>
          <Button variant="contained" sx={{ border: "3px solid black", mr: 3 }}>
            Message
          </Button>
          <Button variant="contained" sx={{ border: "3px solid black", mr: 3 }}>
            Email
          </Button>
          <div className="tooltip">
            <Button onClick={() => setRecipeForm(true)} >
              <PostForm
                open={recipeForm}
                onClose={() => setRecipeForm(false)}
              />
              <AddCircleOutlinedIcon id="post-button" />
            </Button>
            <p className="tooltip-text">Post</p>
        </div>
        </Box>
        <ProfileTabs />
      </div>
    </>
  );
};

export default Profile;
