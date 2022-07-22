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

mostrarCarrito.addEventListener("click", () =>{
    containerCarrito.classList.toggle("ocultarCarrito");
});



const traerDatos = async () => {
    const llamarJSON = await JSON.parse(localStorage.getItem(`carrito`));

    for (let i = 0; i < llamarJSON.length; i++) {
            const aparecerModelo = llamarJSON[i];
            let btnCarritoChild = document.createElement("div");
            btnCarritoChild.setAttribute("id", aparecerModelo.id);
            btnCarritoChild.classList.add("productoCarrito");
            btnCarritoChild.classList.add("none");
            btnCarritoChild.innerHTML = `<img src="${aparecerModelo.imagen}" alt="">
                                        <p>${aparecerModelo.nombre}</p>`;
            containerCarrito.appendChild(btnCarritoChild);
    }
}

traerDatos();


































//CARRITO

// const carrito = [];

// let bucleCarrito = document.getElementsByClassName('carrito');

// for (let i = 0; i < bucleCarrito.length; i++) {
//     let numCarrito = document.getElementById(`carrito-${i}`);
//     carrito.push(numCarrito);
// }

// const containerCarrito = document.getElementById('container-productoCarrito');
// const comprarCarrito = document.getElementById('comprarCarrito');

// const carritoJSON = [];

// for (let i = 0; i < carrito.length; i++) {
//     bucleCarrito[i].addEventListener("click", () =>{
//         const agregar = modelos.find((el) => el.carrito === carrito[i].id);
//         carritoJSON.push(agregar);
//         const agregarCarrito = JSON.stringify(carritoJSON);
//         localStorage.setItem(`carrito`, agregarCarrito);
        
//     });
// }

// let mostrarCarrito = document.getElementById("carrito-menu");

// mostrarCarrito.addEventListener("click", () =>{
//     containerCarrito.classList.toggle("ocultarCarrito");
// });

// const llamarJSON = JSON.parse(localStorage.getItem(`carrito`));

// for (let i = 0; i < llamarJSON.length; i++) {
//     // const agregar = mostrar.find((el) => el.carrito === carrito[i].id);
//     const aparecerModelo = llamarJSON[i];
//     let btnCarritoChild = document.createElement("div");
//     btnCarritoChild.classList.add("productoCarrito");
//     btnCarritoChild.innerHTML = `<img src="${aparecerModelo.imagen}" alt="">
//                                  <p>${aparecerModelo.nombre}</p>`;
//     containerCarrito.appendChild(btnCarritoChild);
// }




























//COMPRAR



// for (const model of modelos) {
//     let numCarrito = document.getElementById(`comprar-${model.id}`);
//     numCarrito.addEventListener("click", () =>{
//         // Swal.fire({
//         //     title:'Lo sentimos',
//         //     text: 'Aún esta opcion no esta habilitada',
//         //     confirmButtonText: ":'("
//         // })
//     });
// }




// libreria agregar carrito

// const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top-end',
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.addEventListener('mouseenter', Swal.stopTimer)
        //       toast.addEventListener('mouseleave', Swal.resumeTimer)
        //     }
        //   })
        //   Toast.fire({
        //     icon: 'success',
        //     title: 'Agregado al carrito'
        //   })