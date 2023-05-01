import React from "react";
import { Typography, Stack } from "@mui/material";
export default function AboutUs() {
  return (
    <div
      style={{
        padding: "4rem",
        margin: "3rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <img src="https://i.pinimg.com/564x/be/c7/7b/bec77b4fafe2a955b1188a854aa5cd7a.jpg"></img>

      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{ textAlign: "center", margin: "3rem", fontSize: "3rem" }}
        >
          ABOUT US
        </Typography>
        <Typography
          variant="overline"
          sx={{ padding:'3rem',fontSize: "20px", textAlign: "justify" }}
        >
          Welcome to our community! We are passionate about reducing waste and
          promoting sustainability in the kitchen. Our website is a place where
          like-minded individuals can come together to share and discover zero
          waste food recipes. Our mission is to inspire and empower people to
          live a more sustainable lifestyle by providing easy and accessible
          resources. We believe that small changes can make a big impact, and we
          strive to make sustainable living achievable for everyone. Our team is
          made up of individuals who share a passion for sustainability and a
          love of cooking. We are committed to providing quality content and
          fostering a supportive and inclusive community. We welcome all
          individuals, regardless of their level of experience with
          sustainability or cooking. Thank you for joining us on this journey
          towards a more sustainable future. Together, we can make a difference!
        </Typography>
      </Stack>
    </div>
  );
}
