
var lamp = document.getElementById("lampada")

function lampQuebrada(){
    return lamp.src.indexOf ("quebrada") > -1
}

function ligar(){
    if( !lampQuebrada()){
    lamp.src = "/ligada.jpg";
    }
}

function desligar(){
    if( !lampQuebrada()){
    lamp.src = "/desligada.jpg"}
}

function quebrada(){
    lamp.src= "/quebrada.jpg";
}





















// var acender = document.getElementById("ligado");
// var apagar = document.getElementById("desligado");
// var quebrad = document.getElementById("quebrado");

// function ligar(){

   
//      apagar.style.display = "none";
   
//     acender.style.display = "inline-block";
   
   
// }

// function desligar(){

//     apagar.style.display = "inline-block";
//     acender.style.display = "none";
    
// }

// function quebrado(){

//     quebrad.style.display = "inline-block"
//     acender.style.display = "none";
//     apagar.style.display = "none";
