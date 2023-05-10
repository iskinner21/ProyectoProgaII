const data = require('../data/moduleData')
//Aca deberia hacer const db = require('../database/models/Usuarios.js) --> Preguntar lo de Usuarios.js
//Despues hacer const usuarios = db.Usuarios --> (Alias del model que pusimos anteriormente)
// --> PREGUNTAR QUE VA EN INDEX CONTROLLER

//metodos
const indexController= {
    index: function(req, res) {
        console.log (data)
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
