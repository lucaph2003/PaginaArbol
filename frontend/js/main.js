const api = "http://localhost:3000";

window.addEventListener('load', setupMain);

function setupMain(){
    cargarOvinos();
}

//Metodo puente para cargar ovinos 
async function cargarOvinos(){
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