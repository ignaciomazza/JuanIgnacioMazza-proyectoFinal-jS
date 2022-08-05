//MENU

let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');
let cerrar = document.querySelector('#cerrar');

menu.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

cerrar.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

//MODELOS

let zapatillas = document.getElementById("zapatillas");

const pedirPost = async () => {
    const resp = await fetch('./../json/zapatillas.json')
    const data = await resp.json()
    data.forEach( (model) => {
        let contModelos = document.createElement("div");
        contModelos.classList.add("modelos");
        contModelos.innerHTML = `<img src="${model.imagen}" alt="">
                                <p>${model.nombre}</p>
                                <div class="comprar">
                                    <input type="button" value="COMPRAR" name="comprar" id="comprar-${model.id}">
                                    <img src="../img/bx-cart-add.svg" alt="" class="carrito" id="${model.carrito}">
                                </div>`;
        zapatillas.appendChild(contModelos);
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
}

let carrito = {};

const modelo = document.getElementById('zapatillas');

modelo.addEventListener("click", e =>{
    obtener(e);
});

const obtener = e => {
    if(e.target.classList.contains('carrito')){
        buscarModelo(e.target.id);
    }
}

//MOSTRAR CARRITO

const mostrarCarrito = document.getElementById("carrito-menu");
const containerCarrito = document.getElementById('container-productoCarrito');
const containerProductos = document.getElementById('productos');


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
                                             <p>${aparecerModelo.nombre}</p>
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
        if(modeloBuscar.nombre.includes(valor)){
            objetoBuscar.push(modeloBuscar)
        }
    })
    localStorage.setItem(`buscador`, JSON.stringify(objetoBuscar));
    window.open("buscador.html", "_self");
}

botonBuscador.addEventListener("click", () =>{
    buscar();
});