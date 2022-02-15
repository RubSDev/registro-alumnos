//Se genera una función para capturar los datos del alumno y guardarlos dentro de un objeto que se regresa como return de la función

function capturAlumno() {
  let alumno = {};

  alumno.nombre = prompt("Ingresa nombre(s)");
  alumno.apellido = prompt("Ingresa apellidos");
  alumno.edad = prompt("Ingresa su edad");
  alumno.direccion = prompt("Ingresa dirección");
  alumno.grupo = prompt("Ingresa grupo al que pertenece");

  alumno.materias = {};

  alumno.materias.espanol = parseInt(prompt("Calificación de Español:"));
  alumno.materias.matematicas = parseInt(
    prompt("Calificación de Matemáticas:")
  );
  alumno.materias.artes = parseInt(prompt("Calificación de Artes Visuales:"));
  alumno.materias.ciencias = parseInt(
    prompt("Calificación de Ciencias Naturales")
  );
  alumno.materias.deportes = parseInt(prompt("Calificación de Deportes:"));
  alumno.materias.ingles = parseInt(prompt("Calificación de Inglés:"));

  alumno.promedioGeneral = (
    (alumno.materias.espanol +
      alumno.materias.matematicas +
      alumno.materias.artes +
      alumno.materias.ciencias +
      alumno.materias.deportes +
      alumno.materias.ingles) /
    6
  ).toFixed(2);

  alumno.matricula = (
    alumno.nombre.charAt(0) +
    alumno.apellido.slice(0, 2) +
    alumno.edad.slice(0, 2) +
    alumno.grupo.slice(0, 2)
  ).toUpperCase();

  return alumno;
}

// Se crea un array vacío para almacenar los objetos de los alumnos registrados
let alumnos = [];

// Se ejecuta un ciclo para preguntar si se desea registrar un nuevo alumno
// Mientras el usuario responda "aceptar", se les solicitarán los datos de nuevo alumno y si no saldrá del ciclo
// Los datos capturados se irán agregando en el array "alumnos"
let continuar = true;

do {
  const registro = confirm("¿Deseas registrar un alumno?");
  if (registro === false) {
    continuar = false;
  } else {
    const nuevoAlumno = capturAlumno();

    alumnos.push(nuevoAlumno);
  }
} while (continuar);

// Se ejecuta un ciclo para mostrar los datos del alumno en el navegador utilizando las funciones del DOM

const tabla = document.getElementById("tabla");

for (let i = 0; i < alumnos.length; i++) {
  let nuevoAlum = document.createElement("tr");
  let nombreAlum = document.createElement("td");
  let apellidoAlum = document.createElement("td");
  let edadAlum = document.createElement("td");
  let grupoAlum = document.createElement("td");
  let matriculAlum = document.createElement("td");
  let direccAlum = document.createElement("td");
  let promedio = document.createElement("td");

  nombreAlum.innerText = alumnos[i].nombre;
  apellidoAlum.innerText = alumnos[i].apellido;
  edadAlum.innerText = alumnos[i].edad;
  grupoAlum.innerText = alumnos[i].grupo;
  matriculAlum.innerText = alumnos[i].matricula;
  direccAlum.innerText = alumnos[i].direccion;
  promedio.innerText = alumnos[i].promedioGeneral;

  nuevoAlum.appendChild(nombreAlum);
  nuevoAlum.appendChild(apellidoAlum);
  nuevoAlum.appendChild(edadAlum);
  nuevoAlum.appendChild(grupoAlum);
  nuevoAlum.appendChild(matriculAlum);
  nuevoAlum.appendChild(direccAlum);
  nuevoAlum.appendChild(promedio);

  tabla.appendChild(nuevoAlum);
}
