// Scope Global

var nombre = "Leonardo";

// Scope Local

function fun() {
  var apellido = "LLanes";
  return nombre + " " + apellido;
}

console.log(fun()); // Leonardo Llanes

console.log(apellido); // Apellido is not defined
