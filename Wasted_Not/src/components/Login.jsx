import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [resetPassword, setResetPassword] = useState('');
  const [loginAttempt, setLoginAttempt] = useState(0);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleLogin = (e) => {
    e.preventDefault();
   
    // const response = await axios.post('/api/login', {email, password});
    // const {token} =response.data;
    // localStorage.setItem('token', token);


  };

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          border: '1px solid gray',
          borderRadius: '10px',
        }}
        onSubmit={handleLogin}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
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
        <FormControlLabel
          control={
            <Checkbox
            checked={rememberMe}
            onChange={handleRememberMeChange}
            name="rememberMe"
            />
          }
          label="Remember me"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Login
        </Button>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs>
            <Link href="#" variant="body2" >
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" >
            Login with Facebook
          </Button>
          <Button variant="contained" sx={{ ml: 1 }}>
            Login with Google
          </Button>
        </Box>
          <Grid item>
            <Link href="#" variant="body2">
              Sign Up
            </Link>
          </Grid>
      </Box>
          <Button onClick={handleCloseLoginForm}>Close</Button>
    </Box>
  );
};

export default Login;
