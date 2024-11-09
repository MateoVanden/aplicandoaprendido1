import PromptSync from "prompt-sync";
import { menuInicial } from "./Menus.js";
import { agregarTarea } from "./Agregar.js";
import { esperarTeclaParaContinuar, limpiarPantalla } from "./PausayLimpiar.js";
import { buscarTareaPorNombre } from "./Buscar.js";
import { mostrarTarea } from "./Mostrar.js";

const prompt = PromptSync();

export function empezarPrograma() {
    let opcion = menuInicial();
    if(opcion!=4){
        switch (opcion) {
            case 1:
                mostrarTarea();
                esperarTeclaParaContinuar();
                limpiarPantalla();
                break;
            case 2:
                let nombre = prompt("Ingrese el titulo de la tarea que desea buscar: ");
                while (nombre === "")
                    nombre = prompt("ERROR, ingrese el titulo porfavor: ");
                buscarTareaPorNombre(nombre);
                break;
            case 3:
                agregarTarea();
                esperarTeclaParaContinuar();
                limpiarPantalla();
                break;
            default:
                console.log("ERROR, opcion incorrecta ");
                break;
        }
        empezarPrograma();
    }
    else{
        console.log("Muchas gracias por utilizar el programa");
    }
}