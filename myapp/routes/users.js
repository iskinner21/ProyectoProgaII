var express = require('express');
var router = express.Router();
const usersController= require('../controllers/usersControllers')
/* GET home page. */
router.get('/login', usersController.login);
router.post('/login', usersController.login_check);
router.get('/logout', usersController.logout);
router.get('/profile/:id', usersController.profile);
router.get('/profileEdit', usersController.profileEdit);
router.get('/register', usersController.register);
router.post('/register', usersController.registro_de_datos)


module.exports = router;
