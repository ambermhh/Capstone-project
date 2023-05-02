import React from "react";
import HashTag from "../Footers/HashTag";
import { Box } from "@mui/material";
import FooterButtons from "../Footers/FooterButtons";
import Subscription from "./Subscription";

export default function Footer() {
  return (
    <Box>
      <FooterButtons />
      <HashTag />
    </Box>
  );
}
