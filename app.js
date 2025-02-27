// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos=[]

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function agregarAmigo() {
 
  let Amigo= document.getElementById('amigo').value;

  if (Amigo==="") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Expresión regular para validar que solo se ingresen letras y espacios
  const esNombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(Amigo);

  if (!esNombreValido) {
    // Si el nombre no es válido, muestra un mensaje y detiene la función
    alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
    return;
    
    } else {

      listaDeAmigos.push(Amigo);
      console.log(listaDeAmigos);
     
     //alert("Se ha añadido un amigo!");
// imprime el resultado en la pantalla
     if (listaDeAmigos.length>0) {
      let textoAmigos = `Lista de Amigos (${listaDeAmigos.length}): ${listaDeAmigos.join(', ')}`;
    
      // Muestra la lista en el elemento 'p'
      asignarTextoElemento('p', textoAmigos);
      
      Amigo++;
  } else {
          asignarTextoElemento('p','agregue un nombre valido');
         
      }
     

    limpiarAmigo();
    return;
     }
}

function limpiarAmigo() {
         document.querySelector('#amigo').value="";
 }  

  function sortearAmigo(){
let amigosorteado= Math.floor(Math.random()*listaDeAmigos.length);
let nombreAmigo = listaDeAmigos[amigosorteado];

console.log("El amigo sorteado es" + nombreAmigo)

asignarTextoElemento("#nombreAmigo", `El amigo  secreto es : ${nombreAmigo}`);
}
 
function borrarDatos() {
  // Borrar los datos del formulario
  document.getElementById("amigo").value = '';
  
  // Recargar la página
  location.reload();  // Esto recargará la página y el formulario estará vacío
}

