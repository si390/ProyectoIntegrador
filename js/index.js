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