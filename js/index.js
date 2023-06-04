let qs = new URLSearchParams(location.search);
let urlalbums = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums";
let urlartistas = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/27";
let urlsongs = "https://api.allorigins.win/raw?url=https://api.deezer.com/track/3135556";


fetch(urlalbums)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".album");
    let arrayalbumes = data;
    let albumes = "";

    for(let i = 0; i < arrayalbumes.length; i++){
        albumes +=      `<article>
                            <h3>Name: ${arrayalbumes[i].title}</h3>
                            <img src=${arrayalbumes[i].cover_medium} alt='' />
                            <p>Detalle: ${arrayalbumes[i].artist.name}</p>
                        </article>`

    }
        seccion.innerHTML = albumes;

})
.catch(function(error) {
    console.log("Error: " + error);
})


fetch(urlartistas)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".artistas");
    let arrayartistas = data.id
    let artistas = ""

    for(let i = 0; i < arrayartistas.length; i++){
        artistas +=     `<article>
                            <h3>Name: ${arrayartistas[i].name}</h3>
                            <img src=${arrayartistas[i].picture_small} alt='' />
                            <p>${arrayartistas[i].nb_album}</p>
                        </article>`

    }
        seccion.innerHTML = artistas;

})
.catch(function(error) {
    console.log("Error: " + error);
})




fetch(urlsongs)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".canciones");
    let arraysongs = data.id
    let canciones = ""

    for(let i = 0; i < arraysongs.length; i++){
        canciones += `<article>
                            <h3>Name: ${arraysongs[i].title}</h3>
                            <img src=${arraysongs[i].md5_image} alt='' />                            
                            <p>Duración: ${arraysongs[i].duration}</p>
                        </article>`

    }
        seccion.innerHTML = canciones;

})
.catch(function(error) {
    console.log("Error: " + error);
})



