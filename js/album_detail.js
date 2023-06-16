let qs = location.search
let qstoObject = new URLSearchParams(qs);
let datoABuscar = qstoObject.get("id");
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${datoABuscar}`;


fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".albumes");
    let lista = document.querySelector(".tracks");
    let listgenres = document.querySelector(".genres");
    let arraygenres = data.genres.data
    let tracksarray = data.tracks.data
    let albumes = "";
    let generos = ""
    let tracks = "";

        albumes +=      `<article class="burbuja1">
                            <h2>Nombre: ${data.title}</h2>
                            <img src=${data.cover_medium} alt='' />
                            <a href="./singer_detail.html?id=${data.artist.id}"><p>Artista: ${data.artist.name}</p></a>
                            <p>Fecha de publicación: ${data.release_date}</p>
                            <div>
                                <form class="añadiraplaylist" action="playlist.html" method="get">
                                    <div>
                                        <button type="submit" class="buttonf"><a href="./playlist.html">Añadir a mi Playlist</a></button>
                                        <a href="./playlist.html">Ver mi Playlist</a>
                                    </div>
                                </form>
                            </div>
                        </article>`

        seccion.innerHTML = albumes;
    for(let i = 0; i < tracksarray.length; i++){
        tracks +=   `<article>
                        <ul>
                        <a href="./song_detail.html?id=${tracksarray[i].id}"><li>${tracksarray[i].title}</li></a>
                        </ul>
                    </article>`   
                        
        }
      
        lista.innerHTML = tracks;

    for(let i = 0; i < arraygenres.length; i++){
        generos +=   `<article>
                        <ol>Género:
                        <a href="./detail_genres.html?id=${arraygenres[i].id}"><li>${arraygenres[i].name}</li></a>
                        </ol>
                    </article>`   
                    
        }
  
        listgenres.innerHTML = generos;
    let favorites = []
        
    let boton = document.querySelector(".buttonf")
    if(localStorage.getItem("favoritesalbums") != null && localStorage.getItem("favoritesalbums")) {
        favorites = JSON.parse(localStorage.getItem("favoritesalbums"))
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
        localStorage.setItem("favoritesalbums", favoritestoSTR);
        console.log(localStorage)

    })


})
.catch(function(error) {
    console.log("Error: " + error);
})

