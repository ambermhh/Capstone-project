import React from "react";
import { Card, CardMedia } from "@mui/material";


export default function ImageCard({ image, title }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />
    </Card>
  );
}
