let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".songs");
    let arraysongs = data.data;
    let canciones = "";

    for(let i = 0; i < arraysongs.length; i++){
        canciones +=      `<article class="burbuja1">
                            <img src="${arraysongs[i].album.cover_medium}" alt="">
                            <h2>Canción: ${arraysongs[i].title} </h2>
                            <h3>Artista: ${arraysongs[i].artist.name}</h3>
                            <h3>Album: ${arraysongs[i].album.title} </h3>
                            <div>
                                <form class="añadiraplaylist" action="playlist.html" method="get">
                                    <div>
                                        <button type="submit" class="button">Añadir a mi Playlist</button>
                                        <a href="./playlist.html">Ver mi Playlist</a>
                                    </div>
                                </form>
                            </div>
                        </article>`

    }
        seccion.innerHTML = canciones;

})
.catch(function(error) {
    console.log("Error: " + error);
})