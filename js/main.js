
function activarpanel() {
    const contenedor = document.querySelector(".cont-colores");

    const boton = document.querySelector(".open-panel");

    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}

var link = document.getElementById("filecss")
function golden(){

    link.href="css/style-golden.css";
}
function red(){

    link.href="css/style-red.css";
}
function principal(){

    link.href="css/style.css";
}
