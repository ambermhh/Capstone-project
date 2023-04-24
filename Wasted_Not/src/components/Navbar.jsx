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
  TextField,
  styled,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Login from "./login";
import { useNavigate, Outlet, NavLink } from "react-router-dom";

const MenuButton = styled(IconButton)({
  marginRight: 2,
  color: "white",
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
        {["MEAL PLANNER"].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { textShadow: "2px 1px #00e676" },
            }}
            onClick={() => navigate("mealplanner")}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["RECIPES"].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { textShadow: "2px 1px #00e676" },
            }}
            onClick={() => navigate("recipes")}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {["PROFILE"].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { textShadow: "2px 1px #ff3d00" },
            }}
            onClick={() => navigate("profile")}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );

  return (
    <>
      <AppBar position="sticky" className="AppBar" sx={{}} >
        <Toolbar >
          <MenuButton edge="start" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </MenuButton>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "3px",
            }}
          >
            <Title variant="h6">
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
          </NavLink>
          <Box sx={{ display: "flex", justifyContent:'flex-end' }}>
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              size="small"
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
            
              <Button onClick={handleLoginForm} color="jump">
                Login
              </Button>
              <Login loginOpen={loginForm} closeForm={handleCloseLoginForm} />
        
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"top"} open={drawerOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </>
  );
};

export default Navbar;
