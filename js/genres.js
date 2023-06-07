let qs = new URLSearchParams(location.search);
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/editorial";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".generos");
    let arraygenres = data.data;
    let generos = ""

    for(let i = 0; i < arraygenres.length; i++){
        generos += `<article class="burbuja1">
                        <h2>${arraygenres[i].name}</h2>
                        <img src="${arraygenres[i].picture_medium}" alt="">
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

