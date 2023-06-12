//Es una funcion que recibe 2 parametros
module.exports = function(sequelize, dataTypes){
    //Crear 3 variables
    //Un apodo ara requerirlo en el controlador
    let alias = "Comentario";

    //Mapeo exacto de cada una de las columnas
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        productId: {
            type: dataTypes.INTEGER,
        },
        usuarioId: {
            type: dataTypes.INTEGER,
        },
        textoComentario: {
            type: dataTypes.STRING,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        }
    }; 


    //Obj literal pata configurar la tabla
    let config = {
        tableName: 'Comentarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        }),
       Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "productId"
        });
        
    }

    return Comentario;
        
};