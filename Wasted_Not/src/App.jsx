import {
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./allCSS/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footers/Footer";
import AppRoutes from "./components/Routes/AppRoutes";
import Home from "./components/Home";

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
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
