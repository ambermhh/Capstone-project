import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MealPlanner from "./MealPlanner";
import axios from "axios";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function Weekdays() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
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
          <Typography sx={{ fontSize: "50px" }}>"To access the meal planner feature, you need to sign up or log in first. Don't worry, it's quick and easy! Once you're signed in, you'll be able to plan your meals and save your favorite recipes."</Typography>
        </Box>
      );
    }
    const handleChangeIndex = (index) => {
      setValue(index);
      console.log(value);
    };
  
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  // const userData = JSON.parse(localStorage.getItem("currentUser"));

  // useEffect(() => {
  //   console.log(userData);
  //   axios.get`http://localhost:8080/api/users/${userData._id}/mealPlanners/`
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div>
      <Typography sx={{ padding: 3, textAlign: "center", fontSize: "50px" }}>
        Meal Planner
      </Typography>

      <AppBar
        position="static"
        color="default"
        sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
      >
        <Tabs
          value={value}
          onChange={handleChangeIndex}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="SUNDAY" {...a11yProps(0)} />
          <Tab label="MONDAY" {...a11yProps(1)} />
          <Tab label="TUESDAY" {...a11yProps(2)} />
          <Tab label="WEDESDAY" {...a11yProps(3)} />
          <Tab label="THURSDAY" {...a11yProps(4)} />
          <Tab label="FRIDAY" {...a11yProps(5)} />
          <Tab label="SATURDAY" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MealPlanner dayIndex={value} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MealPlanner dayIndex={value} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MealPlanner dayIndex={value} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <MealPlanner dayIndex={value} />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <MealPlanner dayIndex={value} />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <MealPlanner dayIndex={value} />
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <MealPlanner dayIndex={value} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
