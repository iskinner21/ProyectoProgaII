
 

//metodos
const indexController= {
    index: function(req, res) {
       return res.render('index', {
            productos: data.productos,
            comentarios: data.comentarios , 
            UserLog: false


        })
    },
    resultadoBusqueda: function(req, res){
        return res.render('resultadoBusqueda')
    }
}

const productos = {
 index: function(req , res){
  return res.render('index',{
    productos: data.productos ,
    comentarios: data.comentarios , 
    UserLog: false,
    



   })
   

 }


}
//export
module.exports = indexController
