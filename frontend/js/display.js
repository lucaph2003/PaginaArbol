const div1 = document.querySelector("#Div_Contenedor_Uno");
const div2 = document.querySelector("#Div_Contenedor_Dos");
const div3 = document.querySelector("#Div_Contenedor_Tres");
const div4 = document.querySelector("#Div_Contenedor_Cuatro");
const div5 = document.querySelector("#Div_Contenedor_Cinco");
const div6 = document.querySelector("#Div_Contenedor_Seis");
const div7 = document.querySelector("#Div_Contenedor_Siete");
const div8 = document.querySelector("#Div_Contenedor_Ocho");
const div9 = document.querySelector("#Div_Contenedor_Nueve");
const div10 = document.querySelector("#nav_principal");

window.addEventListener('load', setupDisplay);

function setupDisplay(){
    //Flujo comun
    ventanaInicial();
    document.querySelector("#headerpage").addEventListener("click",ventanaInicial);

    //NAV
    document.querySelector("#Nav_Inicio_btn").addEventListener("click",ventanaInicial);
    document.querySelector("#Nav_Buscar_btn").addEventListener("click",function(){mostrarBlock("Div_Contenedor_Cuatro")});
    document.querySelector("#Nav_InicioSesion_btn").addEventListener("click",function(){mostrarGrid("Div_Contenedor_Uno")});

    //flujo Cliente
    document.querySelector("#btn_InicioUsuario").addEventListener("click",function(){mostrarBlock("Div_Contenedor_Cuatro")});

    //flujo usuario 
    document.querySelector("#btn_InicioUsuario_Login").addEventListener("click",function(){mostrarGrid("Div_Contenedor_Uno")});
    document.querySelector("#btnBuscarAnimal_usuario").addEventListener("click",function(){mostrarBlock("Div_Contenedor_Cuatro")});
    document.querySelector("#btnVerAnimalesIngresados_usuario").addEventListener("click",function(){mostrarBlock("Div_Contenedor_Tres")});
    document.querySelector("#btnAgregarAnimal_usuario").addEventListener("click",function(){mostrarGrid("Div_Contenedor_Seis")});
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
    div9.style.display = "none";
}

function ventanaInicial(){
    ocultarTodo();
    document.querySelector(`#Div_Contenedor_Ocho`).style.display = "grid";
    document.querySelector(`#Div_Contenedor_Nueve`).style.display = "grid";
}

function mostrarGrid(id){
    ocultarTodo();
    document.querySelector(`#${id}`).style.display = "grid";
}

function mostrarBlock(id){
    console.log("entro");
    ocultarTodo();
    document.querySelector(`#${id}`).style.display = "block";
}

function agregarListenersVerMas() {
    const elementosVerMas = document.querySelectorAll(".VerMas");

    elementosVerMas.forEach(function(elemento) {
        elemento.addEventListener("click", function(event) {
            verMasUI(event);
        });
    });
}

function agregarNavBarLogin(){
    document.querySelector("#Nav_Inicio_btn_logueado").addEventListener("click",function(){mostrarGrid("Div_Contenedor_Dos")});
    document.querySelector("#Nav_Buscar_btn").addEventListener("click",function(){mostrarBlock("Div_Contenedor_Cuatro")});
    document.querySelector("#Nav_InicioSesion_btn_Logueado").addEventListener("click",cerrarSesion);
}