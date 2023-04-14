//require

//metodos
const indexController= {
    index: function(req, res) {
        res.render('index', {
            productos: data.productos,
            comentarios: data.comentarios , 
            UserLog: false


        })
    },
    resultadoBusqueda: function(req, res){
        res.render('search-results')
    }
}

const productos = {
 index: function(req , res){
   res.render("productos",{
    



   })
   

 }


}
//export
module.exports = indexController
