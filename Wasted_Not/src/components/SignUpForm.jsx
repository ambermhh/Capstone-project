import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const SignUpForm = ({ isOpen, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here

    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });
    handleClose();
  };

  return (
    <Dialog >
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="dense"
            label="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
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
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
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
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Sign Up</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpForm;
