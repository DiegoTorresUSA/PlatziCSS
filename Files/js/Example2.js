function mostrarMensaje(){
    var edad;
    edad = prompt('Por favor introduce edad:')
    if(edad == ""){
        alert('No has introducido edad')
    }
    edad = Number(edad);

    switch(edad){
        case 0:
            alert("Acaba de nacer hace poco");
            break;
        
        case 18:
            alert("Esta justo la mayoria de edad");
            break;
            
        case 65:
            alert("Está en la edad de jubilación")
            break;
                
        default:
            alert("la edad no es critica");
            break;
    }
}


/*Considera estás desarrollando un script donde trabajas con tipos de motor 
(suponemos que se trata del tipo de motor de una bomba para mover fluidos). 
Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario 
(indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”.*/

function dimeTipoMotor(){
    var opc;
    opc = prompt('Por favor digita el tipo de opcion de motor ');

    opc = Number(opc);

    if(opc === "" ){
        alert("No has digitado una opción");
    }else{
        switch(opc){
            case 1:
            alert("La bomba es una bomba de agua");
            break;
    
            case 2:
            alert("La bomba es una bomba de gasolina");
            break;
    
            case 3:
                alert("La bomba es una bomba de hormigón");
                break;
            
            case 4:
                alert("La bomba es una bomba de pasta alimenticia");
    
            default:
                alert("No existe un valor válido para tipo de bomba");
        }
    }   
} 