//require
const data = require('../data/models')
//Aca deberia hacer const db = require('../database/models/Usuarios.js) --> Preguntar lo de Usuarios.js
//Despues hacer const usuarios = db.Usuarios --> (Alias del model que pusimos anteriormente)

//metodos
const usersController= {
    login: function(req, res) {
        res.render('login')
    },
    profile: function(req, res){
        res.render('profile', {
            productos: data.productos,
            comentarios: data.comentarios , 
            usuario: data.usuario[0]


        })
    },
    profileEdit: function(req, res){
        res.render('profile-edit', {usuario: data.usuario[0]})
    },
    register: function(req, res){
        res.render('register')
    }

}
//relaciones --> Ver clase 11/05 y 15/05 para entender esta parte
let rel = {
    include: {
        all: true, 
        nested: true
    }
}
//export
module.exports = usersController