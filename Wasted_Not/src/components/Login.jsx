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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/api/users/login",
    //     { email, password }
    //   );
    //   const { token } = response.data;
    //   localStorage.setItem("token", token);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Dialog open={open} onClose={close}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
            border: "1px solid gray",
            borderRadius: "10px",
          }}
          onSubmit={handleLogin}
        >
          <DialogTitle>WASTED_NOT</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ textAlign: "center" }}>
              LOGIN
            </DialogContentText>
            <TextField
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
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
              Login
            </Button>
            <Grid container sx={{ mt: 2 }}></Grid>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained">Login with Facebook</Button>
              <Button variant="contained" sx={{ ml: 1 }}>
                Login with Google
              </Button>
            </Box>
            <Grid item>
              <Link href="#" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleCloseLoginForm}>close</Button>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
}

export default Login;
