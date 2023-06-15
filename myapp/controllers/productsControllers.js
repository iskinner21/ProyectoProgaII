//require
const db = require('../database/models')
const productos = db.Producto;
//Aca deberia hacer const db = require('../database/models/Productos.js) --> Preguntar lo de Productos.js
//Despues hacer const productos = db.Productos --> (Alias del model que pusimos anteriormente)


//metodos
const productsController= {
    products: function(req, res) {
        let id = req.params.id
        productos.findByPk(id,{
            include: [{association: 'usuario'}, {association: 'comentario', include: [{association: 'usuario'}]}]
        })
        .then((data)=>{
            return res.render('product', {producto: data, comments: data.comentario})
        })
    },
    productAdd: function(req, res){
        return res.render ('product-add')
    },
    productEdit: function (req, res) {
        let id = req.params.id
        productos.findByPk(id)
        .then((data)=>{
            console.log(data);
            return res.render('product-edit', {producto: data})
        })
        
    },

    create_product: function (req, res) {
        
        productos.create({
            usuarioId: req.session.UserName.id,
            productImg: req.body.Image,
            productName: req.body.NombreProduct,
            productDescription: req.body.Descripcion,
        })
        return res.redirect('/')
    },
    edit_product: function (req, res) {
        productos.update({
            productImg: req.body.Image,
            productName: req.body.NombreProduct,
            productDescription: req.body.Descripcion,
        },{
            where: {id: req.params.id}
        })
        return res.redirect('/')
    }
    

    } 
         
module.exports = productsController