import { menuVerTarea } from "./Menus.js/";
import { arrayTarea } from "./Agregar.js";
import { buscarTareaPorEstado } from "./Buscar.js";

export function mostrarTarea() {
    let opcion1 = menuVerTarea();
    if (opcion1 != 0) {
        switch (opcion1) {
            case 1:
                if (arrayTarea.length > 0) {
                    console.log("Estas son todas las tareas: ");
                    arrayTarea.forEach(function (tarea) {
                        console.log(`Titulo: ${tarea.getTitulo()}`);
                    });
                }
                else{
                    console.log("No hay tareas cargadas por el momento ");
                }
                break;
            case 2:
                buscarTareaPorEstado('P');
                break;
            case 3:
                buscarTareaPorEstado('E');
                break;
            case 4:
                buscarTareaPorEstado('T');
                break;
            default:
                console.log("ERROR, opcion incorrecta ");
                break;
        }
    }
    else {
        console.log("Muchas gracias por utilizar el programa ");
    }
}