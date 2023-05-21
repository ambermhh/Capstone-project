import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Privacy() {
  return (
    <div
      style={{
        padding: "4rem",
        marginLeft: "8rem",
        marginRight: "8rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{ textAlign: "center", margin: "3rem", fontSize: "3rem" }}
        >
          PRIVACY POLICY
        </Typography>
        <Typography
          variant="overline"
          sx={{ fontSize: "20px", textAlign: "justify" }}
        >
          Information We Collect When you use the Service, we may collect
          certain personal information from you, including: <br/>
          Contact Information:This may include your name, email address, and social media handles.<br/>
          Content: We collect any content you upload or share, including zero
          waste food recipes and comments. <br/>Usage Information: We may collect
          information about how you use the Service, including the pages you
          visit, the features you use, and the time and duration of your use.<br/>
          Device Information: We may collect information about the device you
          use to access the Service, including the device type, operating
          system, browser type, and IP address. <br/>Use of Information We may use
          the information we collect from you for the following purposes: <br/>To
          provide and improve the Service <br/>To communicate with you about the
          Service <br/>To personalize your experience on the Service
        </Typography>
      </Stack>
    </div>
  );
}
