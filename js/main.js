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

//EQUIPOS

const containerEquipos = document.getElementById("containerEquipos");

const pedirPost = async () => {
    const resp = await fetch('./json/equipos.json')
    const data = await resp.json()

    data.forEach( (equipo) => {
        let contEquipos = document.createElement("div");
        contEquipos.classList.add("equipo");
        contEquipos.classList.add("none");
        contEquipos.setAttribute("id", equipo.id);
        contEquipos.innerHTML = `<img src="${equipo.imagen}" alt="">`;
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