let qs = location.search
let qstoObject = new URLSearchParams(qs);
let datoABuscar = qstoObject.get("id");

if(localStorage.getItem("favoritessongs") != null && localStorage.getItem("favoritessongs")) {
    favoritessongs  = JSON.parse(localStorage.getItem("favoritessongs"))
} 
if(localStorage.getItem("favoritesalbums") != null && localStorage.getItem("favoritesalbums")) {
    favoritesalbums = JSON.parse(localStorage.getItem("favoritesalbums"))
}

let listacanciones  = document.querySelector(".songs")
let listaalbumes    = document.querySelector(".albums")

if(favoritessongs == null && favoritessongs.length == 0) {    
    listacanciones.innerHTML= "<p>No hay favoritos seleccionados</p>"
} else {
    for (let i=0; i<favoritessongs.length; i++){

        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritessongs[i]}?id=${datoABuscar}`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                listacanciones.innerHTML += `
                                            <article class= "burbuja1">
                                                <a href="./song_detail.html?id=${data.id}"><h2>${data.title}</h2></a>
                                                <a href="./song_detail.html?id=${data.id}"><img src="${data.album.cover_medium}"" alt="${data.title}"></a>
                                                <a href="./singer_detail.html?id=${data.artist.id}"><h3>Artista: ${data.artist.name}</h3></a>
                                                    <audio controls>
                                                        <source src="${data.preview}" type="audio/ogg">
                                                        <source src="${data.preview}" type="audio/mpeg">
                                                        Your browser does not support the audio tag.
                                                    </audio>
                                            </article>
                                            `


            })
            .catch(function(error) {
                return error;
            })
        }
    }
if(favoritesalbums == null && favoritesalbums.length == 0) {    
    listaseries.innerHTML= "<p>No hay favoritos seleccionados</p>"
    } else {
        for (let i=0; i<favoritesalbums.length; i++){
            
            fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${favoritesalbums[i]}?id=${datoABuscar}`)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    listaalbumes.innerHTML +=   `
                                                <article class= "burbuja1">
                                                    <a href="./album_detail.html?id=${data.id}"><h2>Nombre: ${data.title}</h2></a>
                                                    <a href="./album_detail.html?id=${data.id}"><img src="${data.cover_medium}"></a>
                                                    <a href="./singer_detail.html?id=${data.artist.id}"><p>Artista: ${data.artist.name}</p></a>
                                                    <p>Fecha de publicación: ${data.release_date}</p>
                                                </article>
                                                `


    })
    .catch(function(error) {
        return error;
    })
        }
    }