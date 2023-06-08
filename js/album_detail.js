let querystring = location.search;
let querystringobject = new URLSearchParams(querystring);
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums";


fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".albumes");
    let arrayalbumes = data.data;
    let albumes = "";

    for(let i = 0; i < arrayalbumes.length; i++){
        albumes +=      `<article class="burbuja1">
                            <h2>Nombre: ${arrayalbumes[i].title}</h2>
                            <img src=${arrayalbumes[i].cover_medium} alt='' />
                            <p>Artista: ${arrayalbumes[i].artist.name}</p>
                        </article>`

    }
        seccion.innerHTML = albumes;

})
.catch(function(error) {
    console.log("Error: " + error);
})

