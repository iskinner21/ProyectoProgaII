//require
const db = require('../database/models')
const productos = db.Producto;
//Aca deberia hacer const db = require('../database/models/Productos.js) --> Preguntar lo de Productos.js
//Despues hacer const productos = db.Productos --> (Alias del model que pusimos anteriormente)

//Falta lo de findByPk ---> Para poder hacer lo de relaciones

//metodos
const productsController= {
    products: function(req, res) {

        

        let rel = {
            include: [{ association: "comments"}],
          };

        db.Producto.findByPk(req.params.id, rel)
        .then((data) => {
           //return res.send(data)

            return res.render('product',{
               productos : data,
               comentarios: [],
               usuario: data.usuario
         }) 
        })
        .catch((error) => [
            console.log(error)
        ])
    },

        productAdd: function(req,res){
            return res.render ('product-add', {
                 productos: data.productos ,
                 comentarios: data.comentarios , 
                 usuario: data.usuario[0]


            })
        }


    } 
         
module.exports = productsController