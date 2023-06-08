let qs = new URLSearchParams(location.search);
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists";


fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".artists");
    let arraysingers = data.data;
    let artistas = ""

    for(let i = 0; i < arraysingers.length; i++){
        artistas += `<article class="burbuja1">
                            <img src="${arraysingers[i].picture_medium}" alt="">
                            <h2>${arraysingers[i].name}</h2>
                        </article>`

    }
        seccion.innerHTML = artistas;

})
.catch(function(error) {
    console.log("Error: " + error);
})

