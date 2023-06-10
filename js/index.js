
let urlalbums = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums";
let urlartistas = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists";
let urlsongs = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks";


fetch(urlalbums)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".album");
    let arrayalbumes = data.data;
    let albumes = " ";

    for(let i = 0; i < arrayalbumes.length; i++){
        albumes +=      `<article class="burbuja1">
                            <a href="./album_detail.html?id=${arrayalbumes[i].id}">
                            <h2>Nombre: ${arrayalbumes[i].title}</h2>
                            <img src="${arrayalbumes[i].cover_medium}" alt='' />
                            <p>Artista: ${arrayalbumes[i].artist.name}</p></a>
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
    let arrayartistas = data.data;
    let artistas = ""

    for(let i = 0; i < arrayartistas.length; i++){
        artistas +=     `<article class="burbuja2">
                            <a href = "./singer_detail.html?id=${arrayartistas[i].id}">
                            <h3>Nombre: ${arrayartistas[i].name}</h3>
                            <img src="${arrayartistas[i].picture_medium}" alt='' />
                            <p>${arrayartistas[i].type}</p> </a>
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
    let arraysongs = data.data;
    let canciones = "";

    for(let i = 0; i < arraysongs.length; i++){
        canciones +=      `<article class="burbuja2">
                                <a href="./song_detail.html?id=${arraysongs[i].id}">
                                <h2>Nombre: ${arraysongs[i].title}</h2>
                                <h3>Album: ${arraysongs[i].album.title}</h3>
                                <img src="${arraysongs[i].album.cover_medium}" alt='' />
                                <p>Artista: ${arraysongs[i].artist.name}</p></a>
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




let darkmode = document.querySelector(".botondarkmode");
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

    /* coolors.co "gradients" */
    main.style.background = "hsla(209, 10%, 41%, 1)";
    main.style.background = "linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.background = "-moz-linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.background = "-webkit-linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#5E6973', endColorstr='#9FFFF5', GradientType=1)";
    
    /* coolors.co "gradients" */
    botondarkmode.style.background = "hsla(178, 100%, 87%, 1)";
    botondarkmode.style.background = "linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botondarkmode.style.background = "-moz-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botondarkmode.style.background = "-webkit-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botondarkmode.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#BDFFFD', endColorstr='#9FFFF5', GradientType=1)";

    /* coolors.co "gradients" */
    botonbuscador.style.background = "hsla(178, 100%, 87%, 1)";
    botonbuscador.style.background = "linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botonbuscador.style.background = "-moz-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botonbuscador.style.background = "-webkit-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botonbuscador.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#BDFFFD', endColorstr='#9FFFF5', GradientType=1)";

    /* coolors.co "gradients" */
    buscador.style.background = "hsla(153, 100%, 74%, 1)";
    buscador.style.background = "linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.background = "-moz-linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.background = "-webkit-linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#bdfffd', endColorstr='#7cffc4', GradientType=1)";
    

    for (let i = 0; i < icono.length; i++) {
        /* coolors.co "gradients" */
        icono[i].style.background = "hsla(174, 100%, 81%, 1)";
        icono[i].style.background = "radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.background = "-moz-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.background = "-webkit-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#9FFFF5', endColorstr='#6ABEA7', GradientType=1)";
    }
})


