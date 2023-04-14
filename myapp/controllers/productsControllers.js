//require

//metodos
const productsController= {
    products: function(req, res) {
       return res.render('product',{
              productos : data.productos,
              comentarios: data.comentarios,
              UserInfo:data.users,
              usuarioLog: true
        }) 

        }
    }
        


      

    
         
module.exports = productsController