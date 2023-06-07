let qs = new URLSearchParams(location.search);
let url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".detailgeneros");
    let arraydetailgenres = data.results;
    let detallegeneros = ""

    for(let i = 0; i < arraydetailgenres.length; i++){
        detallegeneros += `<article class="burbuja2generos">
                        <h2>Género: ${arraydetailgenres[i].name}</h2>
                        <p>Detalle: ${arraydetailgenres[i].status}</p>
                    </article>`

    }
        seccion.innerHTML = detallegeneros;

})
.catch(function(error) {
    console.log("Error: " + error);
})

