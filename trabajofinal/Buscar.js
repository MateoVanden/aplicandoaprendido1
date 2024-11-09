import { editarTarea } from "./Editar.js";
import { arrayTarea  } from "./Agregar.js";

export function buscarTareaPorNombre(nombre) {
    let arrayCadena = [];
    //usamos el metodo forEach y comparamos cada objeto tarea con el nombre que recibe la funcion por parametro
    arrayTarea.forEach((tarea, index) => {
        if (tarea.getTitulo().toLowerCase().includes(nombre.toLowerCase())) {
            //si el titulo de la tarea coincide con el nombre que pasamos por parametro se utiliza el metodo push y se guarda la tarea en el nuevo array
            arrayCadena.push({index,tarea});
        }
    });
    if (arrayCadena.length === 0) {
        console.log("No hubo coincidencias con la busqueda ");
    }
    else {
        console.log(`Hubieron ${arrayCadena.length} coincidencias en la búsqueda:`);
        arrayCadena.forEach(({ index, tarea }) => {
            console.log(`[${index + 1}] ${tarea.titulo}`);//mostramos cada tarea coincidente con el parametro de la funcion
        });
    }
    editarTarea();//llamamos a la funcion editar
}

export function buscarTareaPorEstado(estado){
    //utilizamos el metodo filter para filtrar el arrayTarea comparando el estado recibido por parametro con el estado de la tarea
    const tareasFiltradas = arrayTarea.filter((tarea) => tarea.getEstado() === estado);

    if(tareasFiltradas.length > 0){
        console.log("Las tareas encontradas son: ");
        //si el estado coincide se guarda la tarea en el nuevo array y se utiliza el metodo forEach para mostrar las tareas coincidentes
        tareasFiltradas.forEach(function(tarea){
            console.log(`Titulo: ${tarea.getTitulo()}`);
        });
    }
    else{
        console.log(`No hay tareas ${estado} cargadas`);
    }
}