// existen coerciones explicitas o implicitas

//Coerción implicitas

var n1 = 4 + "7"; // 47 String

var n2 = 4 * "7"; // 28 Number

var n3 = 20;
var n4 = n3 + "";

console.log(n4);

//typeof n4 - String

//coerción explicita

var n5 = String(n3);
var n6 = Number(n3);
