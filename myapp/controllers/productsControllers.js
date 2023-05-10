//require
const data = require('../data/moduleData')
//Aca deberia hacer const db = require('../database/models/Productos.js) --> Preguntar lo de Productos.js
//Despues hacer const productos = db.Productos --> (Alias del model que pusimos anteriormente)

//metodos
const productsController= {
    products: function(req, res) {
        return res.render('product',{
               productos : data.productos,
               comentarios: data.comentarios,
               usuario: data.usuario[0]
         }) 

        },

        productAdd: function(req,res){
            return res.render ('product-add', {
                 productos: data.productos ,
                 comentarios:data.comentarios , 
                 usuario: data.usuario[0]


            })
        }


    } 
         
module.exports = productsController