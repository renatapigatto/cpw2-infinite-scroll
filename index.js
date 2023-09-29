const imgLinks = ["https://http.cat/images/100.jpg", 
                  "https://http.cat/images/101.jpg", 
                  "https://http.cat/images/102.jpg", 
                  "https://http.cat/images/103.jpg", 
                  "https://http.cat/images/200.jpg", 
                  "https://http.cat/images/201.jpg", 
                  "https://http.cat/images/202.jpg", 
                  "https://http.cat/images/203.jpg", 
                  "https://http.cat/images/204.jpg", 
                  "https://http.cat/images/207.jpg", 
                  "https://http.cat/images/301.jpg", 
                  "https://http.cat/images/302.jpg", 
                  "https://http.cat/images/303.jpg", 
                  "https://http.cat/images/305.jpg", 
                  "https://http.cat/images/308.jpg"];


function displayImages(){
    var feed = document.getElementById("feed");

    for(var i = 0; i < imgLinks.length; i++){
        var img = document.createElement("img");
        img.src = selectRandom();

        feed.appendChild(img);
    }
}

function selectRandom(){
    var randomIndex = Math.floor(Math.random()*imgLinks.length);
    var link = imgLinks[randomIndex]

    return link;
}

function infiniteScroll(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        displayImages();
    }
}


