//creamos dos objetos para estado y dificultad
const estados = {
    "P": "Pendiente",
    "T": "Terminada",
    "E": "En curso",
    "C": "Cancelada"
};

const dificultades = {
    "F": "🔥",
    "M": "🔥🔥",
    "D": "🔥🔥🔥"
};

//utilizamos ambas funciones para comparar el parametro que reciben y de ese modo retornar el valor que coincide 
//con los objetos creados anteriormente

export function getEstado(estado){
    return estados[estado];
}

export function getDificultad(dificultad){
    return dificultades[dificultad];
}

