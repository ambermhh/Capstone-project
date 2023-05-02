import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./Login";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Search from "./Search";

const MenuButton = styled(IconButton)({
  marginRight: 2,
});

const Title = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
  fontFamily: "Righteous, cursive",
});

const ListContainer = styled("div")({
  width: 250,
});

const Navbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);

  const handleLoginForm = () => {
    setLoginForm(true);
  };
  const handleCloseLoginForm = () => {
    setLoginForm(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const list = () => (
    <ListContainer
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <Outlet />

        <ListItem
          button
          sx={{
            "&:hover": { textShadow: "2px 1px #00e676" },
          }}
          onClick={() => navigate("/mealplanner")}
        >
          <ListItemText>MEAL PLANNER</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          sx={{
            "&:hover": { textShadow: "2px 1px #00e676" },
          }}
          onClick={() => navigate("/recipePage")}
        >
          <ListItemText>RECIPES</ListItemText>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem
          button
          sx={{
            "&:hover": { textShadow: "2px 1px #ff3d00" },
          }}
          onClick={() => navigate("/profile")}
        >
          <ListItemText>PROFILE</ListItemText>
        </ListItem>
      </List>
    </ListContainer>
  );

  return (
    <>
      <AppBar position="sticky" className="AppBar">
        <Toolbar width={"100%"}>
          <MenuButton edge="start" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </MenuButton>
          <Drawer anchor={"top"} open={drawerOpen} onClose={toggleDrawer}>
            {list()}
          </Drawer>
          <div onClick={() => navigate("/")} style={{position:'absolute', left:"26rem"}}>
            <Title variant="h4" >
              WASTED NOT
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  verticalAlign: "middle",
                  margin: "10px",
                }}
                src="https://i.pinimg.com/originals/fd/80/ec/fd80ecec48eba2a9adb76e4133905879.png"
              />
            </Title>
          </div>
          <Search id="search" />
          <Button onClick={handleLoginForm} color="jump" sx={{position:'absolute', right:60}}>
            Login
          </Button>
          <Login
            loginOpen={loginForm}
            closeForm={handleCloseLoginForm}
            signUpForm={signUpForm}
            toggleSignUpForm={setSignUpForm}
          />
          <SignUpForm
            signUpForm={signUpForm}
            toggleSignUpForm={setSignUpForm}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
