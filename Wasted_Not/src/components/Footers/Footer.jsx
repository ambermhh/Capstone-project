import React from "react";
import HashTag from "../Footers/HashTag";
import { Box } from "@mui/material";
import FooterButtons from "../Footers/FooterButtons";
import Subscription from "./Subscription";

export default function Footer() {
  return (
    <Box >
      <Box sx={{display:'flex'}}>
        <Subscription />
        <FooterButtons />
      </Box>
      <HashTag />
    </Box>
  );
}
