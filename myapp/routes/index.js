var express = require('express');
var router = express.Router();
const indexController= require('../controllers/indexController')
/* GET home page. */
router.get('/detalles', indexController.index);
router.get('/resultadoBusqueda', indexController.resultadoBusqueda);


module.exports = router;
