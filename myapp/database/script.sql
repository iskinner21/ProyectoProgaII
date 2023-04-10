CREATE SCHEMA myapp_db;
USE myapp_db;
CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
username VARCHAR(255) NOT NULL,
birthday DATE NOT NULL,
email VARCHAR(255) NOT NULL,
contra VARCHAR (255) NOT NULL,
img VARCHAR (255) NOT NULL,
dni INT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED NOT NULL,
product_name VARCHAR(255) NOT NULL,
product_description VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,

FOREIGN KEY (user_id) REFERENCES usuarios(id) 
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
product_id INT UNSIGNED NOT NULL,
user_id INT UNSIGNED NOT NULL,
texto_comentario VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (user_id) REFERENCES usuarios(id),
FOREIGN KEY (product_id) REFERENCES productos(id) 
);

INSERT INTO usuarios (id,firstname,lastname,username,birthday,email,contra,img,dni,createdAt,updatedAt)
VALUES 
(DEFAULT, 'Lucas','Alonso','lalonso','2002-06-29','lucasalonso@gmail.com','lualon123','lucas.jpg','44726589',DEFAULT, DEFAULT),
(DEFAULT, 'Martin','Gomez','mgomez','1998-09-21','mgomez@gmail.com','margom123','martin.jpg','39876345',DEFAULT, DEFAULT),
(DEFAULT, 'Beltran','Rodriguez','brodriguez','2003-01-13','lbrodriguez@gmail.com','belrod123','beltran.jpg','45911211',DEFAULT, DEFAULT),
(DEFAULT, 'Andres','Martinez','amartinez','1996-12-21','amartinez@gmail.com','andmar123','andres.jpg','38655566',DEFAULT, DEFAULT),
(DEFAULT, 'Ignacio','Lozano','ilozano','2000-06-01','ilozano@gmail.com','ignloz123','ignacio.jpg','42723304',DEFAULT, DEFAULT)
;

INSERT INTO productos (id, user_id, product_name, product_description, createdAt, updatedAt)
VALUES
(DEFAULT, '6', 'Boca 2021/22', 'Camistea Boca Adidas Titular 2021/22 sponsor QATAR Airways', DEFAULT, DEFAULT),
(DEFAULT, '10', 'River 2022/23', 'Camistea River Adidas Titular 2022/23 sponsor Codere', DEFAULT, DEFAULT),
(DEFAULT, '7', 'Tigre 2022/23', 'Camistea Tigre Kappa Titular 2022/223 sponsor Marco', DEFAULT, DEFAULT),
(DEFAULT, '8', 'Lanus 2019', 'Camistea Lanus Peak Suplente 2019 sponsor YAMAHA', DEFAULT, DEFAULT),
(DEFAULT, '9', 'Gimnasia LP 2022/23', 'Camistea Gimnasia LP Givova Titular 2022/23 sponsor RapiCuotas', DEFAULT, DEFAULT),
(DEFAULT, '6', 'Boca 2007', 'Camistea Boca Nike Suplente 2007 Campeon Copa Libertadores sponsor MEGATONE', DEFAULT, DEFAULT),
(DEFAULT, '10', 'River 1986', 'Camistea River Adidas Suplente 1986 sponsor Fate', DEFAULT, DEFAULT),
(DEFAULT, '7', 'Tigre 2012', 'Camistea Tigre Kappa Suplente 2012 sponsor Macro', DEFAULT, DEFAULT),
(DEFAULT, '7', 'Tigre 2019', 'Camistea Tigre Joma Suplente 2019 Campeon sponsor Macro', DEFAULT, DEFAULT),
(DEFAULT, '8', 'Racing 2019', 'Camistea Racing Kappa Titular 2019 Campeon sponsor RCA', DEFAULT, DEFAULT)
;

