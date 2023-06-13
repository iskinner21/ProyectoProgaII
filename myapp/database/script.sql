CREATE SCHEMA myapp_db;
USE myapp_db;
CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
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
usuarioId INT UNSIGNED NOT NULL,
productImg VARCHAR(255) NOT NULL,
productName VARCHAR(255) NOT NULL,
productDescription VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,

FOREIGN KEY (usuarioId) REFERENCES usuarios(id) 
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productId INT UNSIGNED NOT NULL,
usuarioId INT UNSIGNED NOT NULL,
textoComentario VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
FOREIGN KEY (productId) REFERENCES productos(id) 
);

INSERT INTO usuarios (id,firstname,lastname,username,birthday,email,contra,img,dni,createdAt,updatedAt)
VALUES 
(DEFAULT, 'Lucas','Alonso','lalonso','2002-06-29','lucasalonso@gmail.com','lualon123','lucas.jpg','44726589',DEFAULT, DEFAULT),
(DEFAULT, 'Martin','Gomez','mgomez','1998-09-21','mgomez@gmail.com','margom123','martin.jpg','39876345',DEFAULT, DEFAULT),
(DEFAULT, 'Beltran','Rodriguez','brodriguez','2003-01-13','lbrodriguez@gmail.com','belrod123','beltran.jpg','45911211',DEFAULT, DEFAULT),
(DEFAULT, 'Andres','Martinez','amartinez','1996-12-21','amartinez@gmail.com','andmar123','andres.jpg','38655566',DEFAULT, DEFAULT),
(DEFAULT, 'Ignacio','Lozano','ilozano','2000-06-01','ilozano@gmail.com','ignloz123','ignacio.jpg','42723304',DEFAULT, DEFAULT)
;

INSERT INTO productos (id, usuarioId, productImg, productName, productDescription, createdAt, updatedAt)
VALUES
(DEFAULT, '1', "/images/products/Boca2021.jpg", 'Boca 2021/22', 'Camistea Boca Adidas Titular 2021/22 sponsor QATAR Airways', DEFAULT, DEFAULT),
(DEFAULT, '5', "/images/products/River2022.jpg", 'River 2022/23', 'Camistea River Adidas Titular 2022/23 sponsor Codere', DEFAULT, DEFAULT),
(DEFAULT, '2', "/images/products/Tigre2023.jpg", 'Tigre 2022/23', 'Camistea Tigre Kappa Titular 2022/223 sponsor Marco', DEFAULT, DEFAULT),
(DEFAULT, '3', "/images/products/Lanus2019.jpg", 'Lanus 2019', 'Camistea Lanus Peak Suplente 2019 sponsor YAMAHA', DEFAULT, DEFAULT),
(DEFAULT, '4', "/images/products/GimnasiaLP2022.jpg", 'Gimnasia LP 2022/23', 'Camistea Gimnasia LP Givova Titular 2022/23 sponsor RapiCuotas', DEFAULT, DEFAULT),
(DEFAULT, '1', "/images/products/Boca2007.jpg", 'Boca 2007', 'Camistea Boca Nike Suplente 2007 Campeon Copa Libertadores sponsor MEGATONE', DEFAULT, DEFAULT),
(DEFAULT, '5', "/images/products/River1986.jpg", 'River 1986', 'Camistea River Adidas Suplente 1986 sponsor Fate', DEFAULT, DEFAULT),
(DEFAULT, '2', "/images/products/Tigre2012.jpg", 'Tigre 2012', 'Camistea Tigre Kappa Suplente 2012 sponsor Macro', DEFAULT, DEFAULT),
(DEFAULT, '2', "/images/products/Tigre2019.jpg", 'Tigre 2019', 'Camistea Tigre Joma Suplente 2019 Campeon sponsor Macro', DEFAULT, DEFAULT),
(DEFAULT, '3', "/images/products/Racing2019.jpg", 'Racing 2019', 'Camistea Racing Kappa Titular 2019 Campeon sponsor RCA', DEFAULT, DEFAULT)
;

