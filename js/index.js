let qs = new URLSearchParams(location.search);
let urlalbums = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127";
let urlartistas = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/27";
let urlsongs = "https://api.allorigins.win/raw?url=https://api.deezer.com/track/3135556";


fetch(urlalbums)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".album");
    let arrayalbumes = data;
    let albumes = "";

    for(let i = 0; i < 4; i++){
        albumes +=      `<article>
                            <h3>Nombre: ${arrayalbumes.title}</h3>
                            <img src=${arrayalbumes.cover_medium} alt='' />
                            <p>Detalle: ${arrayalbumes.artist.name}</p>
                        </article>`

    }
        seccion.innerHTML = albumes;

})
.catch(function(error) {
    console.log("Error: " + error);
})


fetch(urlartistas)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".artistas");
    let arrayartistas = data;
    let artistas = ""

    for(let i = 0; i < 4; i++){
        artistas +=     `<article>
                            <h3>Nombre: ${arrayartistas.name}</h3>
                            <img src=${arrayartistas.picture} alt='' />
                            <p>${arrayartistas.tracklist}</p>
                        </article>`

    }
        seccion.innerHTML = artistas;

})
.catch(function(error) {
    console.log("Error: " + error);
})


fetch(urlsongs)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".canciones");
    let arraysongs = data;
    let canciones = "";

    for(let i = 0; i < 4; i++){
        canciones +=      `<article>
                            <h3>Nombre: ${arraysongs.title}</h3>
                            <img src=${arraysongs.md5_image} alt='' />
                            <p>Detalle: ${arraysongs.artist.name}</p>
                        </article>`

    }
        seccion.innerHTML = canciones;

})
.catch(function(error) {
    console.log("Error: " + error);
})

let formulario = document.querySelector("form");
let campoBuscar = document.querySelector("input");

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    if(campoBuscar.value===" "){ 
        alert("El campo es obligatorio")
    } else if(campoBuscar.value.length < 4){
        alert("Debes escribir como mínimo 3 caracteres")
    } else{
        this.submit()
    }
});




let darkmode = document.querySelector('.botondarkmode');
let body = document.querySelector("body");
let header = document.querySelector("header");
let nav = document.querySelector("nav")
let icono = document.querySelectorAll(".icono")
let lightmode = 'light';
let boton = document.querySelectorAll("button")
let botondarkmode = document.querySelector(".botondarkmode")
let buscador = document.querySelector(".buscador")
let botonbuscador = document.querySelector(".botonbuscadorconjava")
let main =  document.querySelector("main")
let h1 = document.querySelector("h1")

darkmode.addEventListener('click', function(){

    body.style.backgroundColor = "hsla(178, 100%, 87%, 1)";
    header.style.backgroundColor = "hsla(153, 100%, 74%, 1)";
    nav.style.backgroundColor = "hsla(209, 10%, 41%, 1)";
    botondarkmode.innerText = "Light Mode";
    buscador.style.border = "0px";
    buscador.style.color = "black";
    h1.style.backgroundColor = "hsla(153, 100%, 74%, 1)";

    main.style.background = "hsla(209, 10%, 41%, 1)";
    main.style.background = "linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.background = "-moz-linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.background = "-webkit-linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#5E6973', endColorstr='#9FFFF5', GradientType=1)";
    
    botonbuscador.style.background = "hsla(178, 100%, 87%, 1)";
    botonbuscador.style.background = "linear-gradient(180deg, hsla(178, 100%, 87%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    botonbuscador.style.background = "-moz-linear-gradient(180deg, hsla(178, 100%, 87%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    botonbuscador.style.background = "-webkit-linear-gradient(180deg, hsla(178, 100%, 87%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    botonbuscador.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#bdfffd', endColorstr='#7cffc4', GradientType=1)";

    buscador.style.background = "hsla(153, 100%, 74%, 1)";
    buscador.style.background = "linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.background = "-moz-linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.background = "-webkit-linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#bdfffd', endColorstr='#7cffc4', GradientType=1)";
    

    for (let i = 0; i < icono.length; i++) {
        icono[i].style.background = "hsla(174, 100%, 81%, 1)";
        icono[i].style.background = "radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.background = "-moz-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.background = "-webkit-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#9FFFF5', endColorstr='#6ABEA7', GradientType=1)";
    }
    for (let i = 0; i < boton.length; i++) {
        boton[i].style.background = "hsla(174, 100%, 81%, 1)";
        boton[i].style.background = "radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(164, 39%, 58%, 1) 100%)";
        boton[i].style.background = "-moz-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(164, 39%, 58%, 1) 100%)";
        boton[i].style.background = "-webkit-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(164, 39%, 58%, 1) 100%)";
        boton[i].style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#9FFFF5', endColorstr='#6ABEA7', GradientType=1)";
    }
})
