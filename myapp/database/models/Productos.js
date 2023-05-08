//Es una funcion que recibe 2 parametros
module.exports = function(sequelize, dataType){
    //Crear 3 variables
    //Un apodo ara requerirlo en el controlador
    let alias = "Productos";

    //Mapeo exacto de cada una de las columnas
    let col = {
    }; 

    //Obj literal pata configurar la tabla
    let config = {
        tableName: 'productos',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Productos = sequelize.define(alias, col, config);

    return Productos
        
};