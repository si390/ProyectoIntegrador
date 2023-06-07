let qs = location.search //qs en formato texto
let qsobject = new URLSearchParams(qs);

let datoAbuscar = qsobject.get("search") 

let endpointsearch = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${datoAbuscar}`

fetch(endpointsearch)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".results");
    let arraysearch = data.data
    let busqueda = []

    for(let i = 0; i < arraysearch.length; i++){
        busqueda +=         `<article class="burbuja1">
                                <h2>Busqueda para: ${arraysearch[i].artist.name} </h2>
                                <h3>Album: ${arraysearch[i].album.title} </h3>
                                <img src="${arraysearch[i].album.cover_medium}" alt="">
                                <img src="${arraysearch[i].artist.picture_medium}" alt="">
                            </article>`

    }
        seccion.innerHTML = busqueda;

})
.catch(function(error) {
    console.log("Error: " + error);
})