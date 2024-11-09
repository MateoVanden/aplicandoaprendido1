import PromptSync from "prompt-sync";
const prompt = PromptSync();

//se crean los distintos menus
export function menuInicial(){
    let opcion;
    console.log("--------------------------------------------------------");
    console.log("1.Ver mis tareas");
    console.log("2.Buscar tarea");
    console.log("3.Agregar una tarea");
    console.log("4.Salir");
    console.log("--------------------------------------------------------");
    opcion = parseInt(prompt("Ingrese la opcion que desea realizar: "));
    return opcion;
}

export function menuVerTarea(){
    let opcion1;
    console.log("--------------------------------------------------------");
    console.log("1.Todas");
    console.log("2.Pendientes");
    console.log("3.En curso");
    console.log("4.Terminadas");
    console.log("0.Salir");
    console.log("--------------------------------------------------------");
    opcion1 = parseInt(prompt("Que tarea desea ver?: "));
    return opcion1;
}

export function menuEditarTarea(){
    let opcion2;
    console.log("--------------------------------------------------------");
    console.log("1.Editar titulo");
    console.log("2.Editar descripcion");
    console.log("3.Editar estado");
    console.log("4.Editar dificultad");
    console.log("0.Salir ");
    console.log("--------------------------------------------------------");
    opcion2 = parseInt(prompt("Ingrese el atributo que desea editar: "));
    return opcion2;
}