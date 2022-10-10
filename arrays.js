// Definir y asignar valor a variable
var frutas = [];
var masFrutas = [];

frutas[0] = "Manzana";
frutas[1] = "Plátano";
frutas[2] = "Cereza";
frutas[3] = "Fresa";

//console.log(frutas);
//console.log(frutas.length);
frutas.push("Arándano");

var masFrutas = frutas;
console.log(masFrutas + " Detalle");
console.log(masFrutas.length + " Tamaño");

var ultimo = frutas.pop();
console.log(frutas + " Detalle frutas");
console.log(masFrutas + " Detalle masFrutas");
console.log(ultimo + "  Último");

frutas.unshift("Arándano");

var NuevoArreglo = frutas;

console.log(nuevoDato + "  NuevoArreglo");

var posicionDato = NuevoArreglo.indexOf("Plátano");

console.log(posicionDato);
