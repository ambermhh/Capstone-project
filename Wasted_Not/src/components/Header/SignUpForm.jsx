import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ signUpForm, toggleSignUpForm }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        { email, password, first_name, last_name, username }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      toggleSignUpForm(false);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Dialog
      open={signUpForm}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.24)",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          style={{ width: "400px", height: "500px" }}
          src="https://i.pinimg.com/564x/a4/f7/fe/a4f7fe56b8bbaffb9f87260584c48f1d.jpg"
        />

        <DialogTitle sx={{ textAlign: "center" }}>Sign Up</DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              label="First Name"
              value={first_name}
              onChange={(event) => setFirstName(event.target.value)}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Last Name"
              value={last_name}
              onChange={(event) => setLastName(event.target.value)}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Username"
              type="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
              required
            />
            <Box sx={{ display: "flex" }}>
              <Button onClick={() => toggleSignUpForm(false)}>Cancel</Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ textAlign: "center", mt: 2, border: "2px solid black" }}
              >
                SIGN UP
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default SignUpForm;
