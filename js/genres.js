let qs = new URLSearchParams(location.search);
let url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".generos");
    let arraygenres = data.results;
    let generos = ""

    for(let i = 0; i < arraygenres.length; i++){
        generos += `<article class="burbuja2generos">
                        <h2>${arraygenres[i].name}</h2>
                        <p>${arraygenres[i].status}</p>
                        <div>
                            <button type="submit"><a href="./detail_genres.html">Ver detalle</a></button>
                        </div>
                    </article>`

    }
        seccion.innerHTML = generos;

})
.catch(function(error) {
    console.log("Error: " + error);
})

