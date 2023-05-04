import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RecipesPost from "./Recipes/RecipePosts";
import Weekdays from "./MealPlan/Weekdays";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", margin:4 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          textColor="secondary"
          sx={{ margin:'1rem'}}
        >
            <Tab sx={{fontSize:"18px"}} label="POSTS" {...a11yProps(0)} />
            <Tab sx={{fontSize:"18px"}} label="SAVED" {...a11yProps(1)} />
            <Tab sx={{fontSize:"18px"}} label="MEAL PLANNER" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}><RecipesPost/></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}><Weekdays/></TabPanel>
    </Box>
  );
}
