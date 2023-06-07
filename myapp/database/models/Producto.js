//Es una funcion que recibe 2 parametros
module.exports = function(sequelize, dataTypes){
    //Crear 3 variables
    //Un apodo ara requerirlo en el controlador
    let alias = "Producto";

    //Mapeo exacto de cada una de las columnas
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        product_img: {
            type: dataTypes.STRING,
        },
        product_name: {
            type: dataTypes.STRING,
        },
        product_description: {
            type: dataTypes.STRING,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    }; 

    //Obj literal pata configurar la tabla
    let config = {
        tableName: 'productos',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "user",
            foreignKey: "user_id",
        }),
        Producto.hasMany(models.Comentario, {
            as: "comments",
            foreignKey: "product_id",
        });
      
        
        
    }

    return Producto
        
};