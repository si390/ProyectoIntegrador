let querystring = location.search;
let querystringobject = new URLSearchParams(querystring);
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127?secret_key=a3b2f52a155b0e7d06508fd9e27fc4bb";
let secretkey = "a3b2f52a155b0e7d06508fd9e27fc4bb";


fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".albumes");
    let albumes = "";

    for (let i = 0; i < 8; i++) { 
        let album = data;
      
        albumes += `<article class="burbuja1">
                        <img src="${album.cover_medium}" alt="">
                        <h2>Nombre: ${album.title}</h2>
                        <h3>Artista: ${album.artist.name}</h3>
                        <ol>
                            <li>${album.tracks.data[0].title}</li>
                        </ol>
                    </article>`;
      }
        seccion.innerHTML = albumes;

})
.catch(function(error) {
    console.log("Error: " + error);
})
