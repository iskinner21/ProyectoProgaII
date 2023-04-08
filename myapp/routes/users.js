var express = require('express');
var router = express.Router();
const usersController= require('../controllers/usersControllers')
/* GET home page. */
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);
router.get('/profileEdit', usersController.profileEdit);
router.get('/register', usersController.register);


module.exports = router;
