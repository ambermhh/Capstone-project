import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    localStorage.clear();

    alert("You have been logged out.");
    setAnchorEl(null);
    navigate("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Settings />
      </Button>
      <Menu
        sx={{boxShadow:'10px 10px 50px grey'}}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleLogout}
        TransitionComponent={Fade}
      >
        <MenuItem >Edit Profile</MenuItem>
        <MenuItem >Setting</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
        
      </Menu>
    </div>
  );
}
