let url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".songs");
    let arraysongs = data.results;
    let canciones = "";

    for(let i = 0; i < arraysongs.length; i++){
        canciones +=      `<article class="burbuja1">
                            <img src="${arraysongs[i].image}" alt="">
                            <h2>Canción: ${arraysongs[i].name} </h2>
                            <h3>Artista: ${arraysongs[i].status}</h3>
                            <h3>Album: ${arraysongs[i].species} </h3>
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