var cores = ["#FF0000", "#000000", "#C0C0C0","#808080", "#FFFFFF",  //vetor com os cód das cores
"#800000", "#800080", "#FF00FF", "#00FFFF", "#008080", "#0000FF",   
"#000080", "#FFFF00", "#808000", "#008000", "#00FF00"]  

var nome = ["red", "black", "silver", "gray", "white", "maroon",    //vetor com o nome de
"purple", "fuchsia/magenta", "aqua/cian", "teal", "blue", "navi",  
"yellow", "olive", "green", "lime"]

var i = 0
var a = window.document.getElementById("quadro")
        
a.addEventListener("click", clicar)
function clicar(){
    a.innerText = nome[i]
    a.style.background = cores[i]
    i++;
    if(i==15) {
        i = 0
    }
}