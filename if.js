if (true) {
  console.log("Hola");
}

if (false) {
} else {
  console.log("Hola");
}

if (false) {
} else if (true) {
  console.log("Hola");
} else {
}

var edad = 18;

if (edad === 18) {
  console.log("Si puede votar");
} else if (edad > 18) {
  console.log("Si puede votar");
} else if (edad < 18) {
  console.log("No puede votar");
} else {
  console.log("No puede votar");
}

// Operador ternario
//condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si es igual a 1" : "No soy un 1 ";
console.log(resultado);
