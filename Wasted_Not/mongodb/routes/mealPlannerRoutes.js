let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
router.get("/", (req, res) => {
  Controllers.mealPlannerController.getMealPlanner(res);
});
router.post("/create", (req, res) => {
  Controllers.mealPlannerController.createMealPlanner(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.mealPlannerController.updateMealPlanner(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.mealPlannerController.deleteMealPlanner(req, res);
});
module.exports = router;
