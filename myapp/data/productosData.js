let data = {
    usuario: [
        {
            id_usuario: 1,
            email: 'lucasalonso@gmail.com',
            usuario: 'lalonso',
            contraseña: 'lualon123',
            fechaDeNacimiento: '29-06-2002',
            nroDeDocumento: '44726589',
            fotoDePerfil: '/users/default-image.png'
        },
        {
            id_usuario: 2,
            email: 'mgomez@gmail.com',
            usuario: 'mgomez',
            contraseña: 'margom123',
            fechaDeNacimiento: '21-09-1998',
            nroDeDocumento: '39876345',
            fotoDePerfil: '/users/default-image.png'
        },
        {
            id_usuario: 3,
            email: 'lbrodriguez@gmail.com',
            usuario: 'brodriguez',
            contraseña: 'belrod123',
            fechaDeNacimiento: '13-01-2003',
            nroDeDocumento: '45911211',
            fotoDePerfil: '/users/default-image.png'
        },
        {
            id_usuario: 4,
            email: 'amartinez@gmail.com',
            usuario: 'amartinez',
            contraseña: 'andmar123',
            fechaDeNacimiento: '21-12-1996',
            nroDeDocumento: '38655566',
            fotoDePerfil: '/users/default-image.png'
        },
        {
            id_usuario: 5,
            email: 'ilozano@gmail.com',
            usuario: 'ilozano',
            contraseña: 'ignloz123',
            fechaDeNacimiento: '01-06-200',
            nroDeDocumento: '42723304',
            fotoDePerfil: '/users/default-image.png'
        },
    ],  
    productos: [
        {
            id_producto: 1,
            id_usuario: 1,
            imagen: '/imagenes/products/Boca2021.jpg',
            nombre: "Boca 2021/22",
            descripcion: 'Camistea Boca Adidas Titular 2021/22 sponsor QATAR Airways',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 2,
            id_usuario: 1,
            imagen: '/imagenes/products/River2022.jpg',
            nombre:  'River 2022/23',
            descripcion: 'Camistea River Adidas Titular 2022/23 sponsor Codere',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 3,
            id_usuario: 2,
            imagen: '/imagenes/products/Tigre2023.jpg',
            nombre: 'Tigre 2022/23',
            descripcion: 'Camistea Tigre Kappa Titular 2022/223 sponsor Marco',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 4,
            id_usuario: 2,
            imagen: '/imagenes/products/Lanus2019.jpg',
            nombre: 'Lanus 2019',
            descripcion: 'Camistea Lanus Peak Suplente 2019 sponsor YAMAHA',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 5,
            id_usuario: 3,
            imagen: '/imagenes/products/GimnasiaLP2022.jpg',
            nombre: 'Gimnasia LP 2022/23',
            descripcion: 'Camistea Gimnasia LP Givova Titular 2022/23 sponsor RapiCuotas',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 6,
            id_usuario: 3,
            imagen: '/imagenes/products/Boca2007.jpg',
            nombre: 'Boca 2007',
            descripcion: 'Camistea Boca Nike Suplente 2007 Campeon Copa Libertadores sponsor MEGATONE',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 7,
            id_usuario: 4,
            imagen: '/imagenes/products/River1986.jpg',
            nombre: 'River 1986',
            descripcion: 'Camistea River Adidas Suplente 1986 sponsor Fate',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 8,
            id_usuario: 4,
            imagen: '/imagenes/products/Tigre2012.jpg',
            nombre: 'Tigre 2012',
            descripcion: 'Camistea Tigre Kappa Suplente 2012 sponsor Macro',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 9,
            id_usuario: 5,
            imagen: '/imagenes/products/Tigre2019.jpg',
            nombre: 'Tigre 2019',
            descripcion: 'Camistea Tigre Joma Suplente 2019 Campeon sponsor Macro',
            fechaDeCarga: '10/04/2023',
    
        },
        {
            id_producto: 10,
            id_usuario: 5,
            imagen: '/imagenes/products/Racing2019.jpg',
            nombre: 'Racing 2019',
            descripcion: 'Camistea Racing Kappa Titular 2019 Campeon sponsor RCA',
            fechaDeCarga: '10/04/2023',
    
        },
    ],
    comentarios: [
        
        //Producto 1
        {
            id_usuario: 5,
            id_producto: 1,
            nombre: "Ignacio Lozano",
            comentario: "Increible. Muy buena tela!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 2,
            id_producto: 1,
            nombre: "Martin Gomez",
            comentario: "Buena compra, buen vendedor.",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 1,
            nombre: "Beltran Rodriguez",
            comentario: "'Horrible camiseta'",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 1,
            nombre: "Andres Martinez",
            comentario: "Me llego todo perfecto, espectacular! Saludos",
            imagen: "/users/default-image.png",
        },
        //Producto 2
        {
            id_usuario: 2,
            id_producto: 2,
            nombre: "Martin Gomez",
            comentario: "Muy linda",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 2,
            nombre: "Beltran Rodriguez",
            comentario: "Todo 10 puntos",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 2,
            nombre: "Andres Martinez",
            comentario: "Vamos River!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 5,
            id_producto: 2,
            nombre: "Ignacio Lozano",
            comentario: "No me gusto el sponsor",
            imagen: "/users/default-image.png",
        },
        //Producto 3
        {
            id_usuario: 1,
            id_producto: 3,
            nombre: "Lucas Alonso",
            comentario: "Muy buenos detalles, espectacular",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 3,
            nombre: "Beltran Rodriguez",
            comentario: "Lindos colores",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 3,
            nombre: "Andres Martinez",
            comentario: "Me gusta mas la de temporada anterior",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 5,
            id_producto: 3,
            nombre: "Ignacio Lozano",
            comentario: "Un lujo, vamos Matador!",
            imagen: "/users/default-image.png",
        },
        //Producto 4
        {
            id_usuario: 1,
            id_producto: 4,
            nombre: "Lucas Alonso",
            comentario: "Una reliquia",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 4,
            nombre: "Beltran Rodriguez",
            comentario: "Que lundos colores",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 4,
            nombre: "Andres Martinez",
            comentario: "Aguante el granate!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 5,
            id_producto: 4,
            nombre: "Ignacio Lozasno",
            comentario: "Hay mejores en el mercado, pero igualmente me gusto",
            imagen: "/users/default-image.png",
        },
        //Producto 5
        {
            id_usuario: 1,
            id_producto: 5,
            nombre: "Lucas Alonso",
            comentario: "Vamos lobo de mi vida",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 2,
            id_producto: 5,
            nombre: "Martin Gomez",
            comentario: "Hermosa con todas las letras",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 5,
            nombre: "Andres Martinez",
            comentario: "Que linda casaca",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 5,
            id_producto: 5,
            nombre: "Ignacio Lozano",
            comentario: "La compre y me llego muy rapido, gracias!",
            imagen: "/users/default-image.png",
        },
        //Producto 6
        {
            id_usuario: 1,
            id_producto: 6,
            nombre: "Lucas Alonso",
            comentario: "Un deliria esa camiseta",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 2,
            id_producto: 6,
            nombre: "Martin Gomez",
            comentario: "Que buenos recuerdos me tare esa casaca, vamos Boca!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 6,
            nombre: "Andres Martinez",
            comentario: "Una pinturita!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 5,
            id_producto: 6,
            nombre: "Ignacio Lozano",
            comentario: "Me hace acordar a Roman y al Titan",
            imagen: "/users/default-image.png",
        },
        //Producto 7
        {
            id_usuario: 1,
            id_producto: 7,
            nombre: "Lucas Alonso",
            comentario: "Un espectaculo esta remera",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 2,
            id_producto: 7,
            nombre: "Martin Gomez",
            comentario: "Hermosa",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 7,
            nombre: "Beltran Rodriguez",
            comentario: "No me gusta",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 5,
            id_producto: 7,
            nombre: "Ignacio Lozano",
            comentario: "Buenisima!",
            imagen: "/users/default-image.png",
        },
        //Producto 8 
        {
            id_usuario: 1,
            id_producto: 8,
            nombre: "Lucas Alonso",
            comentario: "Que buenos recuerdos esta camiseta, Subcampeones de la Sudamerica!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 2,
            id_producto: 8,
            nombre: "Martin Gomez",
            comentario: "Increible camiseta, parecida a la nueva",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 8,
            nombre: "Beltran Rodriguez",
            comentario: "Hermosa",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 5,
            id_producto: 8,
            nombre: "Ignacio Lozano",
            comentario: "Ese Tigre de la mano de Pipo fue de lo mejor",
            imagen: "/users/default-image.png",
        },
        //Producto 9
        {
            id_usuario: 1,
            id_producto: 9,
            nombre: "Lucas Alonso",
            comentario: "Ese equipo si que daba miedo!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 2,
            id_producto: 9,
            nombre: "Martin Gomez",
            comentario: "La compre y demoro en llegar, no recomiendo",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 9,
            nombre: "Beltran Rodriguez",
            comentario: "No me gusto la tela, igualmente muy linda",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 9,
            nombre: "Andres Martinez",
            comentario: "Que buenos recuerdos, Tigre Campeon un espectaculo!",
            imagen: "/users/default-image.png",
        },
        //Producto 10
        {
            id_usuario: 1,
            id_producto: 10,
            nombre: "Lucas Alonso",
            comentario: "Muy linda, jugadorazos usaron esa",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 2,
            id_producto: 10,
            nombre: "Martin Gomez",
            comentario: "Espectacular la calidad, todo un lujo!",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 3,
            id_producto: 10,
            nombre: "Beltran Rodriguez",
            comentario: "Me hace acordar a Enzo Copeti, increible casaca",
            imagen: "/users/default-image.png",
        },
        {
            id_usuario: 4,
            id_producto: 10,
            nombre: "Andres Martinez",
            comentario: "Me llego rapidisimo, buena atencion al cliente.",
            imagen: "/users/default-image.png",
        },
    ]
};