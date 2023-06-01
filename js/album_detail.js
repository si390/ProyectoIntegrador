let qs = new URLSearchParams(location.search);
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/302127";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let nombrealbum = document.querySelector("h2");
        let nombreartista = document.querySelector("h3");
        let albumgenero = document.querySelector(".g");
        let fechapublicacion = document.querySelector("p");
        let artista = data.artist.name;
        let album = data.title;
        let genero = data.genres.data[0].name;
        let fecha = data.release_date;
        nombreartista.innerText = artista;
        nombrealbum.innerText = album;
        albumgenero.innerText = genero;
        fechapublicacion.innerText = fecha;

        let imagen = document.querySelector(".album");
        imagen.src = data.cover_medium;

    let cancionespadre = document.querySelector(".canciones");
     

    for (let i = 0; i < data.tracks.data.length; i++){
        cancionespadre.innerHTML += `<li>${data.tracks.data[i].title}</li>
                                        `
                                        
    }

            
})
    .catch(function (error) {
        return console.error(error);
    })
