let qs = new URLSearchParams(location.search);
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/302127";
let articulo = document.querySelectorAll("article");

window.onload = function(){
    fetch(url)
        .then(function (response) {
            return response.json();
        })

        .then(function (dzResult) {
            console.log(dzResult);

            //for (let i = 0; i < dzResult.data.length; i++){
                //articulo.innerHTML = "<h2>" + dzResult.data[i].title + "</h2>";
                            //"<h3>" +  dzResult.data[i].artist + "</h3>"
                            //"<h3>" +  dzResult.data[i].genre_id + "</h3>"
                            //"<p>" + dzResult.data[i].release_date + "</p>"
                            //"<ol>"
                                //"<li>" + "</li>"
                                //"<li>" + "</li>"
                                //"<li>" + "</li>"
                                //"<li>" + "</li>"
                                //"<li>" + "</li>"
                            //"</ol>"
            //}
        })
    }   