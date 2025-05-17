let n = 0 ;
function move(){
    n = n + 50;
    let element = document.getElementById("element"); // linking java to html
    element.style.backgroundColor = "pink";
    element.style.left = n+"px"; //definir le type de valeur dans le sens de 50 quoi?
}