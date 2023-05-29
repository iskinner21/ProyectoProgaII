//Es una funcion que recibe 2 parametros
module.exports = function(sequelize, dataTypes){
    //Crear 3 variables
    //Un apodo ara requerirlo en el controlador
    let alias = "Usuario";

    //Mapeo exacto de cada una de las columnas
    let cols = { 
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
    },
    firstname:{
        type: dataTypes.STRING,
    },
    lastname:{
        type: dataTypes.STRING,
    },
    username:{
        type: dataTypes.STRING,
    },
    birthday:{
        type: dataTypes.DATE,
    },
    email:{
        type: dataTypes.STRING,
    },
    contra: {
        type: dataTypes.STRING,
    },
    img: {
        type: dataTypes.STRING,
    },
    dni:{
        type: dataTypes.INTEGER,
    },
    created_at:{
        type: dataTypes.DATE,
    },
    updated_at:{
        type: dataTypes.DATE,
    },
    }; 

    //Obj literal pata configurar la tabla
    let config = {
        tableName: 'usuarios',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "user_id",
        });
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreingnKey: "user_id", 
        });
        
    }

    return Usuario
        
};