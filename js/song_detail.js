let qs = location.search
let qstoObject = new URLSearchParams(qs);
let datoABuscar = qstoObject.get("id");
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${datoABuscar}`;

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
                            <h3>Artista: ${data.artist.name}</h3>
                            <h3>Album: ${data.album.title} </h3>
                            <audio controls>
                                <source src="${data.preview}" type="audio/ogg">
                                <source src="${data.preview}" type="audio/mpeg">
                                Your browser does not support the audio tag.
                            </audio>
                            <div>
                                <form class="añadiraplaylist" action="playlist.html" method="get">
                                    <div>
                                        <button type="submit" class="button">Añadir a mi Playlist</button>
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
