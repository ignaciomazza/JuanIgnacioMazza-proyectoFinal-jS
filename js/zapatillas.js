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
    nav.classList.toggle("ocultar");
});

cerrar.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

//MODELOS

const modelos = [];

modelos.push(new modelo(modelos.length, "Under Armour Curry 9", "25000", "Stephen Curry", "../img/modelos/Curry.png", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike Lebron 18", "26000", "Lebron James", "../img/modelos/Lebron.webp", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike Kyrie 7", "30000", "Kyrie Irving", "../img/modelos/Kyrie.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike KD 14", "26000", "kEVIN dURANT", "../img/modelos/Durant.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike Zoom Freak 1", "30000", "Giannis Antetokoumpo", "../img/modelos/Giannis.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike PG 5", "23000", "Paul George", "../img/modelos/George.png", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike Kobe 5", "20000", "Kobe Bryant", "../img/modelos/Kobe.png", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Nike Cosmic Unity", "34000", "Anthony Davis", "../img/modelos/Davis.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Adidas DON Issue", "28999", "Donovan Mitchel", "../img/modelos/Mitchel.png", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Puma MB.01", "28999", "Lonzo Ball", "../img/modelos/Ball.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Puma Clyde All-Pro", "28999", "Lamelo Ball", "../img/modelos/Melo.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Adidas Harden Vol. 4", "26000", "James Harden", "../img/modelos/Harden.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "New Balance The Kawhi", "27000", "Kawhi Leonard", "../img/modelos/Kawhi.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Under Armour Embiid 1", "34899", "Kawhi Leonard", "../img/modelos/Embiid.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Jordan React Elevation", "37899", "Luka Doncic", "../img/modelos/Doncic.jpg", "carrito-" + modelos.length));
modelos.push(new modelo(modelos.length, "Adidas D Rose 11", "24000", "Kawhi Leonard", "../img/modelos/Rose.jpg", "carrito-" + modelos.length));

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

const containerCarrito = document.getElementById('container-productoCarrito');
const comprarCarrito = document.getElementById('comprarCarrito');

const carritoJSON = [];

for (let i = 0; i < carrito.length; i++) {
    bucleCarrito[i].addEventListener("click", () =>{
        const agregar = modelos.find((el) => el.carrito === carrito[i].id);
        carritoJSON.push(agregar);
        const agregarCarrito = JSON.stringify(carritoJSON);
        localStorage.setItem(`carrito`, agregarCarrito);
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
    });
}

let mostrarCarrito = document.getElementById("carrito-menu");

mostrarCarrito.addEventListener("click", () =>{
    containerCarrito.classList.toggle("ocultarCarrito");
});

const llamarJSON = JSON.parse(localStorage.getItem(`carrito`));

for (let i = 0; i < llamarJSON.length; i++) {
    // const agregar = mostrar.find((el) => el.carrito === carrito[i].id);
    const aparecerModelo = llamarJSON[i];
    let btnCarritoChild = document.createElement("div");
    btnCarritoChild.classList.add("productoCarrito");
    btnCarritoChild.innerHTML = `<img src="${aparecerModelo.imagen}" alt="">
                                 <p>${aparecerModelo.nombre}</p>`;
    containerCarrito.appendChild(btnCarritoChild);
}

//COMPRAR



for (const model of modelos) {
    let numCarrito = document.getElementById(`comprar-${model.id}`);
    numCarrito.addEventListener("click", () =>{
        Swal.fire({
            title:'Lo sentimos',
            text: 'Aún esta opcion no esta habilitada',
            confirmButtonText: ":'("
        })
    });
}




