import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";

const PostForm = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cuisines, setCuisines] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });
  const userData = JSON.parse(localStorage.getItem("currentUser"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("ingredients", ingredients);
    formData.append("cuisines", cuisines);
    formData.append("image", image.data);
    formData.append("instructions", instructions);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/recipes/create/${userData._id}/`,
        formData
      );
      console.log(response.data);
      setTitle("");
      setDescription("");
      setIngredients("");
      setInstructions("");
      setCuisines("");
      setImage("");
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    // create object with data from uploaded image and URL to preview it
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.24)",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          style={{ width: "400px", height: "530px" }}
          src="https://i.pinimg.com/564x/a4/a9/40/a4a940e43cf2d57c43599125bf3a8694.jpg"
        />
        <DialogContent>
          <DialogTitle>New Post</DialogTitle>
          <TextField
            margin="dense"
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            fullWidth
            label="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            fullWidth
            label="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            fullWidth
            label="Cuisines"
            value={cuisines}
            onChange={(e) => setCuisines(e.target.value)}
          />

          <input type="file" onChange={handleImageUpload} />
          <DialogActions>
            <Button variant="contained" onClick={handleSubmit}>
              Post
            </Button>
            <Button variant="contained" onClose={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default PostForm;
