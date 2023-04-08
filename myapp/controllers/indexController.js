//require

//metodos
const indexController= {
    index: function(req, res) {
        res.render('index')
    },
    resultadoBusqueda: function(req, res){
        res.render('search-results')
    }
}
//export
module.exports = indexController