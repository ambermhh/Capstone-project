let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
router.get("/", (req, res) => {
  Controllers.mealPlannerController.getMealPlanner(res);
});
// router.get("/:id", (req, res) => {
//   Controllers.mealPlannerController.getUserMealPlanner(res);
// });
router.post("/create/:userId/:index", (req, res) => {
  Controllers.mealPlannerController.createMealPlanner(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.mealPlannerController.deleteMealPlanner(req, res);
});
module.exports = router;
