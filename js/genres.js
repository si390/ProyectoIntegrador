
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";

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
                        <a href="./detail_genres.html?id=${arraygenres[i].id}">
                        <h2>${arraygenres[i].name}</h2>
                        <img src="${arraygenres[i].picture_medium}" alt="">
                        <div>
                            <button type="submit"><a href="./detail_genres.html?id=${arraygenres[i].id}">Ver detalle</a></button>
                        </div></a>
                    </article>`

    }
        seccion.innerHTML = generos;

})
.catch(function(error) {
    console.log("Error: " + error);
})

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

