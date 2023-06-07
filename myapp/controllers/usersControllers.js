//require
const db = require('../database/models');
const usuario = db.Usuarios;
let op = db.Sequelize.Op
//Aca deberia hacer const db = require('../database/models/Usuarios.js) --> Preguntar lo de Usuarios.js
//Despues hacer const usuarios = db.Usuarios --> (Alias del model que pusimos anteriormente)

let controller = {
    show: (req, res) => {
        let id = req.params.id;

        db.Product.findByPk(req.params.id, {
                include: [{
                        association: 'comments',
                        include: {
                            association: 'user'
                        }
                    }, // Relación comentario producto y relación comentario usuario
                    {
                        association: 'user'
                    }, // Relación producto usuario

                ],
            })
    },
}
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

//export
module.exports = usersController 