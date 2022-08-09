//MENU

let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');
let cerrar = document.querySelector('#cerrar');
const logo = document.getElementById('logo');

logo.addEventListener("click", () =>{
    window.open("../index.html", "_self");
});

menu.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

cerrar.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

//MODELO

let zapatillas = document.getElementById("modelo");

const pedirPost = async () => {
    const resp = await fetch('./../json/zapatillas.json')
    const data = await resp.json()
    const llamarJSON = JSON.parse(localStorage.getItem(`equipo`));
    data.forEach( (model) => {
        if(llamarJSON == model.equipo){
            let contModelos = document.createElement("div");
        contModelos.classList.add("modelos");
        contModelos.innerHTML = `<img src="${model.imagen}" alt="">
                                <p>${model.nombre.toUpperCase()}</p>
                                <div class="card-jugador">${model.jugador}</div>
                                <div class="card-precio">$${model.precio}</div>
                                <div class="comprar">
                                    <input type="button" value="COMPRAR" name="comprar" class="botonComprar" id="comprar-${model.id}">
                                    <img src="../img/bx-cart-add.svg" alt="" class="carrito" id="${model.carrito}">
                                </div>`;
        zapatillas.appendChild(contModelos);
        }
    })
}

pedirPost();

//AGREGAR CARRITO

const carritoJSON = []

const buscarModelo = async (carro) => {
    const resp = await fetch('./../json/zapatillas.json')
    const data = await resp.json()
    data.forEach( (model) => {
        if(model.carrito == carro){
            agregarCarrito(model);
        }
    })
}

const agregarCarrito = (modeloCarrito) => {
    const llamarJSON = JSON.parse(localStorage.getItem(`carrito`));

    if (llamarJSON == undefined) {
        carritoJSON.push(modeloCarrito);
        const agregar = JSON.stringify(carritoJSON);
        localStorage.setItem(`carrito`, agregar);
    }else{
        llamarJSON.push(modeloCarrito);
        const agregar = JSON.stringify(llamarJSON);
        localStorage.setItem(`carrito`, agregar);
    }
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Agregado al carrito'
    })
}

let carrito = {};

const modelo = document.getElementById('modelo');

modelo.addEventListener("click", e =>{
    obtener(e);
    comprar(e);
});

const obtener = e => {
    if(e.target.classList.contains('carrito')){
        buscarModelo(e.target.id);
    }
}

//ELIMINAR CARRITO

const eliminarProducto = (modeloPorducto) => {
    const llamarJSON = JSON.parse(localStorage.getItem(`carrito`));
    console.log(modeloPorducto.parentNode);
    const nuevoJSON = [];

    llamarJSON.forEach( (objetoEliminado) => {
        if(objetoEliminado.id != modeloPorducto.parentNode.id){
            nuevoJSON.push(objetoEliminado);
        }
    });

    const agregar = JSON.stringify(nuevoJSON);
    localStorage.setItem(`carrito`, agregar);
    containerCarrito.classList.toggle("ocultarCarrito");
    
}

const eliminar = e => {
    if(e.target.classList.contains('eliminarCarrito')){
        eliminarProducto(e.target);
    }
}

const containerProductos = document.getElementById('productos');

containerProductos.addEventListener("click", (e) =>{
    eliminar(e)
});

//MOSTRAR CARRITO

const mostrarCarrito = document.getElementById("carrito-menu");
const containerCarrito = document.getElementById('container-productoCarrito');


const traerDatos = async () => {
    const llamarJSON = await JSON.parse(localStorage.getItem(`carrito`));

    if (llamarJSON == null) {
        containerProductos.innerHTML = "";
    } else {
        containerProductos.innerHTML = "";

        for (let i = 0; i < llamarJSON.length; i++) {
            const aparecerModelo = llamarJSON[i];
            containerProductos.innerHTML += `<div id="${aparecerModelo.id}" class="productoCarrito none">
                                             <img src="${aparecerModelo.imagen}" alt="">
                                             <p>${aparecerModelo.nombre.toUpperCase()}</p>
                                             <input type="button" value="ELIMINAR" name="comprar" class="eliminarCarrito" id="">
                                         </div>`;
        }
    }
}

mostrarCarrito.addEventListener("click", () =>{
    containerCarrito.classList.toggle("ocultarCarrito");
    traerDatos();
});

//BUSCADOR

const botonBuscador = document.getElementById('botonBuscador');

const buscar = () => {
    const buscador = document.getElementById('buscador');
    pedirPostBuscador(buscador.value);
}

const pedirPostBuscador = async (valor) => {
    const resp = await fetch('./../json/zapatillas.json')
    const data = await resp.json()

    const objetoBuscar = [];
    data.forEach( (modeloBuscar) => {
        if(modeloBuscar.nombre.includes(valor.toLowerCase())){
            objetoBuscar.push(modeloBuscar);
        }
    })
    localStorage.setItem(`buscador`, JSON.stringify(objetoBuscar));
    window.open("buscador.html", "_self");
}

botonBuscador.addEventListener("click", () =>{
    buscar();
});

//COMPRAR

const comprarProducto = (modeloPorducto) => {
    Swal.fire({
        icon: 'error',
        title: 'Disculpe',
        text: 'Aún no esta habilitada esta opcion!',
        footer: '<a href="ayuda.html">Por qué ocurre esto?</a>'
    });
}

const comprar = e => {
    if(e.target.classList.contains('botonComprar')){
        comprarProducto(e.target.id);
    }
}

const btnCarritoComprar = document.getElementById('comprarCarrito');

const carritoComprar = async () => {
    const llamarJSON = await JSON.parse(localStorage.getItem(`carrito`));

    Swal.fire({
        icon: 'error',
        title: 'Disculpe',
        text: 'Aún no esta habilitada esta opcion!',
        footer: '<a href="ayuda.html">Por qué ocurre esto?</a>'
    });
}

btnCarritoComprar.addEventListener("click", () =>{
    carritoComprar();
});