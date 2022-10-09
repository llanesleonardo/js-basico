var miNombre;
miNombre = "Leonardo LLanes";

//Probando el Hoisting
console.log(miVariable);

miVariable = "contenido de la variable";

// Probando Hoisting con funciones

hey();

function hey() {
  console.log("Hola" + miNombre);
}
// Las funciones se declaran antes que las variables

// Las variables y las funciones se declaran primero que cualquier cosa
