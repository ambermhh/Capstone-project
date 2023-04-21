import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import "./allCSS/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/login";
import FirstSection from "./components/FirstSection";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary:{
      main:'#000',
      contrastText:'#fff',
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

theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
       <Login />
        <FirstSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
