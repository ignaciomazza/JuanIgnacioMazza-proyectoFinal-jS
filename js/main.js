class equipo{
    constructor(id, ciudad, nombre){
        this.id = id;
        this.ciudad = ciudad;
        this.nombre = nombre;
        this.equipo = ciudad + " " + nombre;
    }
}

const equipos = [];

equipos.push(new equipo(equipos.length, "atlanta", "hawks"));
equipos.push(new equipo(equipos.length, "boston", "celtics"));
equipos.push(new equipo(equipos.length, "brooklyn", "nets"));
equipos.push(new equipo(equipos.length, "charlotte", "hornets"));
equipos.push(new equipo(equipos.length, "chicago", "bulls"));
equipos.push(new equipo(equipos.length, "cleveland", "cavaliers"));
equipos.push(new equipo(equipos.length, "dallas", "mavericks"));
equipos.push(new equipo(equipos.length, "denver", "nuggets"));
equipos.push(new equipo(equipos.length, "detroit", "pistons"));
equipos.push(new equipo(equipos.length, "golden state", "warriors"));
equipos.push(new equipo(equipos.length, "houston", "rockets"));
equipos.push(new equipo(equipos.length, "indiana", "pacers"));
equipos.push(new equipo(equipos.length, "los angeles", "clippers"));
equipos.push(new equipo(equipos.length, "los angeles", "lakers"));
equipos.push(new equipo(equipos.length, "memphis", "grizzlies"));
equipos.push(new equipo(equipos.length, "miami", "heat"));
equipos.push(new equipo(equipos.length, "milwakee", "bucks"));
equipos.push(new equipo(equipos.length, "minesota", "timberwolves"));
equipos.push(new equipo(equipos.length, "new orleans", "pelicans"));
equipos.push(new equipo(equipos.length, "new york", "knicks"));
equipos.push(new equipo(equipos.length, "oklahoma", "city thunder"));
equipos.push(new equipo(equipos.length, "orlando", "magic"));
equipos.push(new equipo(equipos.length, "philadelphia", "76ers"));
equipos.push(new equipo(equipos.length, "phoenix", "suns"));
equipos.push(new equipo(equipos.length, "portland", "trail blazers"));
equipos.push(new equipo(equipos.length, "sacramento", "kings"));
equipos.push(new equipo(equipos.length, "san antonio", "spurs"));
equipos.push(new equipo(equipos.length, "toronto", "raptors"));
equipos.push(new equipo(equipos.length, "utah", "jazz"));
equipos.push(new equipo(equipos.length, "washington", "wizards"));

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
