const div1 = document.querySelector("#Div_Contenedor_Uno");
const div2 = document.querySelector("#Div_Contenedor_Dos");
const div3 = document.querySelector("#Div_Contenedor_Tres");
const div4 = document.querySelector("#Div_Contenedor_Cuatro");
const div5 = document.querySelector("#Div_Contenedor_Cinco");
const div6 = document.querySelector("#Div_Contenedor_Seis");
const div7 = document.querySelector("#Div_Contenedor_Siete");
const div8 = document.querySelector("#Div_Contenedor_Ocho");

window.addEventListener('load', setupDisplay);

function setupDisplay(){
    mostrar("Div_Contenedor_Ocho");
}

function ocultarTodo(){
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "none";
}

function mostrar(id){
    ocultarTodo();
    document.querySelector(`#${id}`).style.display = "grid";
}