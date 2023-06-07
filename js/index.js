let qs = new URLSearchParams(location.search);
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/track/3135556";
let articulo = document.querySelectorAll("article");

window.onload = function(){
    fetch(url)
        .then(function (response) {
            return response.json();
        })

        .then(function (dzResult) {
            console.log(dzResult);
        })
    }

let darkmode = document.querySelector('.botondarkmode');
let body = document.body;
let head = document.header;
let lightmode = 'light';

darkmode.addEventListener('click', function(){

    body.style.backgroundColor = "hsla(178, 100%, 87%, 1)";
    head.style.backgroundColor = "hsla(153, 100%, 74%, 1)";
    
})





























