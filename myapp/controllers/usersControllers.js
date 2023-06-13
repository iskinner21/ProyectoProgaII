//require
const db = require('../database/models');
const usuario = db.Usuario;
const bcryptjs = require('bcryptjs') // requerimos el modulo bcryptjs que nos permitira encriptar y desencriptar datos
let op = db.Sequelize.Op
//Aca deberia hacer const db = require('../database/models/Usuarios.js) --> Preguntar lo de Usuarios.js
//Despues hacer const usuarios = db.Usuarios --> (Alias del model que pusimos anteriormente)

const usersController= {
    register: function(req, res){
        res.render('register')
    },
    registro_de_datos: function (req, res) {
        //Validamos los datos, primero la contraseña asi evitamos que haga una consulta y no gastamos recursos innecesarios.
        let errors = {}
        if(req.body.password.length < 4){
            errors.message = 'La contraseña debe tener mas de 3 caracteres'
            res.locals.errors = errors
            return res.render('register')
        }
        //Validamos el email
        else{
            usuario.findOne({
                where: [{email: req.body.email}]
            })
            .then((data)=>{
                console.log(data);
                //En el caso de que exista el email, data contendra los datos de ese registro siendo true, en el caso de que no hayan datos data sera false
                if(data){ 
                    errors.message = 'El email ya esta registrado'
                    res.locals.errors = errors
                    return res.render('register')
                }
                else{
                    usuario.create({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username: req.body.usuario,
                        birthday: req.body.DateOfBirth,
                        email: req.body.email,
                        contra: bcryptjs.hashSync(req.body.password, req.body.password.length),//Encriptamos la contrasna usando el modulo Bcryptjs
                        img: req.body.FotoDePerfil,
                        dni: req.body.NumeroDoc
                    })
                    return res.redirect('/users/login')
                }
                
            })
            .catch((err)=>{console.log(err);})
        }
        
    },
    login: function(req, res) {
        return res.render('login')
    },
    login_check: function(req, res){
        //Punto 3 login check
        let errors = {}
        const email = req.body.email
        usuario.findOne({
            where: [{email: email}]
        })
        .then((data)=>{
            if(data){
                const contra = req.body.password
                if(bcryptjs.compareSync(contra, data.contra)){
                    //Aca el usuario se logueo correctamente
                    req.session.UserName = data
                    return res.redirect('/')
                }
                else{
                    errors.message = 'La contrasena ingresada para este email es erronea'
                    res.locals.errors = errors
                    return res.render('login')
                }
            }
            else{
                errors.message = 'El email ingresado no se encuentra registrado'
                res.locals.errors = errors
                return res.render('login')
            }
        })
        
    },
    logout: function (req, res) {
        //punto cuatro logout
        req.session.destroy()
        return res.redirect('/')
    },
    profile: function(req, res){
        let id = req.params.id;
        usuario.findByPk(id, {
            include: [{association: 'comentarios'}, {association: 'producto', include: [{association: 'comentario'}]}],
            
        })
        .then((data)=>{
            
            return res.render('profile', {usuario: data, productos: data.producto})
        })
        .catch((err)=>{console.log(err);})
        
    },
    profileEdit: function(req, res){
        res.render('profile-edit', {usuario: data.usuario[0]})
    },
    

}

//export
module.exports = usersController 