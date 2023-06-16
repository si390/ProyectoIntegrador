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
                                        <a href="./playlist.html?id=${data.id}"><button type="submit" class="button">Añadir a mi Playlist</button></a>
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


})
.catch(function(error) {
    console.log("Error: " + error);
})

//Quiero guardar info en local storage
let linkFavs = document.querySelector('button');

let recuperoStorage = localStorage.getItem('listaFavoritos');
let storageToArray = JSON.parse(recuperoStorage);

let gifFavoritos = [];

if(recuperoStorage !== null){
    gifFavoritos = storageToArray
}

//Cambiar agregar por quitar
if(gifFavoritos.includes(id)){
    linkFavs.innerText = "Quitar de favoritos";
}


linkFavs.addEventListener('click', function(e){
    e.preventDefault();
    //Preguntar si un elemento está en el array
    if(gifFavoritos.includes(id)){
        //Si el elemento ya está entonces que lo saque
        let posicion = gifFavoritos.indexOf(id);
        gifFavoritos.splice(posicion, 1);
        linkFavs.innerText = "Agregar a favoritos";
    } else{
        //Cambiar agregar por quitar
        gifFavoritos.push(id);
        linkFavs.innerText = "Quitar de favoritos";
    }



    gifsAJson = JSON.stringify(gifFavoritos);
    localStorage.setItem("listaFavoritos", gifsAJson)

    console.log(localStorage);
})

//Adentro del for ponemos un fetch para lograr que se visualice en la pagina