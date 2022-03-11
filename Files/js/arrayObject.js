var articulos = [
    {nombre: "Bici", costo: 3.000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 25000},
    {nombre: "Laptop", costo: 800.000},
    {nombre: "Teclado", costo: 95000}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=500
})

var costoArticulos = articulos.map(function(articulo){
    return articulo.costo
});

var articulos1 = [
    {nombre: "Bici", costo: 3.000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 25000},
    {nombre: "Laptop", costo: 800.000},
    {nombre: "Teclado", costo: 95000}
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos1.forEach(function(articulo){
    console.log(articulo.nombre)
});

var articulosBaratos = articulos1.some(function(articulo){
    return articulo.costo <= 700;
});





/*Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/

var nombre = "Diego";
var apellido = "Torres";
var userPlatzi =  "@DiegoT2021";
var age = 39;
var email = "mando2567@gmail.com";
var mayorEdad = true;
var money = 1000;
var bills = 500;

console.log(nombre + " " + apellido);
console.log(money - bills);


/* const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");*/

function nameNickname(completeName, nickname){
    var name = "Juan David";
    var lastname = "Castro Gallego";
    var completeName = name + lastname;
    var nickname = "juandc";
    
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);
}

/* 
Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion = "ExpertPlus";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");    
}

const tipoDeSuscripcion = "Free";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} 
if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 
if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");    
}

const tipoDeSuscripcion = 'ExpertPlus';

const suscripciones = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

const tipo = suscripciones[tipoDeSuscripcion];
console.log(tipo);


Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

*/

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

var i= 0;
while (i < 5) {
    i++;
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

var i=10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}