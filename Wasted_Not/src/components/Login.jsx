import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function Login({ closeForm, loginOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpForm = () => {
    navigate("/SignUpForm")
  }



  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        { email, password }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      closeForm();
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Dialog
        open={loginOpen}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.24)",
          },
        }}
      >
        <Box component="form" onSubmit={handleLogin}>
          <DialogTitle sx={{ textAlign: "center" }}>WASTED_NOT</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ textAlign: "center" }}>
              LOGIN
            </DialogContentText>
            <Box sx={{ borderSpacing: 5 }}>
              <TextField
                sx={{ border: "2px solid black" }}
                autoFocus
                id="email"
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <TextField
                sx={{ border: "2px solid black" }}
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Box>
            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{ textAlign: "center", mt: 2, border: "2px solid black" }}
            >
              Login
            </Button>

            <Grid container sx={{ mt: 2 }}></Grid>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{ ml: 1, textAlign: "center", border: "2px solid black" }}
              >
                Login with Facebook
              </Button>
              <Button
                variant="contained"
                sx={{ ml: 1, textAlign: "center", border: "2px solid black" }}
              >
                Login with Google
              </Button>
            </Box >
            <Button
              onClick={handleSignUpForm}
              variant="contained"
              sx={{ textAlign: "center", mt: 2, border: "2px solid black" }}
            >
              SIGN UP
            </Button>

            {/* <Link open={isOpen} sx={{border:'2px solid black', color:'black'}}>
              <Button onClick={handleSignUpForm}>SIGN UP</Button>
            </Link> */}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={closeForm}
              sx={{ textAlign: "center", border: "2px solid black" }}
            >
              <CloseIcon />
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Login;
