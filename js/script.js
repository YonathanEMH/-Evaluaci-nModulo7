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

      document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre && email && mensaje) {
          document.getElementById('formFeedback').style.display = 'block';
          this.reset();
        } else {
          alert("Por favor completa todos los campos.");
        }
      });


      document.querySelectorAll('.test-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const feedback = document.getElementById('feedback');
          if (this.dataset.answer === 'no') {
            feedback.innerHTML = '<span class="text-success">¡Correcto! Nunca se debe usar la misma contraseña.</span>';
          } else {
            feedback.innerHTML = '<span class="text-danger">Incorrecto. Es un gran riesgo usar una misma contraseña para todo.</span>';
          }
        });
      });