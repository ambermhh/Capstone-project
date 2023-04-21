let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
const auth = require("../middleware/auth");


router.get('/', auth, (req, res) => {
  Controllers.userController.getUsers(res);
})

router.post('/login', (req, res) => {
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

router.post('/image', (req, res) => {
  Controllers.userController.addProfileImage(req, res)
})

module.exports = router;