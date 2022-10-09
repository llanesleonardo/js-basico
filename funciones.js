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
