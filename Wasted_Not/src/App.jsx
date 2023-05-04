import { ThemeProvider, createTheme } from "@mui/material";
import "./allCSS/App.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footers/Footer";
import AppRoutes from "./components/Routes/AppRoutes";
import React from "react";
import RecipeSearchProvider from "./components/Context/RecipeSearchContext";
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
        <RecipeSearchProvider>
          <Navbar />
          <AppRoutes />
          <Footer />
        </RecipeSearchProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
