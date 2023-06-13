let qs = location.search //qs en formato texto
let qsobject = new URLSearchParams(qs);

let datoAbuscar = qsobject.get("search") 

let endpointsearch = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${datoAbuscar}`

fetch(endpointsearch)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".results");
    let arraysearch = data.data;
    let busqueda = []

    for(let i = 0; i < arraysearch.length; i++){
        busqueda +=         `<article class="burbuja1">
                                <a href= "./singer_detail.html?id=${arraysearch[i].artist.id}"><h2>${arraysearch[i].artist.name} </h2></a>
                                <a href= "./song_detail.html?id=${arraysearch[i].id}"><h3>Canción: ${arraysearch[i].title} </h3></a>
                                <a href= "./album_detail.html?id=${arraysearch[i].album.id}"><h3>Album: ${arraysearch[i].album.title} </h3></a>
                                <a href= "./album_detail.html?id=${arraysearch[i].album.id}"><img src="${arraysearch[i].album.cover_medium}" alt=""></a>
                                <a href= "./singer_detail.html?id=${arraysearch[i].artist.id}"><img src="${arraysearch[i].artist.picture_medium}" alt=""></a>
                            </article>`

    }
        seccion.innerHTML = busqueda;

})
.catch(function(error) {
    console.log("Error: " + error);
})

