let qs = location.search
let qstoObject = new URLSearchParams(qs);
let datoABuscar = qstoObject.get("id");
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${datoABuscar}`;


fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".artists");
    let artistas = ""

        artistas += `<article class="burbuja1">
                        <img src="${data.picture_medium}" alt="">
                        <h2>${data.name}</h2>
                    </article>`


        seccion.innerHTML = artistas;

})
.catch(function(error) {
    console.log("Error: " + error);
})

