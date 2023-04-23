import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Divider,
} from "@mui/material";
import "./allCSS/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FirstSection from "./components/Recipes";
import MealPlanner from "./components/MealPlanner";
import SignUpForm from "./components/SignUpForm";
import AppRoutes from "./components/AppRoutes";
import Profile from "./components/Profile";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
    },
    jump: {
      main: "#ff3d00",
      contrastText: "#000",
    },
    fun: {
      main: "#00e676",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Righteous, cursive",
    fontSize: 14,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <AppRoutes />
    


        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
