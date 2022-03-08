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