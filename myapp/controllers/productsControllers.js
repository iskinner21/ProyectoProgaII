//require

//metodos
const productsController= {
    products: function(req, res) {
        res.render('product')
    },
    productAdd: function(req, res){
        res.render('product-add')
    }
}
//export
module.exports = productsController