//OBJETOS

class equipo{
    constructor(id, ciudad, nombre, imagen){
        this.id = id;
        this.ciudad = ciudad;
        this.nombre = nombre;
        this.equipo = ciudad + " " + nombre;
        this.imagen = imagen;
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

//EQUIPOS

const equipos = [];

equipos.push(new equipo(equipos.length, "atlanta", "hawks", "img/logo1.webp"));
equipos.push(new equipo(equipos.length, "boston", "celtics", "img/logo2.webp"));
equipos.push(new equipo(equipos.length, "brooklyn", "nets", "img/logo3.webp"));
equipos.push(new equipo(equipos.length, "charlotte", "hornets", "img/logo4.webp"));
equipos.push(new equipo(equipos.length, "chicago", "bulls", "img/logo5.webp"));
equipos.push(new equipo(equipos.length, "cleveland", "cavaliers", "img/logo6.webp"));
equipos.push(new equipo(equipos.length, "dallas", "mavericks", "img/logo7.webp"));
equipos.push(new equipo(equipos.length, "denver", "nuggets", "img/logo8.webp"));
equipos.push(new equipo(equipos.length, "detroit", "pistons", "img/logo9.webp"));
equipos.push(new equipo(equipos.length, "golden state", "warriors", "img/logo10.webp"));
equipos.push(new equipo(equipos.length, "houston", "rockets", "img/logo11.webp"));
equipos.push(new equipo(equipos.length, "indiana", "pacers", "img/logo12.webp"));
equipos.push(new equipo(equipos.length, "los angeles", "clippers", "img/logo13.webp"));
equipos.push(new equipo(equipos.length, "los angeles", "lakers", "img/logo14.webp"));
equipos.push(new equipo(equipos.length, "memphis", "grizzlies", "img/logo15.webp"));
equipos.push(new equipo(equipos.length, "miami", "heat", "img/logo16.webp"));
equipos.push(new equipo(equipos.length, "milwakee", "bucks", "img/logo17.webp"));
equipos.push(new equipo(equipos.length, "minesota", "timberwolves", "img/logo18.webp"));
equipos.push(new equipo(equipos.length, "new orleans", "pelicans", "img/logo19.webp"));
equipos.push(new equipo(equipos.length, "new york", "knicks", "img/logo20.webp"));
equipos.push(new equipo(equipos.length, "oklahoma", "city thunder", "img/logo21.webp"));
equipos.push(new equipo(equipos.length, "orlando", "magic", "img/logo22.webp"));
equipos.push(new equipo(equipos.length, "philadelphia", "76ers", "img/logo23.webp"));
equipos.push(new equipo(equipos.length, "phoenix", "suns", "img/logo24.webp"));
equipos.push(new equipo(equipos.length, "portland", "trail blazers", "img/logo25.webp"));
equipos.push(new equipo(equipos.length, "sacramento", "kings", "img/logo26.webp"));
equipos.push(new equipo(equipos.length, "san antonio", "spurs", "img/logo27.webp"));
equipos.push(new equipo(equipos.length, "toronto", "raptors", "img/logo28.webp"));
equipos.push(new equipo(equipos.length, "utah", "jazz", "img/logo29.webp"));
equipos.push(new equipo(equipos.length, "washington", "wizards", "img/logo30.webp"));

let containerEquipos = document.getElementById("containerEquipos");

for (const equip of equipos) {
    let contEquipos = document.createElement("div");
    contEquipos.classList.add("equipo");
    contEquipos.classList.add("none");
    contEquipos.setAttribute("id", `${equip.id}`);
    contEquipos.innerHTML = `<img src="${equip.imagen}" alt="">`;
    containerEquipos.appendChild(contEquipos);
}

for (let i = 0; i < 5; i++) {
    let team = document.getElementById(i);
    team.classList.remove("none");
}

let boton1 = document.getElementById("checkbox1");
let boton2 = document.getElementById("checkbox2");
let boton3 = document.getElementById("checkbox3");
let boton4 = document.getElementById("checkbox4");
let boton5 = document.getElementById("checkbox5");
let boton6 = document.getElementById("checkbox6");

boton1.addEventListener("click", () => {
    for (let i = 0; i < equipos.length; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 0; i < 5; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
});
boton2.addEventListener("click", () => {
    for (let i = 0; i < equipos.length; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 5; i < 10; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
});
boton3.addEventListener("click", () => {
    for (let i = 0; i < equipos.length; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 10; i < 15; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
});
boton4.addEventListener("click", () => {
    for (let i = 0; i < equipos.length; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 15; i < 20; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
});
boton5.addEventListener("click", () => {
    for (let i = 0; i < equipos.length; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 20; i < 25; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
});
boton6.addEventListener("click", () => {
    for (let i = 0; i < equipos.length; i++) {
        let team = document.getElementById(i);
        team.classList.add("none");
    }
    for (let i = 25; i <= equipos.length; i++) {
        let team = document.getElementById(i);
        team.classList.remove("none");
    }
});