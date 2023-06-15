const db = require('../database/models');
const productos = db.Producto;
const usuario = db.Usuario;
const op = db.Sequelize.Op;

//Aca deberia hacer const db = require('../database/models/Usuarios.js) --> Preguntar lo de Usuarios.js
//Despues hacer const usuarios = db.Usuarios --> (Alias del model que pusimos anteriormente)
// --> PREGUNTAR QUE VA EN INDEX CONTROLLER

//Falta lo de findByPk ---> Para poder hacer lo de relaciones

//metodos
const indexController= {
    index: function(req, res) {
        
        productos.findAll({
            limit : 8,
            order :[["createdAt" , "DESC"]], 
            include: [{association: 'comentario'}, {association: 'usuario'}]
        })
        .then((data)=>{
            return res.render('index', {producto: data})
        })
        
    },
    resultadoBusqueda: function(req, res){
        let queryString = req.query.search;
        productos.findAll({
            order :[["createdAt" , "DESC"]],
            where: {[op.or]: [{productName: {[op.like]: `%${queryString}%`}}, { productDescription: {[op.like]: `%${queryString}%`} }]},
            include: [{association: 'comentario'}, {association: 'usuario'}]
        })
        .then((data)=>{
            
            return res.render('search-results', {producto: data})
        })
        .catch((err)=>{console.log(err);})
        
    }
}

//export
module.exports = indexController
