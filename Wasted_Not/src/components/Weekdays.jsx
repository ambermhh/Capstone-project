import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MealPlanner from "./MealPlanner";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

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
          onChange={handleChange}
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
          <MealPlanner dayofweek={0}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <MealPlanner dayofweek={1}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <MealPlanner dayofweek={2}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <MealPlanner dayofweek={3}/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <MealPlanner dayofweek={4}/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        <MealPlanner dayofweek={5}/>
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
        <MealPlanner dayofweek={6}/>
        </TabPanel>

      </SwipeableViews>
    </div>
  );
}
