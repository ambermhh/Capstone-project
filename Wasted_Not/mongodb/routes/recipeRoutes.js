let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
router.get("/", (req, res) => {
  Controllers.recipeController.getRecipe(res);
});
router.post("/create", (req, res) => {
  Controllers.recipeController.createRecipe(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.recipeController.updateRecipe(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.recipeController.deleteRecipe(req, res);
});
module.exports = router;
