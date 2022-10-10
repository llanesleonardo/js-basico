var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

for (let index = 0; index < estudiantes.length; index++) {
  saludarEstudiantes(estudiantes[index]);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

// Hola Maria
// Hola Sergio
// Hola Rosa
// Hola Daniel
// Hola Maria
// Hola Sergio
// Hola Rosa
// Hola Daniel