INSERT INTO comentarios (id, productId, usuarioId, textoComentario, createdAt, updatedAt)
VALUES
(DEFAULT, '1', '2', 'Increible. Muy buena tela!', DEFAULT, DEFAULT),
(DEFAULT, '1', '3', 'Buena compra, buen vendedor.', DEFAULT, DEFAULT),
(DEFAULT, '1', '4', 'Horrible camiseta', DEFAULT, DEFAULT),
(DEFAULT, '1', '5', 'Me llego todo perfecto, espectacular! Saludos', DEFAULT, DEFAULT),
(DEFAULT, '2', '1', 'Muy linda', DEFAULT, DEFAULT),
(DEFAULT, '2', '3', 'Todo 10 puntos', DEFAULT, DEFAULT),
(DEFAULT, '2', '4', 'Vamos River!', DEFAULT, DEFAULT),
(DEFAULT, '2', '2', 'No me gusto el sponsor', DEFAULT, DEFAULT),
(DEFAULT, '3', '1', 'Muy buenos detalles, espectacular', DEFAULT, DEFAULT),
(DEFAULT, '3', '3', 'Lindos colores', DEFAULT, DEFAULT),
(DEFAULT, '3', '4', 'Me gusta mas la de temporada anterior', DEFAULT, DEFAULT),
(DEFAULT, '3', '5', 'Un lujo, vamos Matador!', DEFAULT, DEFAULT),
(DEFAULT, '4', '1', 'Una reliquia', DEFAULT, DEFAULT),
(DEFAULT, '4', '2', 'Que lundos colores', DEFAULT, DEFAULT),
(DEFAULT, '4', '4', 'Aguante el granate!', DEFAULT, DEFAULT),
(DEFAULT, '4', '5', 'Hay mejores en el mercado, pero igualmente me gusto', DEFAULT, DEFAULT),
(DEFAULT, '5', '2', 'Vamos lobo de mi vida', DEFAULT, DEFAULT),
(DEFAULT, '5', '1', 'Hermosa con todas las letras', DEFAULT, DEFAULT),
(DEFAULT, '5', '3', 'Que linda casaca', DEFAULT, DEFAULT),
(DEFAULT, '5', '5', 'La compre y me llego muy rapido, gracias!', DEFAULT, DEFAULT),
(DEFAULT, '6', '2', 'Un deliria esa camiseta', DEFAULT, DEFAULT),
(DEFAULT, '6', '3', 'Que buenos recuerdos me tare esa casaca, vamos Boca!', DEFAULT, DEFAULT),
(DEFAULT, '6', '4', 'Una pinturita!', DEFAULT, DEFAULT),
(DEFAULT, '6', '5', 'Me hace acordar a Roman y al Titan', DEFAULT, DEFAULT),
(DEFAULT, '7', '1', 'Un espectaculo esta remera', DEFAULT, DEFAULT),
(DEFAULT, '7', '2', 'Hermosa', DEFAULT, DEFAULT),
(DEFAULT, '7', '3', 'No me gusta', DEFAULT, DEFAULT),
(DEFAULT, '7', '4', 'Buenisima!', DEFAULT, DEFAULT),
(DEFAULT, '8', '1', 'Que buenos recuerdos esta camiseta, Subcampeones de la Sudamerica!', DEFAULT, DEFAULT),
(DEFAULT, '8', '3', 'Increible camiseta, parecida a la nueva', DEFAULT, DEFAULT),
(DEFAULT, '8', '4', 'Hermosa', DEFAULT, DEFAULT),
(DEFAULT, '8', '5', 'Ese Tigre de la mano de Pipo fue de lo mejor', DEFAULT, DEFAULT),
(DEFAULT, '9', '1', 'Ese equipo si que daba miedo!', DEFAULT, DEFAULT),
(DEFAULT, '9', '3', 'La compre y demoro en llegar, no recomiendo', DEFAULT, DEFAULT),
(DEFAULT, '9', '4', 'No me gusto la tela, igualmente muy linda', DEFAULT, DEFAULT),
(DEFAULT, '9', '5', 'Que buenos recuerdos, Tigre Campeon un espectaculo!', DEFAULT, DEFAULT),
(DEFAULT, '10', '1', 'Muy linda, jugadorazos usaron esa', DEFAULT, DEFAULT),
(DEFAULT, '10', '2', 'Espectacular la calidad, todo un lujo!', DEFAULT, DEFAULT),
(DEFAULT, '10', '4', 'Me hace acordar a Enzo Copeti, increible casaca', DEFAULT, DEFAULT),
(DEFAULT, '10', '5', 'Me llego rapidisimo, buena atencion al cliente.', DEFAULT, DEFAULT)
;