import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import ImageCard from "./ImageCard";

const Title = styled("div")({
  position: "absolute",
  top: "40%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  fontWeight: "bold",
  textShadow: "2px 2px 6px #482612 ",
  zIndex: 1,
  "& span": {
    color: "#00e676",
  },
  margin:'3rem'
});

export default function Home() {
  const images = [
    {
      id: 1,
      title: "Ice",
      image: "./food-pic/ice.jpeg",
    },
    {
      id: 2,
      title: "raisins",
      image: "./food-pic/raisins.jpeg",
    },
    {
      id: 3,
      title: "Beans",
      image: "./food-pic/beans.jpg",
    },
    {
      id: 4,
      title: "Cheese",
      image: "./food-pic/cheese.jpeg",
    },
    {
      id: 5,
      title: "dumplings",
      image: "./food-pic/dumplings.jpeg",
    },
    {
      id: 6,
      title: "pickles",
      image: "./food-pic/pickles.jpeg",
    },
    {
      id: 7,
      title: "cooking2",
      image: "./food-pic/cooking2.jpeg",
    },
    {
      id: 8,
      title: "hike",
      image: "./food-pic/hike.jpeg",
    },
    {
      id: 9,
      title: "cooking",
      image: "./food-pic/cooking.jpeg",
    },
    {
      id: 10,
      title: "grapes",
      image: "./food-pic/grapes.jpeg",
    },
    {
      id: 11,
      title: "straws",
      image: "./food-pic/straws.jpeg",
    },
    {
      id: 12,
      title: "sushi",
      image: "./food-pic/sushi.jpeg",
    },
    {
      id: 13,
      title: "cabbage",
      image: "./food-pic/cabbage.jpeg",
    },
    {
      id: 14,
      title: "eggplant",
      image: "./food-pic/eggplant.jpeg",
    },
    {
      id: 15,
      title: "apple",
      image: "./food-pic/apple.jpeg",
    },
    {
      id: 16,
      title: "cans",
      image: "./food-pic/cans.jpeg",
    },
    {
      id: 17,
      title: "corn",
      image: "./food-pic/corn.jpeg",
    },
    {
      id: 18,
      title: "dirtycups",
      image: "./food-pic/dirtycups.jpeg",
    },
    {
      id: 19,
      title: "garlic",
      image: "./food-pic/garlic.jpeg",
    },
    {
      id: 20,
      title: "kiwi",
      image: "./food-pic/kiwi.jpeg",
    },
    {
      id: 21,
      title: "bento",
      image: "./food-pic/bento.jpeg",
    },
    {
      id: 22,
      title: "coconut",
      image: "./food-pic/coconut.jpeg",
    },
    {
      id: 23,
      title: "cookies",
      image: "./food-pic/cookies.jpeg",
    },
    {
      id: 24,
      title: "soup",
      image: "./food-pic/soup.jpeg",
    },
    {
      id: 25,
      title: "golf",
      image: "./food-pic/golf.jpeg",
    },
    {
      id: 26,
      title: "chilli",
      image: "./food-pic/chilli.jpeg",
    },
    {
      id: 27,
      title: "mandarin",
      image: "./food-pic/mandarin.jpeg",
    },
    {
      id: 28,
      title: "moon",
      image: "./food-pic/moon.jpeg",
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{ padding: 5, justifyContent: "center", alignItems: "center" }}
    >
      {images.map((image) => (
        <Grid item key={image.id}>
          <div>
            <ImageCard image={image.image} />
            <Title>
              <Typography
                sx={{
                  fontSize: "4rem",
                  "@media (max-width:600px)": {
                    fontSize: "2rem",
                    
                  },
                }}
              >
                WASTED NOT <br />
                <span>
                  "Reduce, reuse, and eat deliciously"
                  <br />
                  "Good for you, good for the planet"
                </span>
              </Typography>
            </Title>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
