let qs = new URLSearchParams(location.search);
let url = "https://rickandmortyapi.com/api/character";


fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".artists");
    let arraysingers = data.results;
    let artistas = ""

    for(let i = 0; i < arraysingers.length; i++){
        artistas += `<article class="burbuja1">
                            <img src="${arraysingers[i].image}" alt="">
                            <h2>${arraysingers[i].name}</h2>
                        </article>`

    }
        seccion.innerHTML = artistas;

})
.catch(function(error) {
    console.log("Error: " + error);
})
