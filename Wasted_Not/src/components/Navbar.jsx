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
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        {["LIFESTYLE", "MEAL PLANNER"].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { textShadow: "2px 1px #00e676" },
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["RECIPES", "INGREDIENTS", "CUISINE"].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { textShadow: "2px 1px #00e676" },
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {["PROFILE", "LOGOUT"].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { textShadow: "2px 1px #ff3d00" },
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );

  return (
    <Box>
      <AppBar position="stactic">
        <Toolbar>
          <MenuButton edge="start" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </MenuButton>
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

          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button color="jump">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"top"} open={drawerOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navbar;
