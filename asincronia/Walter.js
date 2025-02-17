// que es un callback
/* una función de callback es simplemente una función de JavaScript que se pasa como argumento a otra función y que se ejecuta después de que la primera función completa su tarea. Este patrón es esencial en JavaScript debido a la naturaleza asíncrona del lenguaje, donde ciertas operaciones (como solicitudes a servidores o temporizadores) se completan más tarde, y es necesario ejecutar una función en respuesta a su finalización */

function procesarUsuario(usuario, callback) {
    console.log(`Procesando usuario: ${usuario}`);
    callback();
  }
  
  function notificarFinalizacion() {
    console.log('Procesamiento completado.');
  }
  
  procesarUsuario('Walter', notificarFinalizacion);


  function mostrarMensaje() {
    console.log('Mensaje mostrado después de 2 segundos');
  }
  
  setTimeout(mostrarMensaje, 2000);
  

// que es el hell de  los callback
/* Un problema común al usar callbacks en operaciones asíncronas es el fenómeno conocido como “callback hell”. Esto sucede cuando los callbacks se anidan uno dentro de otro, creando un código difícil de leer y mantener. */

setTimeout(function() {
    console.log('Tarea 1 completada');
    setTimeout(function() {
      console.log('Tarea 2 completada');
      setTimeout(function() {
        console.log('Tarea 3 completada');
      }, 1000);
    }, 1000);
  }, 1000);

// que son promesas

/* 
básicamente, una promesa es un objeto que representa un valor que puede estar disponible en el presente, en el futuro o nunca. Este objeto tiene tres estados posibles:

Pendiente (pending): La operación aún no ha finalizado.
Resuelta (fulfilled): La operación se completó con éxito y la promesa tiene un valor resultante.
Rechazada (rejected): La operación falló y la promesa tiene un motivo de error.
*/

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Mostrar nensaje despues de dos segunso!"), 2000);
  });
  
  // resolve ejecuta la primera función en .then
  promise.then(
    result => console.log(result), 
    error => console.log(error) 
  );



const promesaEncadenada = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
  });
  
  promesaEncadenada
    .then(resultado => {
      console.log("Resultado inicial:", resultado); 
      return resultado * 2;
    })
    .then(nuevoResultado => {
      console.log("Doblado:", nuevoResultado); 
      return nuevoResultado + 5;
    })
    .then(final => {
      console.log("Resultado final:", final); 
    })
    .catch(error => {
      console.log("Error:", error);
    })
    .finally(() => {
      console.log("Operación completada, ya sea éxito o error."); 
    });
  


// que un closure
/* 
Un closure permite que una función acceda a las variables de su entorno exterior, incluso después de que la función externa haya terminado su ejecución.
*/

function crearSaludo(saludo) {
    return function(nombre) {
      return `${saludo}, ${nombre}!`;
    };
  }
  
  const saludoEnEspanol = crearSaludo("Hola");
  console.log(saludoEnEspanol("Walter"));
  
  const saludoEnIngles = crearSaludo("Hello");
  console.log(saludoEnIngles("John"));



  function sumar(a) {
    return function(b) {
      return a + b;
    }
  }
  
  var suma5 = sumar(5);
  console.log(suma5(2)); 
  console.log(suma5(7));

// que es async y await
/* async y await son palabras clave que permiten manejar código asíncrono de manera más clara. Estas herramientas convierten el trabajo con promesas en un proceso más lineal, facilitando la escritura y lectura del código.

async: Convierte automáticamente una función utilitaria en una función asíncrona que devuelve una promesa.
await: Pausa la ejecución de una función async hasta que la promesa asociada sea resuelta o rechazada.
 */

async function saludo() {
    return "Hola, Async/Await";
  }
  
  saludo().then(mensaje => console.log(mensaje));


async function procesoSecuencial() {
const paso1 = await Promise.resolve("Paso 1 completado");
console.log(paso1);

const paso2 = await Promise.resolve("Paso 2 completado");
console.log(paso2);

const paso3 = await Promise.resolve("Paso 3 completado");
console.log(paso3);
}
  
  procesoSecuencial();