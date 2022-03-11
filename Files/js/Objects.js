var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Renault", "sandero", 2017)
var autoNuevo3 = new auto("Ford", "Escape", 2000)


function registraAuto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var marca;
var modelo;
var annio;
var autos = [];

for (let i = 0; i <= 2; i++) {
    marca = prompt("Digita la marca");
    modelo = prompt("Digita el modelo");
    annio = prompt("Digita el annio");
autos.push(new registraAuto(marca, modelo, annio));
}
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);    
}



function Datos(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

var persona = [];
for (i = 0; i < 2; i++){
    var nombre = prompt("Digita tu nombre");
    var edad = prompt("Digita tu edad");
    persona.push(new Datos(nombre, edad));
    console.log(persona);
}

function motos(nombre, modelo, precio){
    this.nombre = nombre;
    this.modelo = modelo;
    this.precio = precio;
}

var motoArray = [];

for (i = 0; i < 3; i++){
    var nombre = prompt("Digita el nombre de la moto");
    var modelo = prompt("Digita el modelo");
    var precio = prompt("Digita el precio");

    motoArray.push(new motos(nombre, modelo, precio));
}

console.log(motoArray);

