var express = require('express');
var router = express.Router();
const productsController= require('../controllers/productsControllers')
/* GET home page. */
router.get('/detalle', productsController.products);
router.get('/productAdd', productsController.productAdd);


module.exports = router;