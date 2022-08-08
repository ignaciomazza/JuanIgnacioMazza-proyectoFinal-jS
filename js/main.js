//MENU

let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');
let cerrar = document.querySelector('#cerrar');
const logo = document.getElementById('logo');

logo.addEventListener("click", () =>{
    window.open("index.html", "_self");
});

menu.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

cerrar.addEventListener("click", () =>{
    nav.classList.toggle("ocultar");
});

//EQUIPOS

const containerEquipos = document.getElementById("containerEquipos");



const pedirPost = async () => {
    const resp = await fetch('./json/equipos.json')
    const data = await resp.json()

    data.forEach( (equipo) => {
        let contEquipos = document.createElement("div");
        contEquipos.innerHTML = `<img src="${equipo.imagen}" alt="" id="${equipo.id}" class="none equipo">`;
        containerEquipos.appendChild(contEquipos);
    })
}

async function inicio() {
    const result = await pedirPost();
    for (let i = 0; i < 5; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
}

inicio();

let boton1 = document.getElementById("checkbox1");
let boton2 = document.getElementById("checkbox2");
let boton3 = document.getElementById("checkbox3");
let boton4 = document.getElementById("checkbox4");
let boton5 = document.getElementById("checkbox5");
let boton6 = document.getElementById("checkbox6");

boton1.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
    for (let i = 5; i < 31; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
});
boton2.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 5; i < 10; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
    for (let i = 10; i < 31; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
});
boton3.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 10; i < 15; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
    for (let i = 15; i < 31; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
});
boton4.addEventListener("click", () => {
    for (let i = 0; i < 15; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 15; i < 20; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
    for (let i = 20; i < 31; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
});
boton5.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 20; i < 25; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
    for (let i = 25; i < 31; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
});
boton6.addEventListener("click", () => {
    for (let i = 0; i < 25; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 25; i <= 31; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
});

//REDIRECCIONAR

containerEquipos.addEventListener("click", e =>{
    obtener(e);
});

const obtener = e => {
    if(e.target.classList.contains('equipo')){
        console.log(e.target.id);
        localStorage.setItem(`equipo`, e.target.id);
        window.open("pages/modelo.html", "_self");

    }
}

//BUSCADOR

const botonBuscador = document.getElementById('botonBuscador');

const buscar = () => {
    const buscador = document.getElementById('buscador');
    pedirPostBuscador(buscador.value);
}

const pedirPostBuscador = async (valor) => {
    const resp = await fetch('./json/zapatillas.json')
    const data = await resp.json()

    const objetoBuscar = [];
    data.forEach( (modeloBuscar) => {
        if(modeloBuscar.nombre.includes(valor)){
            objetoBuscar.push(modeloBuscar)
        }
    })
    localStorage.setItem(`buscador`, JSON.stringify(objetoBuscar));
    window.open("pages/buscador.html", "_self");
}

botonBuscador.addEventListener("click", () =>{
    buscar();
});