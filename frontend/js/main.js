const api = "https://genesuyapi.up.railway.app/api";

window.addEventListener('load', setupMain);

function setupMain(){
    console.log(estaLogeado());
    //Flujo del NAV
    document.querySelector("#Nav_Buscar_btn").addEventListener("click",function(){cargarCabaniasBuscarUI();mostrarTodosAnimalesUI();});

    //Flujo Usuario
    document.querySelector("#btnLogin").addEventListener("click",LoginUI);

    //Flujo Cliente
    document.querySelector("#btn_InicioUsuario").addEventListener("click",function(){cargarCabaniasBuscarUI();mostrarTodosAnimalesUI();});
    document.querySelector("#btnBuscarAnimalesAll").addEventListener("click",buscarAnimalesALLUI);
}

//#region Metodo de Login
async function LoginUI(){
    try {     
        let email = document.querySelector("#inpEmail").value;
        let password = document.querySelector("#inpPassword").value; 
        await Login(email,password);        
    } catch (error) {
        console.log(error.message);
    }
}

async function Login(email,password){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "email": email,
        "password": password
    });
      
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
   
    fetch(api+"/login", requestOptions)
      .then(response => response.json())
      .then(resp => {
           console.log(resp);
           if(resp.message != "No existe el Administrador"  ){
                localStorage.setItem("usuarioKey",JSON.stringify(resp[0].Codigo));
                localStorage.setItem("usuarioId",JSON.stringify(resp[0].IdNumber));
                console.log(localStorage.getItem("usuarioKey"));
                activarUsuarioLogeado();
                document.querySelector("#pMensajeLogin").innerHTML = ` <p class="alert alert-success my-3" role="alert" >Iniciaste Sesion correctamente</p>`;
                mostrarGrid("Div_Contenedor_Dos");
                limpiarCamposLogin();
                agregarNavBarLogin();
            }else{
                document.querySelector("#pMensajeLogin").innerHTML = ` <p class="alert alert-danger my-3" role="alert" >Usuario no existe o esta mal</p>`;
                console.log("error");
            }          
       })
      .catch(error => console.log('error', error));
}

function activarUsuarioLogeado(){
    const navLista = document.querySelector("#Lista_Nav_desordenada");
    if(estaLogeado){
        console.log("entra ak");
        navLista.innerHTML = `
        <li class="nav-item px-2">
        <span class="nav-link nav_item_Prin" id="Nav_Inicio_btn_logueado">Inicio</span>
      </li>
      <li class="nav-item px-2">
        <span class="nav-link nav_item_Prin" id="Nav_Buscar_btn">Buscar Ovinos</span>
      </li>
      <li class="nav-item px-2">
        <span class="nav-link nav_item_Prin" id="Nav_InicioSesion_btn_Logueado">Cerrar Sesion</span>
      </li>` 

    }else{
        console.log("entra fake");
        navLista.innerHTML = `
        <li class="nav-item px-2">
                <span class="nav-link nav_item_Prin" id="Nav_Inicio_btn">Inicio</span>
              </li>
              <li class="nav-item px-2">
                <span class="nav-link nav_item_Prin" id="Nav_Buscar_btn">Buscar Ovinos</span>
              </li>
              <li class="nav-item px-2">
                <span class="nav-link nav_item_Prin" id="Nav_InicioSesion_btn">Iniciar Sesion</span>
              </li>
              `
    }
}

function estaLogeado(){
    if(localStorage.getItem("usuarioKey") != null)
        return true;
    return false;    
}

function limpiarCamposLogin(){
    document.querySelector("#inpEmail").value = "";
    document.querySelector("#inpPassword").value = "";
    document.querySelector("#pMensajeLogin").innerHTML="";
}

function cerrarSesion(){
    console.log(localStorage.getItem("usuarioKey"));
    localStorage.removeItem("usuarioKey");
    localStorage.removeItem("usuarioId");
    console.log(localStorage.getItem("usuarioKey"));
    activarUsuarioLogeado();
    ventanaInicial();
}

