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
                            <a href="./singer_detail.html?id=${data.artist.id}"><h3>Artista: ${data.artist.name}</h3></a>
                            <a href="./album_detail.html?id=${data.album.id}"><h3>Album: ${data.album.title} </h3></a>
                            <audio controls>
                                <source src="${data.preview}" type="audio/ogg">
                                <source src="${data.preview}" type="audio/mpeg">
                                Your browser does not support the audio tag.
                            </audio>
                            <div>
                                <form action="playlist.html" method="get">
                                    <div>
                                        <button type="submit" class="buttonf"><a href="./playlist.html?id=${data.id}">Añadir a mi Playlist</a></button>
                                        <a href="./playlist.html">Ver mi Playlist</a>
                                    </div>
                                </form>
                            </div>
                        </article>`


        seccion.innerHTML = canciones;
        let favorites = []
    
    let boton = document.querySelector(".buttonf")
    if(localStorage.getItem("favoritessongs") !== null && localStorage.getItem("favoritessongs")) {
        favorites = JSON.parse(localStorage.getItem("favoritessongs"))
    }

    if(favorites.includes(datoABuscar)) {
        boton.innerText = "Quitar de mis favoritos";
    }

    boton.addEventListener("click", function(e) {
        e.preventDefault();

        if(favorites.includes(datoABuscar)) {
            let index = favorites.indexOf(datoABuscar);
            favorites.splice(index, 1);
            boton.innerText = "Agregar a Favoritos";}

        else{
            favorites.push(datoABuscar)
            boton.innerText = "Quitar de Favoritos";

        }

        let favoritestoSTR = JSON.stringify(favorites);
        localStorage.setItem("favoritessongs", favoritestoSTR);
        console.log(localStorage)

        })


})
.catch(function(error) {
    console.log("Error: " + error);
})




