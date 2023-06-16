let qs = location.search
let qstoObject = new URLSearchParams(qs);
let datoABuscar = qstoObject.get("id");
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${datoABuscar}`;
let añadir = document.querySelector(".añadiraplaylist")

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".songs");
    let canciones = "";

        canciones +=      `<article class="burbuja1">
                            <img src="${data.album.cover_medium}" alt="">
                            <h2>Canción: ${data.title} </h2>
                            <a href="./singer_detail.html?id=${data.artist.id}"><h3>Artista: ${data.artist.name}</h3></a>
                            <a href="./album_detail.html?id=${data.album.id}"><h3>Album: ${data.album.title} </h3></a>
                            <audio controls>
                                <source src="${data.preview}" type="audio/ogg">
                                <source src="${data.preview}" type="audio/mpeg">
                                Your browser does not support the audio tag.
                            </audio>
                            <div>
                                <form class="añadiraplaylist" action="playlist.html" method="get">
                                    <div>
                                        <a href="./playlist.html"><button type="submit" class="button">Añadir a mi Playlist</button></a>
                                        <a href="./playlist.html">Ver mi Playlist</a>
                                    </div>
                                </form>
                            </div>
                        </article>`


        seccion.innerHTML = canciones;

})
.catch(function(error) {
    console.log("Error: " + error);
})

console.log("detalle");

let qsfav = location.search;
let qsobject = new URLSearchParams(qsfav);
let id = qsobject.get("id")
let song = "file:///C:/Users/netch/OneDrive/Escritorio/proyectointegrador/song_detail.html?id=1765270907"
let listadefavs = "";
let llevameafavoritos = document.querySelector(".favoritear");
let recuperodestorage = localStorage.getItem("listadefavs");
let storagetoarray = JSON.parse(recuperodestorage);
let favsong = [];

if (recuperodestorage !== null){
    favsong = storagetoarray;
}

if (favsong.includes(id) === true){
    let cancionaborrar = indexof(id);
    favsong.splice(cancionaborrar,1);
    a.innerText = "Agregar de favoritos";
} else {
    favsong.push(id);
    llevameafavoritos.innerText = "Quitar de favoritos";
}

favsong.addEventListener("click", function(e){
    e.preventDefault();
    favsong.push(id);
    songajson = JSON.stringify(favsong);
    localStorage.setItem("listadefavs", favsong);
    console.log(localStorage);
})