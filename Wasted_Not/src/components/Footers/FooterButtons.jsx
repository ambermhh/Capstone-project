import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function FooterButton() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "20px",
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
        <Button onClick={() => navigate("/aboutus")} sx={{ color: "black" }}>
          ABOUT US
        </Button>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button onClick={() => navigate("/privacy")} sx={{ color: "black" }}>
          PRIVACY
        </Button>
        <Button
          onClick={() => navigate("/termofservice")}
          sx={{ color: "black" }}
        >
          TERM OF SERVICE
        </Button>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button sx={{ color: "black" }}>INSTAGRAM</Button>
        <Button sx={{ color: "black" }}>FACEBOOK</Button>
      </Stack>
    </div>
  );
}
