import React, { useContext, useState } from "react";
import axios from "axios";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { RecipeSearchContext } from "../Context/RecipeSearchContext";
const Search = (props) => {
  const { search, setSearch } = useContext(RecipeSearchContext);
  const [includeIngredients, setIncludeIngredients] = useState("");
  const [cuisine, setcuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [titleMatch, setTitleMatch] = useState("");
  const { results, setResults } = useContext(RecipeSearchContext);
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: "3d07bc950c674ff29ba53968dc2d44e5",
            query: search,
            cuisine: cuisine,
            includeIngredients: includeIngredients,
            instructionsRequired: true,
            diet: diet,
            titleMatch: titleMatch,
          },
        }
      );
      const recipeData = response.data.results;
      const recipeIds = recipeData.map((recipe) => recipe.id);
      const recipePromises = recipeIds.map((id) =>
        axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: {
            apiKey: "3d07bc950c674ff29ba53968dc2d44e5",
            includeNutrition: false,
          },
        })
      );
      const recipesResponse = await Promise.all(recipePromises);
      const recipesData = recipesResponse.map((response) => response.data);
      console.log(recipesData);
      setResults(recipesData);
      navigate("/recipeSearchResults");
      setSearch("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", position: "absolute", right: 130 }}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Search;


