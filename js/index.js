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
let body = document.body;
let lightmode = 'light';

darkmode.addEventListener('click', function(){

    body.style.backgroundColor = "black"

})
