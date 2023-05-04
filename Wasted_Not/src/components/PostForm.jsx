import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import axios from 'axios';

const PostForm = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cuisines, setCuisines] = useState('');
  const [image, setImage] = useState({ preview: '', data: '' });
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",title )
    formData.append("description",description)
    formData.append("ingredients",ingredients)
    formData.append("cuisines",cuisines)
    formData.append("image",image.data)
    formData.append("instructions", instructions)
    try {
      const response = await axios.post(
        `http://localhost:8080/api/recipes/create/${userData._id}/`,formData
      );
      console.log(response.data)
      setTitle("");
      setDescription("");
      setIngredients("");
      setInstructions("");
      setCuisines("");
      setImage('');
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleImageUpload = (e) => {
    console.log(e.target.files[0])
    // create object with data from uploaded image and URL to preview it
    const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
    }
    setImage(img)  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New Post</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <TextField
          label="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <TextField
          label="Cuisines"
          value={cuisines}
          onChange={(e) => setCuisines(e.target.value)}
        />
        <input type="file" onChange={handleImageUpload} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostForm;
