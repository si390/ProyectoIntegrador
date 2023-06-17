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

let urlalbumes = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${datoABuscar}/albums`;

fetch(urlalbumes)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let article = document.querySelector(".albumes");
    let arrayalbumes = data.data
    let albumes = ""

    for(let i = 0; i < 5; i++){
        albumes +=      `<article class= "burbuja1">
                            <a href="./album_detail.html?id=${arrayalbumes[i].id}"><h3>${arrayalbumes[i].title}</h3></a>  
                            <a href="./album_detail.html?id=${arrayalbumes[i].id}"><img src="${arrayalbumes[i].cover_small}" alt='' /></a>          
                        </article>`   
                        
            }
    
    article.innerHTML = albumes

})
.catch(function(error) {
    console.log("Error: " + error);
})
