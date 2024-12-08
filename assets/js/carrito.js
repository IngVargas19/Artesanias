
//DOM
document.addEventListener('DOMContentLoaded', () => { 
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Sombrero vueltiao con la bandera de Colombia, 23 vueltas',
            precio: 250000,
            imagen: '/img/feature_prod_01.jpg',
            categoria: 'sombreros'
        },
        {
            id: 2,
            nombre: 'Sombrero vueltiao-machiembriao',
            precio: 150000,
            imagen: '/img/sombrero4.jpg',
            categoria: 'sombreros'
        },
        {
            id: 3,
            nombre: 'Sombrero vueltiao colombiano 15 vueltas tricolor',
            precio: 250000,
            imagen: '/img/feature_prod_02.jpg',
            categoria: 'sombreros'
        },
        
        {
            id: 4,
            nombre: 'Sombrero Borsalino',
            precio: 120000,
            imagen: '/img/sombreros/Sombrero-Aguadeno-Borsalino-precio 120.000.webp',
            categoria: 'sombreros'
        },
        {
            id: 5,
            nombre: 'Sombrero Aguadeno Brio',
            precio: 130000,
            imagen: '/img/sombreros/sombrero-aguadeno-brio precio 130.000.webp',
            categoria: 'sombreros'
        },
        {
            id: 6,
            nombre: 'Sombrero Aguadeno Marlboro',
            precio: 130000,
            imagen: '/img/sombreros/Sombrero-aguadeno-Marlboro precio 130.000.webp',
            categoria: 'sombreros'
        },
        {
            id: 7,
            nombre: 'Sombrero Cordobes',
            precio: 130000,
            imagen: '/img/sombreros/Sombrero-cordobes-130.000.webp',
            categoria: 'sombreros'
        },
        {
            id: 8,
            nombre: 'Hamaca Luciana Costeña',
            precio: 150000,
            imagen: '/img/hamacas/hamaca-luciana-costena-con-flecos-costeña precio 150.000.webp',
            categoria: 'hamacas'
        },
        {
            id: 9,
            nombre: 'Hamaca Marroqui',
            precio: 230000,
            imagen: '/img/hamacas/hamaca-marroquis-extradoble-sin-flecos-abierta, precio 230.000.webp',
            categoria: 'hamacas'
        },
        {
            id: 10,
            nombre: 'Hamaca Luciana',
            precio: 150000,
            imagen: '/img/hamacas/hamaca-luciana-artesanal-con-flecos precio 150.000.webp',
            categoria: 'hamacas'
        },
        {
            id: 11,
            nombre: 'Hamaca Doble',
            precio: 150000,
            imagen: '/img/hamacas/hamaca-doble-con-palo-en-hilaza, precio 150.000.webp',
            categoria: 'hamacas'
        },
        {
            id: 12,
            nombre: 'Hamaca Silla Tipo Columpio',
            precio: 150000,
            imagen: '/img/hamacas/hamaca-silla-tipo-columpio precio 150.000.webp',
            categoria: 'hamacas'
        },
        {
            id: 13,
            nombre: 'Mochila Arhuaca Grande',
            precio: 526000,
            imagen: '/img/mochilas/mochila arhuaca grande original tejida a mano, precio 526.000.webp',
            categoria: 'mochilas'
        },
        {
            id: 14,
            nombre: 'Mochila Arhuaca Mediana',
            precio: 488000,
            imagen: '/img/mochilas/mochila arhuca mediana original tejida a mano, precio 488.000.webp',
            categoria: 'mochilas'
        },
        {
            id: 15,
            nombre: 'Mochila en Fique Original',
            precio: 223000,
            imagen: '/img/mochilas/mochila en fique original tejida a mano, precio 223.000.webp',
            categoria: 'mochilas'
        },
        {
            id: 16,
            nombre: 'Mochila Fina Wayuu',
            precio: 405000,
            imagen: '/img/mochilas/mochila fina wayuu original tejida a mano precio405.000.webp',
            categoria: 'mochilas'
        },
        {
            id: 17,
            nombre: 'Mochila Wayuu Original',
            precio: 445000,
            imagen: '/img/mochilas/mochila fina wayuu original tejida a mano, precio 445.000.webp',
            categoria: 'mochilas'
        },
        {
            id: 18,
            nombre: 'Mochila Wayuu Colombiana',
            precio: 166000,
            imagen: '/img/mochilas/mochila wayuu colombiana precio 166.000.jpg',
            categoria: 'mochilas'
        },
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
    const filtroSelect = document.getElementById("filtro");

    // Funciones

    function renderizarProductos() {
        DOMitems.innerHTML = "";
        const filtro = filtroSelect.value;
        const productosFiltrados = baseDeDatos.filter(producto => 
            filtro === "todas" || producto.categoria === filtro
        );
        productosFiltrados.forEach((info) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            const miNodoTitle = document.createElement('h6');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
// Obtén el contador del almacenamiento local
    let visitas = localStorage.getItem('contadorVisitas');
// Si no hay visitas almacenadas, inicializa a 0
    if (!visitas) {
        visitas = 0;
    }
// Incrementa el contador
    visitas++;
// Guarda el nuevo contador en el almacenamiento local
    localStorage.setItem('contadorVisitas', visitas);
// Muestra el contador en la página
    document.getElementById('contador').textContent = visitas;
    function anadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'));
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }
    function handleCarritoValue(value) {
        const carritoContainer = document.getElementById("carrito-value");
        carritoContainer.textContent = `${value}`;
    }
    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }
    //borra carrito
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }
    //calcular el total
    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }
    //vaciar todos los elementos del carrito
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
    }
    //guardar en local el carrito
    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
    //cargar del local el carriro
    function cargarCarritoDeLocalStorage() {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            handleCarritoValue(carrito.length);
        }
    }
    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    filtroSelect.addEventListener('change', renderizarProductos);
    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});