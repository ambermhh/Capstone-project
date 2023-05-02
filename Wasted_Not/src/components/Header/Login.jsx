import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function Login({ closeForm, loginOpen, toggleSignUpForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpForm = () => {
    closeForm();
    toggleSignUpForm(true);
  };

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
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));
      setEmail("");
      setPassword("");
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
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.24)",
          },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            style={{ width: "400px" }}
            src="https://i.pinimg.com/564x/63/17/91/63179104985032222e40fbf9e6348af8.jpg"
          />
          <Box component="form" onSubmit={handleLogin}>
            <DialogTitle sx={{ textAlign: "center", fontSize: "30px" }}>
              WASTED_NOT
            </DialogTitle>
            <Button
              variant="contained"
              onClick={closeForm}
              sx={{
                border: "2px solid black",
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <CloseIcon />
            </Button>
            <DialogContent sx={{ height: "400px" }}>
              <DialogContentText sx={{ textAlign: "center", fontSize: "25px" }}>
                LOGIN
              </DialogContentText>
              <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
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
              <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
              <Button
                type="submit"
                variant="contained"
                sx={{ textAlign: "center", mt: 2, border: "2px solid black" }}
              >
                Login
              </Button>
              <Grid container sx={{ mt: 2 }}></Grid>
              <Button
                onClick={handleSignUpForm}
                variant="contained"
                sx={{
                  textAlign: "center",
                  mt: 2,
                  border: "2px solid black",
                }}
              >
                SIGN UP
              </Button></Box>
            </DialogContent>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Login;
