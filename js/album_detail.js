let qs = new URLSearchParams(location.search);
let url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".albumes");
    let arrayalbumes = data.results;
    let albumes = "";

    for(let i = 0; i < arrayalbumes.length; i++){
        albumes +=      `<article class="burbuja1">
                            <img src="${arrayalbumes[i].image}" alt="">
                            <h2>Nombre: ${arrayalbumes[i].name}</h2>
                            <h3>Artista: ${arrayalbumes[i].status}</h3>
                        </article>`

    }
        seccion.innerHTML = albumes;

})
.catch(function(error) {
    console.log("Error: " + error);
})