let qs = location.search
let qstoObject = new URLSearchParams(qs);
let datoABuscar = qstoObject.get("id");

if(localStorage.getItem("favoritessongs") != null && localStorage.getItem("favoritessongs")) {
    favoritessongs  = JSON.parse(localStorage.getItem("favoritessongs"))
} 
if(localStorage.getItem("favoritesalbums") != null && localStorage.getItem("favoritesalbums")) {
    favoritesalbums = JSON.parse(localStorage.getItem("favoritesalbums"))
}

let listacanciones  = document.querySelector(".songs")
let listaalbumes    = document.querySelector(".albums")

if(favoritessongs == null && favoritessongs.length == 0) {    
    listacanciones.innerHTML= "<p>No hay favoritos seleccionados</p>"
} else {
    for (let i=0; i<favoritessongs.length; i++){

        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritessongs[i]}?id=${datoABuscar}`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                listacanciones.innerHTML += `
                                            <article class= "burbuja1">
                                                <a href="./song_detail.html?id=${data.id}"><h2>${data.title}</h2></a>
                                                <a href="./song_detail.html?id=${data.id}"><img src="${data.album.cover_medium}"" alt="${data.title}"></a>
                                                <a href="./singer_detail.html?id=${data.artist.id}"><h3>Artista: ${data.artist.name}</h3></a>
                                                    <audio controls>
                                                        <source src="${data.preview}" type="audio/ogg">
                                                        <source src="${data.preview}" type="audio/mpeg">
                                                        Your browser does not support the audio tag.
                                                    </audio>
                                            </article>
                                            `


            })
            .catch(function(error) {
                return error;
            })
        }
    }
if(favoritesalbums == null && favoritesalbums.length == 0) {    
    listaseries.innerHTML= "<p>No hay favoritos seleccionados</p>"
    } else {
        for (let i=0; i<favoritesalbums.length; i++){
            
            fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${favoritesalbums[i]}?id=${datoABuscar}`)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    listaalbumes.innerHTML +=   `
                                                <article class= "burbuja1">
                                                    <a href="./album_detail.html?id=${data.id}"><h2>Nombre: ${data.title}</h2></a>
                                                    <a href="./album_detail.html?id=${data.id}"><img src="${data.cover_medium}"></a>
                                                    <a href="./singer_detail.html?id=${data.artist.id}"><p>Artista: ${data.artist.name}</p></a>
                                                    <p>Fecha de publicación: ${data.release_date}</p>
                                                </article>
                                                `


    })
    .catch(function(error) {
        return error;
    })
        }
    }

    // arranca el dark mode
let darkmode = document.querySelector(".botondarkmode");
let body = document.querySelector("body");
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let icono = document.querySelectorAll(".icono");
let boton = document.querySelectorAll("button");
let botondarkmode = document.querySelector(".botondarkmode");
let buscador = document.querySelector(".buscador");
let botonbuscador = document.querySelector(".botonbuscadorconjava");
let main =  document.querySelector("main");
let h1 = document.querySelector("h1");

darkmode.addEventListener('click', function(){

    body.style.backgroundColor = "hsla(178, 100%, 87%, 1)";
    header.style.backgroundColor = "hsla(153, 100%, 74%, 1)";
    nav.style.backgroundColor = "hsla(209, 10%, 41%, 1)";
    botondarkmode.innerText = "Light Mode";
    buscador.style.border = "0px";
    buscador.style.color = "black";
    h1.style.backgroundColor = "hsla(153, 100%, 74%, 1)";

    /* coolors.co "gradients" */
    main.style.background = "hsla(209, 10%, 41%, 1)";
    main.style.background = "linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.background = "-moz-linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.background = "-webkit-linear-gradient(135deg, hsla(209, 10%, 41%, 1) 0%, hsla(174, 100%, 81%, 1) 21%, hsla(153, 100%, 74%, 1) 81%, hsla(209, 10%, 41%, 1) 100%)";
    main.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#5E6973', endColorstr='#9FFFF5', GradientType=1)";
    
    /* coolors.co "gradients" */
    botondarkmode.style.background = "hsla(178, 100%, 87%, 1)";
    botondarkmode.style.background = "linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botondarkmode.style.background = "-moz-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botondarkmode.style.background = "-webkit-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botondarkmode.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#BDFFFD', endColorstr='#9FFFF5', GradientType=1)";

    /* coolors.co "gradients" */
    botonbuscador.style.background = "hsla(178, 100%, 87%, 1)";
    botonbuscador.style.background = "linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botonbuscador.style.background = "-moz-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botonbuscador.style.background = "-webkit-linear-gradient(135deg, hsla(178, 100%, 87%, 1) 0%, hsla(174, 100%, 81%, 1) 40%, hsla(153, 100%, 74%, 1) 60%, hsla(153, 100%, 74%, 1) 100%)";
    botonbuscador.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#BDFFFD', endColorstr='#9FFFF5', GradientType=1)";

    /* coolors.co "gradients" */
    buscador.style.background = "hsla(153, 100%, 74%, 1)";
    buscador.style.background = "linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.background = "-moz-linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.background = "-webkit-linear-gradient(180deg, hsla(153, 100%, 74%, 1) 0%, hsla(178, 100%, 87%, 1) 100%)";
    buscador.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#bdfffd', endColorstr='#7cffc4', GradientType=1)";
    
    for (let i = 0; i < icono.length; i++){
        /* coolors.co "gradients" */
        icono[i].style.background = "hsla(174, 100%, 81%, 1)";
        icono[i].style.background = "radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.background = "-moz-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.background = "-webkit-radial-gradient(circle, hsla(174, 100%, 81%, 1) 33%, hsla(153, 100%, 74%, 1) 85%)";
        icono[i].style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#9FFFF5', endColorstr='#6ABEA7', GradientType=1)";
    }
})
