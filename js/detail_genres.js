let qs = location.search
let qstoObject = new URLSearchParams(qs);
let datoABuscar = qstoObject.get("id");
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${datoABuscar}`;

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".detailgeneros");
    let detallegeneros = ""

        detallegeneros = `<article class="burbuja1">
                                <h2>Género: ${data.name}</h2>
                                <img src="${data.picture_medium}"></img>
                                <p>Detalle: ${data.type}</p>
                            </article>`


        seccion.innerHTML = detallegeneros;

})
.catch(function(error) {
    console.log("Error: " + error);
})

