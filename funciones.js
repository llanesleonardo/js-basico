//Declarativa

function miFuncion() {
  return "Función sin parametros";
}

function miFuncion(x) {
  return "Función con " + x + " parametro";
}

function miFuncion(x, y) {
  return "Función con " + y + " parametros";
}

miFuncion();
miFuncion(1);
miFuncion("Función", 2);

//Expresión con parametros

var miFuncion = function (a, b) {
  return a + b;
};

miFuncion(2, 4);

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
