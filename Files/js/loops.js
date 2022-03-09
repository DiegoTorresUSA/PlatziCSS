/*loop FOR*/
var estudiantes = ["MAria", "Sergio", "Rosa", "DAniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

/*for (var i = 0; i < estudiante.length; i++){
    saludarEstudiantes(estudiantes[i]);
}*/
 
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/*LOOP WHILE*/

var estudiantes = ["PEdro", "lucas", "Juan"]

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}