INSERT INTO comentarios (id, product_id, user_id, texto_comentario, createdAt, updatedAt)
VALUES
(DEFAULT, '11', '7', 'Increible. Muy buena tela!', DEFAULT, DEFAULT),
(DEFAULT, '11', '8', 'Buena compra, buen vendedor.', DEFAULT, DEFAULT),
(DEFAULT, '11', '9', 'Horrible camiseta', DEFAULT, DEFAULT),
(DEFAULT, '11', '10', 'Me llego todo perfecto, espectacular! Saludos', DEFAULT, DEFAULT),
(DEFAULT, '12', '6', 'Muy linda', DEFAULT, DEFAULT),
(DEFAULT, '12', '8', 'Todo 10 puntos', DEFAULT, DEFAULT),
(DEFAULT, '12', '9', 'Vamos River!', DEFAULT, DEFAULT),
(DEFAULT, '12', '7', 'No me gusto el sponsor', DEFAULT, DEFAULT),
(DEFAULT, '13', '6', 'Muy buenos detalles, espectacular', DEFAULT, DEFAULT),
(DEFAULT, '13', '8', 'Lindos colores', DEFAULT, DEFAULT),
(DEFAULT, '13', '9', 'Me gusta mas la de temporada anterior', DEFAULT, DEFAULT),
(DEFAULT, '13', '10', 'Un lujo, vamos Matador!', DEFAULT, DEFAULT),
(DEFAULT, '14', '6', 'Una reliquia', DEFAULT, DEFAULT),
(DEFAULT, '14', '7', 'Que lundos colores', DEFAULT, DEFAULT),
(DEFAULT, '14', '9', 'Aguante el granate!', DEFAULT, DEFAULT),
(DEFAULT, '14', '10', 'Hay mejores en el mercado, pero igualmente me gusto', DEFAULT, DEFAULT),
(DEFAULT, '15', '7', 'Vamos lobo de mi vida', DEFAULT, DEFAULT),
(DEFAULT, '15', '6', 'Hermosa con todas las letras', DEFAULT, DEFAULT),
(DEFAULT, '15', '8', 'Que linda casaca', DEFAULT, DEFAULT),
(DEFAULT, '15', '10', 'La compre y me llego muy rapido, gracias!', DEFAULT, DEFAULT),
(DEFAULT, '16', '7', 'Un deliria esa camiseta', DEFAULT, DEFAULT),
(DEFAULT, '16', '8', 'Que buenos recuerdos me tare esa casaca, vamos Boca!', DEFAULT, DEFAULT),
(DEFAULT, '16', '9', 'Una pinturita!', DEFAULT, DEFAULT),
(DEFAULT, '16', '10', 'Me hace acordar a Roman y al Titan', DEFAULT, DEFAULT),
(DEFAULT, '17', '6', 'Un espectaculo esta remera', DEFAULT, DEFAULT),
(DEFAULT, '17', '7', 'Hermosa', DEFAULT, DEFAULT),
(DEFAULT, '17', '8', 'No me gusta', DEFAULT, DEFAULT),
(DEFAULT, '17', '9', 'Buenisima!', DEFAULT, DEFAULT),
(DEFAULT, '18', '6', 'Que buenos recuerdos esta camiseta, Subcampeones de la Sudamerica!', DEFAULT, DEFAULT),
(DEFAULT, '18', '8', 'Increible camiseta, parecida a la nueva', DEFAULT, DEFAULT),
(DEFAULT, '18', '9', 'Hermosa', DEFAULT, DEFAULT),
(DEFAULT, '18', '10', 'Ese Tigre de la mano de Pipo fue de lo mejor', DEFAULT, DEFAULT),
(DEFAULT, '19', '6', 'Ese equipo si que daba miedo!', DEFAULT, DEFAULT),
(DEFAULT, '19', '8', 'La compre y demoro en llegar, no recomiendo', DEFAULT, DEFAULT),
(DEFAULT, '19', '9', 'No me gusto la tela, igualmente muy linda', DEFAULT, DEFAULT),
(DEFAULT, '19', '10', 'Que buenos recuerdos, Tigre Campeon un espectaculo!', DEFAULT, DEFAULT),
(DEFAULT, '20', '6', 'Muy linda, jugadorazos usaron esa', DEFAULT, DEFAULT),
(DEFAULT, '20', '7', 'Espectacular la calidad, todo un lujo!', DEFAULT, DEFAULT),
(DEFAULT, '20', '9', 'Me hace acordar a Enzo Copeti, increible casaca', DEFAULT, DEFAULT),
(DEFAULT, '20', '10', 'Me llego rapidisimo, buena atencion al cliente.', DEFAULT, DEFAULT)
;