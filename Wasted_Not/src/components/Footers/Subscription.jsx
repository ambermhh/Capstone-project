import React from "react";
import { Typography, Input, Button, FormHelperText } from "@mui/material";
import axios from "axios";

export default function Subscription() {
  const [email, setEmail] = React.useState("");
  const [statusMsg, setStatusMsg] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/subscriptions/create", { email: email })
      .then((response) => {
        console.log(response);
        setEmail("");
        setStatusMsg("You're all set!");
      })
      .catch((error) => {
        setStatusMsg('already exists');
        console.log(error);
      });
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit} id="demo">
        <Typography sx={{ position: "relative", left: "6rem", top: "1rem" }}>
          Join our community and get exclusive content, insider tips, <br />
          and special offers delivered straight to your inbox.
        </Typography>
        <Input
          value={email}
          color="jump"
          placeholder="mail@wastednot.com"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
          sx={{ position: "relative", left: "6rem", top: "1rem" }}
        />
        <Button
          variant="solid"
          type="submit"
          sx={{ position: "relative", left: "8rem", top: "1rem" }}
        >
          SUBSCRIBE
        </Button>

        <FormHelperText
          sx={(theme) => ({
            color: 'red',
          })}
        >
          {statusMsg}
        </FormHelperText>
      </form>
    </div>
  );
}
