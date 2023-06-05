const db = require('../database/models')
const productos = db.Producto
let op = db.Sequelize.Op
//Aca deberia hacer const db = require('../database/models/Usuarios.js) --> Preguntar lo de Usuarios.js
//Despues hacer const usuarios = db.Usuarios --> (Alias del model que pusimos anteriormente)
// --> PREGUNTAR QUE VA EN INDEX CONTROLLER

//Falta lo de findByPk ---> Para poder hacer lo de relaciones

//metodos
const indexController= {
    index: function(req, res) {
        productos.findAll({
            limit : 8,
            order :[["created_at" , "DESC"]], 
            include: [{ association : "user"}]
        })
        .then((data) => {
         //return res.send(data)
            return res.render('index', {
                 productos: data,
                 comentarios: [1, 2, 3, 4, 5],
                 UserLog: false
             })
        })
        .catch((error) => [
            console.log(error)
        ])
    },
    resultadoBusqueda: function(req, res){
        return res.render('resultadoBusqueda')
    }
}

//export
module.exports = indexController
