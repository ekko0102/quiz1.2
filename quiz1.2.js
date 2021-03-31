

function createFunction(){
    var showButton = document.createElement("button");
    showButton.id = "showButton";
    showButton.innerHTML = "Change this document.";
    document.body.appendChild(showButton);

    var x = document.getElementById("showButton");
    x.addEventListener("click",change);

    function change() {     
        var header = document.getElementById("h1");     
        header.innerHTML = "CSIE@CGU";     
        var para = document.getElementById("p");     
        para.innerHTML = "«ç»ò¨º»ò´Î¡I¡I.";   
    }
    
    var stopFunction = document.createElement("button");
    stopFunction.innerHTML =  "Try it";
    document.body.replaceChild(stopFunction,tryit);
}