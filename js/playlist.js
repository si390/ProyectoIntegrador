let qs = new URLSearchParams(location.search);
let url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".playlist");
    let arrayplaylist = data.results;
    let playlist = "";

    for(let i = 0; i < arrayplaylist.length; i++){
        playlist +=      `<article class="burbuja1">
                            <img src="${arrayplaylist[i].image}" alt="">
                            <h2>Nombre: ${arrayplaylist[i].name}</h2>
                            <h3>Artista: ${arrayplaylist[i].status}</h3>
                        </article>`

    }
        seccion.innerHTML = playlist;

})
.catch(function(error) {
    console.log("Error: " + error);
})