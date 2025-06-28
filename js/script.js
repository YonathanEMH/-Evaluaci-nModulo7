function saludarAlCargar() {
  console.log("¡Hola! Bienvenido al sitio web.");
}

document.addEventListener("DOMContentLoaded", saludarAlCargar);

function cambiarMensaje() {
  let parrafo = document.getElementById("parrafo-bienvenida");
  if (parrafo) {
    parrafo.textContent = "Gracias por visitar esta página creada por un estudiante.";
  }
}

function hacerTest() {
  let respuesta = prompt("¿Te gusta la programación? (sí/no)");

  let resultado = document.getElementById("resultado-test");
  if (resultado) {
    if (respuesta && respuesta.toLowerCase() === "sí") {
      resultado.textContent = "¡Genial! A seguir aprendiendo 💻";
    } else {
      resultado.textContent = "¡Está bien! Todos empezamos desde cero 👶";
    }
  }
}

let botonTest = document.getElementById("boton-hacer-test");
if (botonTest) {
  botonTest.addEventListener("click", hacerTest);
}

