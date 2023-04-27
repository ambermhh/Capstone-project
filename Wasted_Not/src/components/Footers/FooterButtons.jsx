import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function FooterButton() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        display:'flex'
      }}
    >
      <Stack direction="column" spacing={2} justifyContent='center' alignItems='center'>
        <Typography>COMPANY</Typography>
        <Button sx={{color:'black'}}>ABOUT US</Button>
        <Button sx={{color:'black'}}>PARTNERS</Button>
      </Stack>
      <Stack direction="column" spacing={2} justifyContent='center' alignItems='center'>
        <Typography>SOCIAL MEDIA</Typography>
        <Button sx={{color:'black'}}>TWITTERS</Button>
        <Button sx={{color:'black'}}>INSTAGRAM</Button>
      </Stack>

    </div>
  );
}
