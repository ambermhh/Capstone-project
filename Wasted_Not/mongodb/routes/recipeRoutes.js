let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
const uploadFile = require("../middleware/uploads");

router.get("/", (req, res) => {
  Controllers.recipeController.getRecipe(res);
});
router.get("/:id", (req, res) => {
  Controllers.recipeController.getUserPosts(req, res);
});
router.post("/create/:userid", uploadFile, (req, res) => {
  Controllers.recipeController.createRecipe(req, res);
});
router.put("/:id", (req, res) => {
  Controllers.recipeController.updateRecipe(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.recipeController.deleteRecipe(req, res);
});

module.exports = router;
