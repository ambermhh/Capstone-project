let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.subscriptionController.getSubsriptions(res);
});
router.post("/create", (req, res) => {
  Controllers.subscriptionController.createSubscription(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.subscriptionController.updateSubscription(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.subscriptionController.deleteSubscription(req, res);
});
module.exports = router;
