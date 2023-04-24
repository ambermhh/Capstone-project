import React from "react";
import HashTag from "../Footers/HashTag";
import { Box } from "@mui/material";
import FooterButtons from "../Footers/FooterButtons";

export default function Footer() {
  return (
    <Box>
      <FooterButtons />
      <HashTag />
    </Box>
  );
}
