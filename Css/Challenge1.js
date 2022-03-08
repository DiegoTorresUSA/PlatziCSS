var opc = prompt("Escoge la opcion: 1. tijeras  ----   2. papel ----- 3. piedra");
console.log(opc)
var cpu =prompt("Escoge la opcion de la CPU: 1. tijeras  ----   2. papel ----- 3. piedra")
console.log(cpu)


function ValidaGanador(opc, cpu){
    if (opc == 1 && cpu ==1){
        opc = "tijeras";
        cpu = "tijeras";
        console.log(opc, cpu);
    } else if(opc == 2 && cpu == 2){
        opc = "papel";
        cpu = "papel";
        console.log(opc, cpu);
    }else if(opc == 3 && cpu == 3){
        opc = "piedra";
        cpu = "piedra";
        console.log(opc, cpu);
    }

    if (opc == 1 && cpu == 2 || opc == 2 && cpu == 3 || opc == 3 &&  cpu == 1){
        console.log(opc, cpu)
        console.log("El ganador es el player")
    }else if(cpu == 1 && opc == 3 || cpu == 2 && opc == 1 || cpu == 3 && opc == 2){
        console.log(opc, cpu)
        console.log("La cpu es la ganadora");
    }else{
        console.log(opc, cpu)
        console.log("es un empate")
    }
}



