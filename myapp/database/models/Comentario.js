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
        product_id: {
            type: dataTypes.INTEGER,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        texto_comentario: {
            type: dataTypes.STRING,
        }
        
        /*,
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }*/
    }; 


    //Obj literal pata configurar la tabla
    let config = {
        tableName: 'comentarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
       /* Comentario.belongsTo(models.Usuario, {
            as: "users",
            foreignKey: "user_id"
        })
        
        ,*/
        Comentario.belongsTo(models.Producto, {
            as: "products",
            foreignKey: "product_id"
        })
        
    }

    return Comentario;
        
};