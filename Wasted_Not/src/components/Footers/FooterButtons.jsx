import React from "react";
import {
  Box,
  Button,
  Typography,
  ButtonGroup,
  Input,
  Grid,
} from "@mui/material";
import axios from "axios";
const company = [
  <Button key="one">ABOUT US</Button>,
  <Button key="two">COMNUMITY</Button>,
  <Button key="three">PARTNERS</Button>,
  <Button key="four">PRIVACY</Button>,
];

const content = [
  <Button key="one">BLOG</Button>,
  <Button key="two">NEWSLETTER</Button>,
  <Button key="three">PODCAST</Button>,
];

const social = [
  <Button key="one">LINKEDIN</Button>,
  <Button key="two">TWITTER</Button>,
  <Button key="three">INSTAGRAM</Button>,
  <Button key="four">TIKTOK</Button>,
];

export default function FooterButtons() {
  const [email, setEmail] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/subscriptions/create", { email: email })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        justifyContent: "space-evenly",
  
        width: "100%",
        backgroundColor: "#f5f5f5",
        display: "flex",
      }}
    >
 
          <form onSubmit={handleSubmit} id="demo">
            <Typography>
              Join our community and get exclusive content, insider tips, <br/>and
              special offers delivered straight to your inbox.
            </Typography>
            <Input
              color="jump"
              placeholder="mail@wastednot.com"
              type="email"
              required
              onChange={(event) => setEmail(event.target.value)}
              error={email.status === "failure"}
            />
            <Button variant="solid" type="submit">
              SUBSCRIBE
            </Button>
            {email.status === "failure" && (
              <FormHelperText
                sx={(theme) => ({
                  color: theme.vars.palette.danger[400],
                })}
              >
                Invalid Email
              </FormHelperText>
            )}

            {email.status === "sent" && (
              <FormHelperText
                sx={(theme) => ({
                  color: theme.vars.palette.primary[400],
                })}
              >
                You are all set!
              </FormHelperText>
            )}
          </form>
  
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          color="secondary"
        >
          {company}
        </ButtonGroup>

        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          color="secondary"
        >
          {content}
        </ButtonGroup>

        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          color="secondary"
        >
          {social}
        </ButtonGroup>

    </Box>
  );
}
