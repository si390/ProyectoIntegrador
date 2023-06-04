let qs = new URLSearchParams(location.search);
let url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".results");
    let arraysearch = data.results;
    let resultados = "";

    for(let i = 0; i < arraysearch.length; i++){
        resultados +=      `<article class="burbuja1">
                            <img src="${arraysearch[i].image}" alt="">
                            <h2>Nombre: ${arraysearch[i].name}</h2>
                        </article>`

    }
        seccion.innerHTML = resultados;

})
.catch(function(error) {
    console.log("Error: " + error);
})