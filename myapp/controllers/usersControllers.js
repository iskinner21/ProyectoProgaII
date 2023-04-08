//require

//metodos
const usersController= {
    login: function(req, res) {
        res.render('login')
    },
    profile: function(req, res){
        res.render('profile')
    },
    profileEdit: function(req, res){
        res.render('profile-edit')
    },
    register: function(req, res){
        res.render('register')
    }

}
//export
module.exports = usersController