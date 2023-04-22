import React, { useState } from "react";
import {
  Grid,
  Box,
  FormHelperText,
  Input,
  Button,
  Typography,
  ButtonGroup,
  createTheme,
} from "@mui/material";





 


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

export default function Footer() {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };
  const containerStyle = {
    display: "flex",
  };
  return (
    <Box sx={{width:'100%'}}>
   
        <Typography
          variant="h6"
          sx={{
            position: "fixed",
            bottom: 150,
            left: 0,
            width: "100%",
            padding: "3px",
            textAlign: "center",
            fontSize:"15rem"


          }}
        >
          WASTED NOT
        </Typography>

      <Box
        style={containerStyle}
        sx={{
          position: "fixed",
          bottom: 32,
          left: 0,
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          display: "flex",
        }}
      >
        <Grid container item xs={4}>
          <form onSubmit={handleSubmit} id="demo">
            <Typography sx={{ padding: 2 }}>
              Join our community and get exclusive content, insider tips, and
              special offers delivered straight to your inbox.
            </Typography>
            <Input
              sx={{ margin: 2 }}
              color="jump"
              placeholder="mail@wastednot.com"
              type="email"
              required
              value={data.email}
              onChange={(event) =>
                setData({ email: event.target.value, status: "initial" })
              }
              error={data.status === "failure"}
            />
            <Button
              variant="solid"
              loading={data.status === "loading"}
              type="submit"
            >
              SUBSCRIBE
            </Button>
            {data.status === "failure" && (
              <FormHelperText
                sx={(theme) => ({
                  color: theme.vars.palette.danger[400],
                })}
              >
                Oops! something went wrong, please try again later.
              </FormHelperText>
            )}

            {data.status === "sent" && (
              <FormHelperText
                sx={(theme) => ({
                  color: theme.vars.palette.primary[400],
                })}
              >
                You are all set!
              </FormHelperText>
            )}
          </form>
        </Grid>

        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
            position: "relative",
          }}
        >
          <Grid container xs={12}>
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="body2">COMPANY</Typography>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                color="secondary"
              >
                {company}
              </ButtonGroup>
            </Grid>
            <Grid item>
              <Typography variant="body2">CONTENT</Typography>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                color="secondary"
              >
                {content}
              </ButtonGroup>
            </Grid>
            <Grid item>
              <Typography variant="body2">SOCIAL</Typography>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                color="secondary"
              >
                {social}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "4px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>#joy</Typography>
        <Typography>#environment</Typography>
        <Typography>©copyright 2023</Typography>
        <Typography>#zerowaste</Typography>
        <Typography>#trend</Typography>
      </Box>
    </Box>
  );
}