//#endregion

//#region Metodo puente para cargar ovinos 
async function obtenerOvinosUI(){
    try {        
        await obtenerOvinos();        
    } catch (error) {
        console.log(error.message);
    }
}

async function obtenerOvinos(){
     var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");

     var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
     };
    
     fetch(api+"/ovino", requestOptions)
       .then(response => response.json())
       .then(resp => {
            console.log(resp);          
        })
       .catch(error => console.log('error', error));
}
//#endregion

//#region Funcion para cargar Cabanias
async function cargarCabaniasBuscarUI(){
    try {        
        await obtencargarCabaniaserOvinos();        
    } catch (error) {
        console.error(error.message);
    }
}

async function obtencargarCabaniaserOvinos(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
   
    fetch(api+"/cabanias", requestOptions)
      .then(response => response.json())
      .then(resp => {
           console.log(resp.length); 
           console.log(resp);
           let i = 0;
            let card = "";
            while (i < resp.length){
                card+="<option value='"+resp[i].IdCabania+"'>"+resp[i].Nombre+"</option>";            
                i++;
            }   
            document.querySelector("#Select_Cabanias_Buscador").innerHTML=card;           
       })
      .catch(error => console.log('error', error));
}
//#endregion

//#region Funcion para Buscar Animales
async function buscarAnimalesALLUI(){
    try {        
        let idCabania = document.querySelector("#Select_Cabanias_Buscador").value;
        let nombre = document.querySelector("#inpNombreAnimalAll").value;
        await buscarAnimalesALL(idCabania,nombre);        
    } catch (error) {
        console.error(error.message);
    }
}

async function buscarAnimalesALL(idCabania,nombre){
     var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");

     var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow',
       body: JSON.stringify(idCabania,nombre)
     };
   
     fetch(api+"/ovinos", requestOptions)
       .then(response => response.json())
       .then(resp => {
            console.log(resp);          
        })
       .catch(error => console.log('error', error));
 }
//#endregion

//#region Funcion para ver detalles
function verMasUI(event){
    let id = event.target.id;
    id = id.substring(6,id.length);
    verDetalle(id);
}

async function verDetalle(idAnimal){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    fetch(api+"/getOvino/"+idAnimal, requestOptions)
      .then(response => response.json())
      .then(resp => {
           console.log(resp);
           cargarDetalles(resp[0]);
           mostrarGrid("Div_Contenedor_Cinco");
       })
      .catch(error => console.log('error', error));
}

function cargarDetalles(resp) {
    document.querySelector("#detalles_Nombre").innerHTML = resp.Nombre;
    document.querySelector("#detalles_Cabania").innerHTML = resp.IdCabania;
    document.querySelector("#detalles_Fecha").innerHTML = resp.Nacimiento;
    document.querySelector("#detalles_Descripcion_Corta").innerHTML = resp.Descripciondestacada;
    document.querySelector("#detalles_Descripcion").innerHTML = resp.Descripcion;
}

//#endregion

//#region mostrarTodosAnimales
async function mostrarTodosAnimalesUI(){
    try {        
        await mostrarTodosAnimales();   
    } catch (error) {
        console.error(error.message);
    }
}

async function mostrarTodosAnimales(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
   
    fetch(api+"/ovino", requestOptions)
      .then(response => response.json())
      .then(resp => {
           let i = 0;
            let card = "";
            while (i < resp.length){
                card+=`<tr><td>${resp[i].Nombre}</td><td><a href="#" class="table_link" id="arbol${resp[i].IdNumber}">&#127795;</a></td><td><span class="table_link VerMas" id="verMas${resp[i].IdNumber}">🔎</span></td></tr>`;            
                i++;
            }   
            document.querySelector("#table_cliente").innerHTML=card;
            agregarListenersVerMas(); 
       })
      .catch(error => console.log('error', error));
}

//#endregion