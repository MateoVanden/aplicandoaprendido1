import PromptSync from "prompt-sync";
import { menuEditarTarea } from "./Menus.js";
import { getEstado, getDificultad } from "./verEstadoyDificultad.js";
import { limpiarPantalla } from "./PausayLimpiar.js";
import { agregarTitulo, agregarDescripcion, agregarEstado, agregarDificultad, arrayTarea } from "./Agregar.js";
const prompt = PromptSync();
let i, opcion2, op, titulo, descripcion, estado, dificultad;

export function editarTarea() {
    i = parseInt(prompt("Desea ver los detalles de alguna tarea, ingrese el indice si no 0 para volver al menu: "));
    if (i === 0) {
        console.log("Volviendo al menu...");
    }
    else {
        //mostramos detalles de la tarea elegida
        console.log("---------------------------------");
        console.log("Esta es la tarea que elegiste: ");
        console.log(`Título: ${arrayTarea[i - 1].titulo}.`);
        console.log(`Descripcion: ${arrayTarea[i - 1].descripcion}.`);
        const estadoAux = arrayTarea[i - 1].estado;
        console.log(`Estado: ${getEstado(estadoAux)}.`);
        const dificultadAux = arrayTarea[i - 1].dificultad;
        console.log(`Dificultad: ${getDificultad(dificultadAux)}.`);
        console.log(`Fecha Creacion: ${arrayTarea[i - 1].fechaCreacion}.`);

        op = prompt("Si desea editar la tarea, ingrese (E), o (0) para volver: ").toUpperCase();
        while (op != "E" && op != 0) {
            op = prompt("Ingreso una opcion invalida, vuelva a ingresar: ").toUpperCase();
        }
        if (op == 0) {
            limpiarPantalla();
            console.log("Volviendo al menu principal...");
        }
        else {
            opcion2 = menuEditarTarea();
            if (opcion2 != 0) {
                //para editar un atributo de la tarea llamamos a las mismas funciones con las cuales agregamos atributos a la tarea
                switch (opcion2) {
                    case 1:
                        titulo = agregarTitulo();
                        arrayTarea[i - 1].titulo = titulo;
                        break;
                    case 2:
                        descripcion = agregarDescripcion();
                        arrayTarea[i - 1].descripcion = descripcion;
                        break;
                    case 3:
                        estado = agregarEstado();
                        arrayTarea[i - 1].estado = estado;
                        break;
                    case 4:
                        dificultad = agregarDificultad();
                        arrayTarea[i - 1].dificultad = dificultad;
                        break;
                }
            }
            else{
                console.log("Saliendo del menu... ");
            }
        }
    }
}
