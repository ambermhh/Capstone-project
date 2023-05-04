let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
const auth = require("../middleware/auth");
const uploadFile = require("../middleware/uploads");


router.get('/', auth, (req, res) => {
  Controllers.userController.getUsers(res);
})
router.get('/:id', auth, (req, res) => {
  Controllers.userController.getUser(res);
})

router.post('/login', (req, res) => {
  console.log("test")
  Controllers.userController.loginUser(req, res)
})


router.post('/register', (req, res) => {
  Controllers.userController.registerUser(req, res)
})

router.put('/:id', (req, res) => {
  Controllers.userController.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
  Controllers.userController.deleteUser(req, res)
})

router.post('/image/:id', uploadFile,(req, res) => {
  Controllers.userController.addProfileImage(req, res)
})

module.exports = router;