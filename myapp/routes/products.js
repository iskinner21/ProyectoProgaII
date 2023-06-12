var express = require('express');
var router = express.Router();
const productsController= require('../controllers/productsControllers')
/* GET home page. */
router.get('/detalle/:id', productsController.products);
router.get('/productAdd', productsController.productAdd);
router.post('/productAdd', productsController.create_product);


module.exports = router;