let qs = new URLSearchParams(location.search);
let urlalbums = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums";
let urlartistas = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre/0/artists";
let urlsongs = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks";


fetch(urlalbums)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".album");
    let arrayalbumes = data.data;
    let albumes = "";

    for(let i = 0; i < arrayalbumes.length; i++){
        albumes +=      `<article class="burbuja2">
                            <h2>Nombre: ${arrayalbumes[i].title}</h2>
                            <img src=${arrayalbumes[i].cover_medium} alt='' />
                            <p>Artista: ${arrayalbumes[i].artist.name}</p>
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
                            <h3>Nombre: ${arrayartistas[i].name}</h3>
                            <img src=${arrayartistas[i].picture_medium} alt='' />
                            <p>${arrayartistas[i].type}</p>
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
                                <h2>Nombre: ${arraysongs[i].title}</h2>
                                <h3>Album: ${arraysongs[i].album.title}</h3>
                                <img src=${arraysongs[i].album.cover_medium} alt='' />
                                <p>Artista: ${arraysongs[i].artist.name}</p>
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
