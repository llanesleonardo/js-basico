var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalledelAuto: function () {
    console.log(this.marca + " " + this.modelo + " " + this.annio);
  },
};
// this es una variable que hace referencia al padre - Al objeto
// Las caracteristicas se pueden acceder con puntos despues del nombre del objeto
//miAuto.marca

console.log(miAuto.detalledelAuto());

//Función constructora

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var AutoNuevo = new auto("Toyota", "Corolla", "2020");

var Auto;
//Creación de un nuevo automóvil

console.log(AutoNuevo);

for (let index = 0; index < 29; index++) {
  Auto = new auto("Toyota", "Corolla", "2020");
  console.log(AutoNuevo);
}

// Métodos de recorridos
var arts = [
  { nombre: "Bici1", costo: 4000 },
  { nombre: "Bici2", costo: 4000 },
  { nombre: "Bici3", costo: 5000 },
  { nombre: "Bici4", costo: 6000 },
  { nombre: "Bici5", costo: 7000 },
];

var articulosFiltrados = arts.filter(function (art) {
  return art.costo <= 4500;
});

console.log(articulosFiltrados);

var nombreArticulos = arts.map(function (art) {
  return art.nombre + " Modernas" + " a solo " + art.costo;
});

console.log(nombreArticulos);

var encuentraArticulo = arts.find(function (art) {
  return art.nombre === "Bici4";
});

console.log(encuentraArticulo);
arts.forEach((art) => {
  console.log(art.costo);
});

var articulosAbajoCuatroMil = arts.some(function (art) {
  return art.costo < 4000;
});

console.log(articulosAbajoCuatroMil);
