import PromptSync from "prompt-sync";
import { Tareas } from './Tarea.js/'
const prompt = PromptSync();

//creamos el arrayTarea donde almacenaremos todas las tareas
export let arrayTarea = [];

export function agregarTitulo() {
    let titulo = prompt("Designe el título de la tarea: ");
    while (titulo === "") {
        titulo = prompt("El titulo es OBLIGATORIO ingrese nuevamente: ");
    }
    return titulo;
}

export function agregarDescripcion(){
    let descripcion = prompt("Designe la descripción de la tarea: ");
    while (descripcion === "") {
        descripcion = prompt("La descripcion es OBLIGATORIO ingrese nuevamente: ");
    }
    return descripcion;
}

export function agregarEstado(){
    let estado = prompt("Designe el estado de la tarea (P)pendiente,(E)en curso,(T)terminado,(C)cancelado: ").toUpperCase();
    while (estado != "P" && estado != "E" && estado != "T" && estado != "C") {
        estado = prompt("ERROR: el estado ingresado es inválido, ingrese nuevamente: ").toUpperCase();
    }
    return estado;
}

export function agregarDificultad(){
    let dificultad = prompt("Designe la dificultad de la tarea (F)facil,(M)media,(D)dificil: ").toUpperCase();
    while (dificultad != "F" && dificultad != "M" && dificultad != "D") {
        dificultad = prompt("ERROR: la dificultad ingresada es inválida, ingrese nuevamente: ").toUpperCase();
    }
    return dificultad;
}

export function agregarFecha() {
    const fecha = new Date();
    
    // Obtener el año, mes y día
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // +1 porque los meses empiezan en 0
    const dia = fecha.getDate().toString().padStart(2, '0'); // padStart asegura que tenga dos dígitos
    
    // Devolver la fecha en formato YYYY-MM-DD
    return `${año}-${mes}-${dia}`;
}

export function agregarTarea(){
    
    let titulo = agregarTitulo();
    let descripcion = agregarDescripcion();
    let estado = agregarEstado();
    let dificultad = agregarDificultad();
    let fechaCreacion = agregarFecha();

    //crea el objeto nuevaTarea con los datos ingresados por el usuario
    let nuevaTarea = new Tareas(titulo, descripcion, estado, dificultad, fechaCreacion);

    //utilizamos el metodo push para almacenar la nueva tarea a nuestro arrayTareas
    arrayTarea.push(nuevaTarea);
    console.log("Tarea agregada ");

}