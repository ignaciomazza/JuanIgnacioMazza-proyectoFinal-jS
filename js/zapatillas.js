//OBJETOS

class modelo{
    constructor(id, nombre, precio, jugador, imagen, carrito){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.jugador = jugador;
        this.imagen = imagen;
        this.carrito = carrito;
    }
}

//MENU

let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');
let cerrar = document.querySelector('#cerrar');

menu.addEventListener("click", () =>{
    console.log("click")
    nav.classList.toggle("ocultar");
});

cerrar.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

//MODELOS

const modelos = [];

modelos.push(new modelo(modelos.length, "Under Armour Curry 9", "25000", "Stephen Curry", "../img/modelos/Curry.png", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike Lebron 18", "26000", "Lebron James", "../img/modelos/Curry.png", "carrito-" + modelos.length));

let zapatillas = document.getElementById("zapatillas");

for (const model of modelos) {
    let contModelos = document.createElement("div");
    contModelos.classList.add("modelos");
    contModelos.innerHTML = `<img src="${model.imagen}" alt="">
                             <p>${model.nombre}</p>
                             <div class="comprar">
                                <input type="button" value="COMPRAR" name="comprar" id="comprar-${model.id}">
                                <img src="../img/bx-cart-add.svg" alt="" class="carrito" id="${model.carrito}">
                             </div>`;
    zapatillas.appendChild(contModelos);
}

//CARRITO

const carrito = [];

let bucleCarrito = document.getElementsByClassName('carrito');

for (let i = 0; i < bucleCarrito.length; i++) {
    let numCarrito = document.getElementById(`carrito-${i}`);
    carrito.push(numCarrito);
}


for (let i = 0; i < bucleCarrito.length; i++) {
    bucleCarrito[i].addEventListener("click", () =>{
        const agregar = modelos.find((el) => el.carrito === carrito[i].id);
        const agregarCarrito = JSON.stringify(agregar);
        localStorage.setItem(`producto-${i}`, agregarCarrito);
        alert("Se ha agregado al carrito: " + agregar.nombre);
    });
}

let mostrarCarrito = document.getElementById("carrito-menu");

mostrarCarrito.addEventListener("click", () =>{
    for (let i = 0; i < bucleCarrito.length; i++) {
        let mostrar = JSON.parse(localStorage.getItem(`producto-${i}`));
        alert("Su carrito contiene el siguiente producto: " + mostrar.nombre);
    }
});