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
                            <p>Artista: ${data.artist.name}</p>
                            <p>Fecha de publicación: ${data.release_date}</p>
                            <div>
                                <form class="añadiraplaylist" action="playlist.html" method="get">
                                    <div>
                                        <button type="submit" class="button">Añadir a mi Playlist</button>
                                        <a href="./playlist.html">Ver mi Playlist</a>
                                    </div>
                                </form>
                            </div>
                        </article>`

        seccion.innerHTML = albumes;
    for(let i = 0; i < tracksarray.length; i++){
        tracks +=   `<article>
                        <ol>
                            <li>${tracksarray[i].title}</li>
                        </ol>
                    </article>`   
                        
        }
      
        lista.innerHTML = tracks;

    for(let i = 0; i < arraygenres.length; i++){
        generos +=   `<article>
                        <ul>Género:
                            <li>${arraygenres[i].name}</li>
                        </ul>
                    </article>`   
                    
        }
  
        listgenres.innerHTML = generos;


})
.catch(function(error) {
    console.log("Error: " + error);
})

