//require
const data = require('../data/moduleData')
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