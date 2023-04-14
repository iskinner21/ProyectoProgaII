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

        },

        productAdd: function(req,res){
            return res.render ('procuct-add', {
                 productos: data.productos ,
                 comentarios:data.comentarios , 
                 UserInfo:data.users,
                 UserLog: true, 


            })
        }


}
   


        



      

    
         
module.exports = productsController